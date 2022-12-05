import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Room } from '../models/room.interface';

@Injectable({
    providedIn: 'root'
})
export class RoomsDataService {
    resourceURL: string = `${environment.api}/rooms`

    constructor(private http: HttpClient) { }

    getRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(this.resourceURL)
    }

    getRoom(hash: string): Observable<Room> {
        return this.http.get<Room>(`${this.resourceURL}/${hash}`)
    }

    add(data: Room): Observable<any> {
        // return this.http.post(this.resourceURL, data, this.urlOptions())
        return this.http.post(this.resourceURL, data)
    }

    update(hash: string, data: Room): Observable<any> {
        // return this.http.put(`${this.resourceURL}/${hash}`, data, this.urlOptions())
        return this.http.put(`${this.resourceURL}/${hash}`, data)
    }

    delete(hash: string): Observable<any> {
        return this.http.delete(`${this.resourceURL}/${hash}`)
    }
}
