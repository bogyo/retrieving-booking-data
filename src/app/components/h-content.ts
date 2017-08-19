import { Component } from '@angular/core';

@Component({
  selector: 'h-content',
  styleUrls: ['./h-content.css'],
  templateUrl: './h-content.html',
  })

// probably using internationalized version of text
// in real application

export class HeaderContentComponent {
   title = 'Retrieve your booking';
   description = 'You can find your booking by filling out your family name\
   and the booking code in your booking confirmation.';
}
