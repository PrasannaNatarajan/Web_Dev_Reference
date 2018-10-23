import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-shuttle',
  templateUrl: './datepicker.component.html'
  //styleUrls: ['./shuttle.component.scss']
})
export class DatepickerComponent implements OnInit {
    dateOfBirth: Date= new Date('10/25/1988');
    ngOnInit(){}
}
