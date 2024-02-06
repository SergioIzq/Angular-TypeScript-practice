import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteGame = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Elden Ring'
    },
    {
      id: 2,
      name: 'Mortal Kombat 1'
    },
    {
      id: 3,
      name: 'Dead By Daylight'
    }
  ]

  fav(gameName:string) {
    this.addFavoriteGame.emit(gameName);
  }
}
