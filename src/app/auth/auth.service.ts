import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {QUIZA_API_URL} from "../../enviroment/env";
import {LoginRequestDto} from "../../globals/dtos/login-request.dto";
import {User} from "../../globals/entities/user.model";
import {Observable} from "rxjs";
import {RegisterRequestDto} from "../../globals/dtos/register-request.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(loginRequestDto: LoginRequestDto) {
    return this.http.post<User>(`${QUIZA_API_URL}/login`, loginRequestDto);
  }

  public startRegistration(registerRequestDto: RegisterRequestDto):Observable<RegisterRequestDto>{
    return this.http.post<RegisterRequestDto>(`${QUIZA_API_URL}/sign-up`, registerRequestDto);
  }

  public confirmRegisteredEmail(emailHash: string):Observable<User> {
    return this.http.post<User>(`${QUIZA_API_URL}/confirmation-email`, emailHash)
  }
}
