import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './paginas/inicio/header/header.component';
import { FooterComponent } from './paginas/inicio/footer/footer.component';
import { BodyComponent } from './paginas/inicio/body/body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
              RouterOutlet,
              HeaderComponent, FooterComponent,
              BodyComponent
  ],
})
export class AppComponent {
  title = 'PyEducacionVirtualh2025';
}
