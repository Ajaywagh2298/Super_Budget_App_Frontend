import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {

  public firstname: string | undefined;
  public lastname: string | undefined;
  public email: string | undefined;
  public username: string | undefined;
  public password: string | undefined;

  constructor(private http: HttpClient) {
  }

  register(username: string, password: string, email: string, firstname: string, lastname: string) {
    return this.http.get(environment.hostUrl + '/api/1/register',
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((res) => {
      this.username = username,
        this.password = password,
        this.registerSuccessfulLogin(username, password);
    }));
  }

  private createBasicAuthToken(username: string, password: string) {
    return 'Basic' + window.btoa(username + ";" + password);
  }

  private registerSuccessfulLogin(username: string, password: string) {

  }

}
