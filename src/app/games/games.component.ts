import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { NavComponent } from '../nav/nav.component';

interface Game {
  title: string;
  description: string;
  link: string;
  image: string; // Add this line
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  games: Game[] = [
    { title: 'Solitaire', description: 'Solitaire Card Game', link: 'https://frvr.com/play/solitaire/', image: 'assets/games/solitaire.png' },
    { title: 'Hearts', description: 'Hearts Card Game', link: 'https://www.free-hearts.com/#/app/game', image: 'assets/games/hearts.png' },
    { title: 'Spades', description: 'Spades Card Game', link: 'https://www.online-spades.com/#/app/game', image: 'assets/games/spades.png' },
    { title: 'Crazy Eights', description: 'Crazy Eights Card Game', link: 'https://cdn.htmlgames.com/CrazyEights/index.html', image: 'assets/games/crazy8.png' },
    //{ title: 'Go Fish', description: 'Go Fish Card Game', link: 'https://raconteur81.itch.io/gofish', image: '../assets/games/gofish.png' },
    //{ title: 'Old Maid', description: 'Card Game', link: 'https://www.xpgameplus.com/games/oldmaid/index.html', image: 'assets/games/solitaire.png' },
    { title: 'Rummy', description: 'Rummy Card Game', link: 'https://www.calculators.org/games/rummy/game.php', image: 'assets/games/rummy.png' },
    { title: 'Pinochle', description: 'Pinochle Card Game', link: 'https://games.masque.com/games/cardgames/cardgames_haxe.php?handleErrors=true&webhost=https%3A%2F%2Fgames.masque.com%2Fgames%2Fcardgames&avatarRenderer=https%3A%2F%2Fgames.masque.com%2Floadavatar.php&lang=en&locale=us&guidname=wi0crv9s%3Atemp&username=GUESTwi0crv9s&ticket=wi0crv9s%3Atemp66CE474125A9FBEA&avatardna=ADNA3FDefault_006.png*Default_Bld_006.png&usernamelc=wi0crv9s%3Atemp&signOnType=masquerade&chatSource=JavaScript&chatDestination=JavaScript&proxyServer=ws1.masque.com&proxyPort=443&proxyRange=1&server=cgServer1&lobby=lobbyServer3&game=pinochle%3A0&room=Royal%20Marriage%3Apinochle%3A0%3ASocial%3A2781&iap=masque&affiliateId=22&gameClientSwf=cardgames_haxe.php&mailsupport=support%40masque.com&referrer=games.masque.com&localizerFileName=cardgames.en.txt%3Fver%3D1714411714&lobbySwf=lobbyhtml%2FLobby.php&artFileVersion=1714411714&textFileVersion=1714411714&adFolder=', image: 'assets/games/pinochle.png' },
    { title: 'Bridge', description: 'Bridge Card Game', link: 'https://www.jopi.com/embed.php?game=bridge', image: 'assets/games/bridge.png' },
    { title: 'War', description: 'War Card Game', link: 'https://www.jopi.com/embed.php?game=war-card-game', image: 'assets/games/war.png' },
    { title: 'Gin Rummy', description: 'Gin Rummy Card Game', link: 'https://cdn.htmlgames.com/ClassicGinRummy/index.html?npa=1', image: 'assets/games/ginrummy.png' },
    { title: 'Euchre', description: 'Card Game', link: 'https://fun.games.com/games/cardgames/cardgames_haxe.php?handleErrors=true&webhost=https%3A%2F%2Ffun.games.com%2Fgames%2Fcardgames&avatarRenderer=https%3A%2F%2Ffun.games.com%2Floadavatar.php&lang=en&locale=us&guidname=owyarrmr%3Atemp&username=GUESTowyarrmr&ticket=owyarrmr%3Atemp66CE4F92291ADF26&avatardna=ADNA3FDefault_002.png*Default_Bld_002.png&usernamelc=owyarrmr%3Atemp&signOnType=masquerade&proxyServer=ws2.masque.com&proxyPort=443&proxyRange=1&server=cgServer&lobby=lobbyServer&game=euchre%3A0&room=Steal%20the%20Deal%3Aeuchre%3A0%3ASocial%3A2752&iap=masque&affiliateId=21&gameClientSwf=cardgames_haxe.php&mailsupport=support%40masque.com&referrer=www.yahoo.com&localizerFileName=cardgames.en.txt%3Fver%3D1714411714&lobbySwf=lobbyhtml%2FLobby.php&artFileVersion=1714411714&textFileVersion=1714411714&hideChat=true&adFolder=', image: 'assets/games/euchre.png' },
    // Add more games here with images...
  ];
  

  constructor(private router: Router, private gameService: GameService) {}

  selectGame(game: Game): void {
    this.gameService.setGameLink(game.link);
    this.gameService.setGameTitle(game.title);
    this.router.navigate(['/play']);
  }
}
