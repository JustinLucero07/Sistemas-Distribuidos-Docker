import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent implements OnInit {
  personas: any[] = [];
  nuevaPersona = { nombre: '', edad: 0};

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.listarPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  agregarPersona(): void {
    if (this.nuevaPersona.nombre) {
      this.personaService.agregarPersona(this.nuevaPersona).subscribe(() => {
        this.cargarPersonas(); 
        this.nuevaPersona = { nombre: '', edad: 0}; 
      });
    }
  }
}
