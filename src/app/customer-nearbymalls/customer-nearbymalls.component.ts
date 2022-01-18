import { Component, OnInit } from '@angular/core';

declare let L: any;

@Component({
  selector: 'app-customer-nearbymalls',
  templateUrl: './customer-nearbymalls.component.html',
  styleUrls: ['./customer-nearbymalls.component.css']
})
export class CustomerNearbymallsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {if (!navigator.geolocation) {
    console.log('location is not supported');
  }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      const mymap = L.map('map').setView(latLong, 12);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ', {attribution: 'Map data &copy; ' + '' +
            '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);

      const marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Big Bazar</b>').openPopup();

      const popup = L.popup()
        .setLatLng(latLong)
        .setContent('Nagpur')
        .openOn(mymap);
    });
    this.watchPosition();
  }

  watchPosition() {
    const desLat = 0;
    const desLon = 0;
    const id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
