import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./dado/dado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, DadoComponent]
})
export class AppComponent {
  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;

  asignar1(t:number) {
    this.valor1 = t;
  }

  asignar2(t:number) {
    this.valor2 = t;
  }
  asignar3(t:number) {
    this.valor3 = t;
  }

  sumar() {
    return this.valor1 + this.valor2 + this.valor3;
  }

}
