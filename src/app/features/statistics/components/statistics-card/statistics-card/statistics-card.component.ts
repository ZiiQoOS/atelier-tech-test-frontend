import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss']
})
export class StatisticsCardComponent implements OnInit {

  @Input() statistics: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
