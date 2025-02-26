import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss'],
  imports: [
    CardModule,
  ]
})
export class QuienesSomosComponent implements OnInit {
  imagenUrl = './src/assets/imagenes/mikaf.jpg';
  constructor() { }

  ngOnInit() {
  }

}
