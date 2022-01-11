import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public username: any;
  public password: any;

  constructor(private http: HttpClient) {
  }

  /*login(username: string, password: string) {
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
  }*/

  registerApiUrl = 'http://localhost:8081/customer/register';
  createData(data:any):Observable<any>{
    console.log(data,'createApi=>');
    return this.http.post(`${this.registerApiUrl}`,data);
  }

  loginApiUrl='http://localhost:8081/customer/login';
  loginData(data:any):Observable<any>{
    console.log(data,'loginApi=>');
    return this.http.post(`${this.loginApiUrl}`,data);


  }
}
