import { Component, OnInit } from '@angular/core';
import { QuienesSomosComponent } from '../../sub-paginas/quienes-somos/quienes-somos.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  imports: [
    QuienesSomosComponent,
                BodyComponent
    ],
  
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
