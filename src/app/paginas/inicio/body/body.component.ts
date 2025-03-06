import { Component, OnInit } from '@angular/core';
import { QuienesSomosComponent } from '../../sub-paginas/quienes-somos/quienes-somos.component';
import { MisCursosComponent } from '../../sub-paginas/mis-cursos/mis-cursos.component';
import { DetalleCursoComponent } from '../../sub-paginas/mis-cursos/detalle-curso/detalle-curso.component';
import { SlidersComponent } from './sliders/sliders.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  imports: [
              QuienesSomosComponent,
             MisCursosComponent,DetalleCursoComponent,
             SlidersComponent,
    ],
  
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
