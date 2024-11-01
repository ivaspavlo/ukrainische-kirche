import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';

import { API_URL } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
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

  public signin(email: string, password: string): Observable<unknown> {
    const body = {
      email,
      password,
      name: 'Test1',
      role: 'manager',
      birthDateMs: 576453600000
    }
    return this.#http.post<unknown>(`${API_URL}/account`, body);
  }
}
