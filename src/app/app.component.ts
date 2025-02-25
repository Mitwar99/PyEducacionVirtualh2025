import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet,QuienesSomosComponent],
})
export class AppComponent {
  title = 'PyEducacionVirtualh2025';
}
