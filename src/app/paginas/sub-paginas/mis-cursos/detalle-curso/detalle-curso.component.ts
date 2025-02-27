import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../primeng.module';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss'],
  imports:[PrimengModule]
})
export class DetalleCursoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
