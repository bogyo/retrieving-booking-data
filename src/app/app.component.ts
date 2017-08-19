import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { BookingService } from './services/booking.service';
import { Booking } from './interfaces/booking.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  booking: any;
  objectKeys = Object.keys;

  constructor(private bookingService: BookingService) {}
  public flattenData(data: any) {
    //TODO: refact this fn
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) { // if node
            result[prop] = cur;
        } else if (Array.isArray(cur)) { // if arr
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}

  onGetMyBooking(payload:Booking) {
    this.bookingService.getBookingByCode(payload)
    .subscribe(
       data => {
          this.booking = this.flattenData(data);
        },
       error => console.error('Error: ' ),
       () => console.log('Completed!', this.booking)
     );
  }
};
