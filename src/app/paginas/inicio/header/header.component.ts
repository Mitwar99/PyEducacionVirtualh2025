import { Component, OnInit, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../../../service/photoservice';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ GalleriaModule ],
  providers:[PhotoService]
})
export class HeaderComponent implements OnInit {
  // images: any[] = [];

  //   responsiveOptions: any[] = [
  //       {
  //           breakpoint: '1300px',
  //           numVisible: 4
  //       },
  //       {
  //           breakpoint: '575px',
  //           numVisible: 1
  //       }
  //   ];

  constructor(private photoService: PhotoService) { }
  
  ngOnInit() {
    // this.photoService.getImages().then((images) => {
    //   this.images = images; // Asignación correcta
    // });
}

}
