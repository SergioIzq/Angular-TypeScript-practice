import { Component } from '@angular/core';
import { Personaje } from '../personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {

  personajes: Personaje[] = [
    {
      id: 1,
      nombre: "Frodo",
      nivel: 15
    },

    {
      id: 2,
      nombre: "Gandalf",
      nivel: 20
    },

    {
      id: 3,
      nombre: "Sauron",
      nivel: 100
    }
  ]

  // declara la propiedad personajeSel para guardar el personaje sobre el que hacemos clic
  personajeSel!: Personaje;
  onSelect(personaje: Personaje): void {
    this.personajeSel = personaje;
  }
}


