import { Component } from '@angular/core';

@Component({
  selector: 'h-title',
  styleUrls: ['./h-title.css'],
  template: `<div>{{title}}</div>`
  })

// probably using internationalized version of text
// in real application

export class HeaderTitleComponent {
   title = 'Check In';
}
