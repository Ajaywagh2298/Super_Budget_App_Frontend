import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BeepService } from '../services/beep.service';
// import Quagga from "@ericblade/quagga2";
import Quagga from '@ericblade/quagga2';
import { Article } from './article';
import { ShoppingCart } from './shopping-cart';
import { UpdateService } from '../services/update.service';
import { environment } from "../../environments/environment";
import { getMainBarcodeScanningCamera } from './camera-access';
@Component({
  selector: 'app-scan-main',
  templateUrl: './scan-main.component.html',
  styleUrls: ['./scan-main.component.css']
})
export class ScanMainComponent implements AfterViewInit {

  started: boolean | undefined;
  errorMessage: string | undefined;
  acceptAnyCode = true;
  items: [Article, number][] = [];
  totalPrice: number = 0;

  private catalogue: Article[] = [
    { name: 'Cadbury Dairy Milk Silk', ean: '7601234567890', image: 'assets/cadbury.jpg', price: 10 },
    { name: 'Mi Smart TV', ean: '7601234561232', image: 'assets/img/tv.png', price: 36000 },
    { name: 'clothes', ean: '7601234564561', image: 'assets/img/brand_04.png', price: 50 },
    { name: 'Vegetable', ean: '7645678901001', image: 'assets/img/vegetable.png', price: 5 },
    { name: 'Makeup', ean: '9780201379624', image: 'assets/img/makeup.png', price: 100 },
  ];

  private shoppingCart: ShoppingCart;
  private lastScannedCode: string | undefined;
  private lastScannedCodeDate: number  | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private beepService: BeepService,
              private updateService: UpdateService) {
    this.shoppingCart = new ShoppingCart();
  }

  ngAfterViewInit(): void {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported';
      return;
    }

    this.initializeScanner();

    if (environment.production) {
      setTimeout(() => {
        this.updateService.checkForUpdates();
      }, 10000);
    }
  }

  private initializeScanner(): Promise<void> {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported. Please use Chrome on Android or Safari on iOS';
      this.started = false;
      return Promise.reject(this.errorMessage);
    }

    // enumerate devices and do some heuristics to find a suitable first camera
    return Quagga.CameraAccess.enumerateVideoDevices()
        .then(mediaDeviceInfos => {
          const mainCamera = getMainBarcodeScanningCamera(mediaDeviceInfos);
          if (mainCamera) {
            console.log(`Using ${mainCamera.label} (${mainCamera.deviceId}) as initial camera`);
            return this.initializeScannerWithDevice(mainCamera.deviceId);
          } else {
            console.error(`Unable to determine suitable camera, will fall back to default handling`);
            return this.initializeScannerWithDevice(undefined);
          }
        })
        .catch(error => {
          this.errorMessage = `Failed to enumerate devices: ${error}`;
          this.started = false;
        });
  }

  private initializeScannerWithDevice(preferredDeviceId: string | undefined): Promise<void> {
    console.log(`Initializing Quagga scanner...`);

    const constraints: MediaTrackConstraints = {};
    if (preferredDeviceId) {
      // if we have a specific device, we select that
      constraints.deviceId = preferredDeviceId;
    } else {
      // otherwise we tell the browser we want a camera facing backwards (note that browser does not always care about this)
      constraints.facingMode = 'environment';
    }

    return Quagga.init({
          inputStream: {
            type: 'LiveStream',
            constraints,
            area: { // defines rectangle of the detection/localization area
              top: '25%',    // top offset
              right: '10%',  // right offset
              left: '10%',   // left offset
              bottom: '25%'  // bottom offset
            },
            target: document.querySelector('#scanner-container') ?? undefined
          },
          decoder: {
            readers: ['ean_reader'],
            multiple: false
          },
          // See: https://github.com/ericblade/quagga2/blob/master/README.md#locate
          locate: false
        },
        (err) => {
          if (err) {
            console.error(`Quagga initialization failed: ${err}`);
            this.errorMessage = `Initialization error: ${err}`;
            this.started = false;
          } else {
            console.log(`Quagga initialization succeeded`);
            Quagga.start();
            this.started = true;
            this.changeDetectorRef.detectChanges();
            Quagga.onDetected((res) => {
              if (res.codeResult.code) {
                this.onBarcodeScanned(res.codeResult.code);
              }
            });
          }
        });
  }

  onBarcodeScanned(code: string) {

    // ignore duplicates for an interval of 1.5 seconds
    const now = new Date().getTime();
    if (code === this.lastScannedCode
        && ((this.lastScannedCodeDate !== undefined) && (now < this.lastScannedCodeDate + 1500))) {
      return;
    }

    // only accept articles from catalogue
    let article = this.catalogue.find(a => a.ean === code);
    if (!article) {
      if (this.acceptAnyCode) {
        article = this.createUnknownArticle(code);
      } else {
        return;
      }
    }
    this.shoppingCart.addArticle(article);
    this.items = this.shoppingCart.contents;
    this.totalPrice = this.shoppingCart.totalPrice;

    this.lastScannedCode = code;
    this.lastScannedCodeDate = now;
    this.beepService.beep();
    this.changeDetectorRef.detectChanges();
  }

  clearCart() {
    this.shoppingCart.clear();
    this.items = this.shoppingCart.contents;
  }

  private createUnknownArticle(code: string): Article {
    return {
      ean: code,
      name: `Unknown Data`,
      image: 'assets/img/ajax-loader.gif',
      price: 0
    }
  }

}

