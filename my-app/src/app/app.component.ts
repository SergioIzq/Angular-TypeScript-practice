import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Mi increíble calculadora";
  counter: number = 2;

  aumentar(): void {
    this.counter += 1;
  }

  decrementar(): void {
    this.counter -= 1;
  }

  resetear(): void {
    this.counter = 0;
  }
}

