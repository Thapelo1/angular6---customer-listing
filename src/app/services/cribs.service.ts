import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/customers.json').map(res => res.json());
  }

  addCrib(data) {
    data.img = 'user-default';
    this.newCribSubject.next(data);
  }

}
