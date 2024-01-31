import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})

export class DadoComponent {

  @Input() valor: number = Math.floor(Math.random() * 6) + 1;
  @Output() propagar = new EventEmitter<number>();


  onPropagar() {
    this.propagar.emit(this.valor);
  }

}
