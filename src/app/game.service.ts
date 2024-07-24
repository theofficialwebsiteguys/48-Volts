import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameLink: string = '';
  private gameTitle: string = '';

  setGameLink(link: string): void {
    this.gameLink = link;
  }

  getGameLink(): string {
    return this.gameLink;
  }

  setGameTitle(title: string): void {
    this.gameTitle = title;
  }

  getGameTitle(): string {
    return this.gameTitle;
  }
}
