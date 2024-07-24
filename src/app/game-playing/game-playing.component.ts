import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesComponent } from '../games/games.component';
import { GameService } from '../game.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-playing',
  templateUrl: './game-playing.component.html',
  styleUrls: ['./game-playing.component.scss']
})
export class GamePlayingComponent implements OnInit {
  gameLink!: SafeResourceUrl;
  gameTitle!: string;

  constructor(private router: Router, private gameService: GameService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const gameUrl = this.gameService.getGameLink();
    this.gameTitle = this.gameService.getGameTitle();
    if (gameUrl) {
      this.gameLink = this.sanitizer.bypassSecurityTrustResourceUrl(gameUrl);
    } else {
      console.error('Game link is missing');
      this.router.navigate(['/']);
    }
  }

  goBack(): void {
    this.router.navigate(['/games']); // Adjust this path as necessary
  }
}
