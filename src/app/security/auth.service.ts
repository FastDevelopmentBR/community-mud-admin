import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    logged: boolean = false
    constructor(private http: HttpClient) { }

    public isLoggedIn(): boolean {
        return this.logged;
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.post(environment.api + '/login', { email, password })
    }

    logout(): void {
        this.logged = false
    }
}