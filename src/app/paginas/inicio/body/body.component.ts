import { Component, OnInit } from '@angular/core';
import { QuienesSomosComponent } from '../../sub-paginas/quienes-somos/quienes-somos.component';
import { MisCursosComponent } from '../../sub-paginas/mis-cursos/mis-cursos.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  imports: [
              QuienesSomosComponent,
             MisCursosComponent
    ],
  
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
