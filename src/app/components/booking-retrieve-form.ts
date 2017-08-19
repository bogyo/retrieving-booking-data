import { Component , OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Booking } from '../interfaces/booking.interface';

@Component({
  selector: 'retrieve-booking-form',
  templateUrl: './booking-retrieve-form.html',
  styleUrls: [ './booking-retrieve-form.css' ]
})

export class RetrieveBookingFormComponent implements OnInit {
  booking: FormGroup;
  @Output() onGetMyBooking: EventEmitter<Booking> = new EventEmitter<Booking>();

  constructor(private fb: FormBuilder ) {}

  ngOnInit() {
   this.booking =  this.fb.group({
     bookingCode: ['', [
       Validators.required,
       Validators.minLength(5),
       Validators.maxLength(6),
       Validators.pattern('^[a-zA-Z2-9]+$')
     ]],
     lastName: ['', [
       Validators.required,
       Validators.minLength(2),
       Validators.maxLength(30),
       Validators.pattern('^[a-zA-Z]+$')
     ]]
   });
  }

  getMyBooking(payload: Booking) {
    console.log(payload);
    this.onGetMyBooking.emit(payload);
  }

  onSubmit({ value: Booking, valid: boolean }) {
   this.getMyBooking(Booking);
  }
}
