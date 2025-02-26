import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../../../service/productservice';
import { Product } from '../../../../domain/product';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss'],
  imports:[ CarouselModule, ButtonModule,
            TagModule
  ],
  providers: [ProductService]
})
export class MisCursosComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
  });

  this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1220px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  getSeverity(status: string){
    switch(status){
      case 'INSTOCK':
        const nn = 'succes'
        console.log("hola", nn);
      break
    }
  }
//   getSeverity(status: string) {
//     switch (status) {
//         case 'INSTOCK':
//             return 'success';
//         case 'LOWSTOCK':
//             return 'warning';
//         case 'OUTOFSTOCK':
//             return 'danger';
//     }
// }

}
