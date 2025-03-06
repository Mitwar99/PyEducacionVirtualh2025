import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../primeng.module';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss'],
  imports: [PrimengModule]
})
export class SlidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
