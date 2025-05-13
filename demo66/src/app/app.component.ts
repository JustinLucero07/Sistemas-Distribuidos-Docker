import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Justin Lucero';
}
