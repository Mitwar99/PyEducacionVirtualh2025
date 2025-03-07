import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../../../service/productservice';
import { Product } from '../../../../domain/product';
import { PrimengModule } from '../../../primeng.module';


@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss'],
  imports:[ CarouselModule, ButtonModule,
            TagModule,PrimengModule
  ],
  providers: [ProductService]
})
export class MisCursosComponent implements OnInit {
  cursos = [
    {
      titulo: 'Diplomado: Estrategias Innovadoras para la Educación Inicial',
      subtitulo: 'Formación en educación inicial',
      descripcion: 'Este diplomado ofrece herramientas y metodologías innovadoras para fortalecer la enseñanza en educación inicial...',
      imagen: 'capacitate/recursos/imagenProf.jpg'
    },
    {
      titulo: 'Diplomado en Educación Digital',
      subtitulo: 'Uso de tecnología en el aula',
      descripcion: 'Aprende a integrar herramientas digitales en la enseñanza y mejorar la experiencia educativa de los estudiantes...',
      imagen: 'capacitate/recursos/imagenDisc.jpg'
    },
    {
      titulo: 'Diplomado en Psicopedagogía',
      subtitulo: 'Atención a la diversidad',
      descripcion: 'Desarrolla estrategias psicopedagógicas para mejorar el aprendizaje de niños con diferentes necesidades...',
      imagen: 'capacitate/recursos/imagenCharl.jpg'
    },
    {
      titulo: 'Diplomado en Psicopedagogía',
      subtitulo: 'Atención a la diversidad',
      descripcion: 'Desarrolla estrategias psicopedagógicas para mejorar el aprendizaje de niños con diferentes necesidades...',
      imagen: 'capacitate/recursos/imagenCharl.jpg'
    }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }


}
