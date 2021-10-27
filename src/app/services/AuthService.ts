import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public username: any;
  public password: any;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Headers", "X-Requested-With")
    };

    return this.http.post(environment.hostUrl + '/login',body.toString(), options )
  }

  private createBasicAuthToken(username: string, password: string) {
    return 'Basic' + window.btoa(username + ";" + password);
  }

  private registerSuccessfulLogin(username: string, password: string) {

  }

}
