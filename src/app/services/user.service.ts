import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

export interface Credential {
  username: string,
  password: string,
  isSave?: boolean
}

export interface Role {
  id: number,
  authority: string
}

export interface User {
  id: number,
  username: string,
  email: string,
  phone: string,
  date: Date,
  roles: Role[],
}

export interface RegisterUser {
  email: string,
  phone: string,
  username: string,
  password: string,
  repeatPassword: string,
  agree: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path: string = '/api/user';
  authenticated: boolean = false;
  user?: User;

  constructor(private http: HttpClient, /*private router: Router*/) { 
    this.restore();
  }

  authenticate(credential: Credential, callback: Function): void {
    const authorization: string = 'Basic ' + btoa(credential.username + ':' + credential.password);
    const headers = new HttpHeaders(credential ? {
      authorization: authorization,
      "X-Requested-With": "XMLHttpRequest"
    } : {});

    this.http.get<User>(this.path + '/login', {headers: headers}).subscribe(user => {
      if (user) {
        this.authenticated = true;
        this.user = user;
        if (credential.isSave) {
          this.saveLocalStorage(authorization);
        }
      } else {
        this.authenticated = false;
        this.user = undefined;
        this.remove();
      }

      return callback && callback(!this.authenticated, this.user);
    })
  }

  logout(callback: Function) {
    this.http.post('/api/logout', {}).pipe(
      finalize(() => {})
    ).subscribe(() => {
        this.authenticated = false;
        this.user = undefined;
        this.remove();
        return callback && callback();
    });
  }
  
  isAdmin(): boolean {
    if (this.authenticated && this.user) {
      console.log('app.service isAdmin: ', this.user.roles.find(role => role.authority === "ADMIN"), this.user);
      return this.user.roles.find(role => role.authority === "ADMIN") !== undefined;
    }

    return false;
  }

  restore() {
    let authorization = this.get();
    if (authorization !== null) {
      const headers = new HttpHeaders({
        authorization: authorization,
        "X-Requested-With": "XMLHttpRequest"
      });
  
      this.http.get<User>(this.path + '/login', {headers: headers}).subscribe(user => {
        if (user) {
          this.authenticated = true;
          this.user = user;
          //this.router.navigateByUrl("/");
        } else {
          this.authenticated = false;
          this.user = undefined;
          this.remove();
        }
      })
    }
  }

  saveLocalStorage(authorization: string): void {
    localStorage.setItem("authorization", authorization);
  }

  get(): string | null {
    return localStorage.getItem("authorization");
  }

  remove(): void {
    localStorage.removeItem("authorization");
  }
}
