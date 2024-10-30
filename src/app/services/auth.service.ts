import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@env/environment';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #http: HttpClient = inject(HttpClient);

  constructor() { }

  public login(email: string, password: string): any {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        debugger;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  public signin(email: string, password: string): any {
    // validateUserName(body[UserClientModel.kName]);
    // validateUserEmail(body[UserClientModel.kEmail]);
    // validateUserRole(body[UserClientModel.kRole]);
    // validateUserBirthDate(body[UserClientModel.kBirthDateMillisecondsSinceEpoch]);
    // validateUserPassword(body[UserClientModel.kPassword]);
    
    this.#http.post<any>(`${API_URL}/account`, {});
  }
}
