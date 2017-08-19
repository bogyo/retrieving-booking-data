import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Booking } from '../interfaces/booking.interface';

@Injectable()
export class BookingService {
  // URL to the mocked web api
  private bookingUrl = 'api/booking';

  // adding callback, ghow to handle response data/error
  private extractData(res: Response) {
   let body = res.json();

   return body.data || { };
 }

  private handleError (error: Response | any) {

     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     return Observable.throw(errMsg);
   }

  constructor(private http: Http) {}

  getBookingByCode(payload: Booking): Observable<Booking> {
    // I would rather use url/bookings/:bookingCode only
    // but angular-in-memory-web-api is use this form to find by id.
    // workaround using this custom query form like:  url/bookings/?:paramName=value

    //TODO: send lastName as well and check if it is correct together  the booking code
    // write regex here to handle this as angular-in-memory-web-api doc suggest

    const param = `/?bookingCode=${payload.bookingCode}`;

    return this.http.get(this.bookingUrl + param)
    .map(this.extractData)
    .catch(this.handleError);

}
}
