import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

interface Game {
  title: string;
  description: string;
  link: string;
  image: string; // Add this line
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  games: Game[] = [
    { title: 'Solitaire', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Hearts', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Spades', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Crazy Eights', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Go Fish', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Old Maid', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Rummy', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Pinochle', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Bridge', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'War', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Gin Rummy', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Euchre', description: 'Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    // Add more games here with images...
  ];
  

  constructor(private router: Router, private gameService: GameService) {}

  selectGame(game: Game): void {
    this.gameService.setGameLink(game.link);
    this.gameService.setGameTitle(game.title);
    this.router.navigate(['/play']);
  }
}
