import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ArchiveService{
    constructor(private http: Http){

    }
    getTickets(){
        return this.http.get('../assets/tickets.json').map(res=>res.json());
    }
}