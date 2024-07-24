import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
    trigger('sectionAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class PortfolioComponent {
  title = 'portfolio-page';
  state = 'inactive';

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  audioFiles: string[] = ['assets/mp3/All On Me_mixdown.mp3', 'assets/mp3/sample2.mp3'];
  videoFiles: string[] = ['assets/videos/1.mp4', 'assets/videos/JIM CARREY T4.mp4', 'assets/videos/Mile$ - Blessed (prod. AMUELSAY).mp4', 'assets/videos/N8 - Tryna Get a Chain Lyric Video.mp4', 'assets/videos/PNL PROMO.mp4', 'assets/videos/wentworth final.mp4', 'assets/videos/wentworth.index.mp4', 'assets/videos/when the drugs take a hold_nothing was the same.mp4'];
  gfxFiles: string[] = ['assets/gfx/animated me.png', 'assets/gfx/DANIEL BALUCH COVER ART.jpg', 'assets/gfx/eli bandzo cover.jpg' , 'assets/gfx/JAHMI COVER.jpg', 'assets/gfx/jayeazywhat cover.jpg', 'assets/gfx/jayycardo cover.jpg', 'assets/gfx/MILES BILL.jpg'];
  photographyFiles: string[] = ['assets/photography/IMG_0785.JPG', 'assets/photography/IMG_1132.JPG', 'assets/photography/IMG_1167.JPG', 'assets/photography/IMG_1260.JPG', 'assets/photography/IMG_1453.JPG', 'assets/photography/IMG_1482.JPG', 'assets/photography/IMG_1526.JPG', 'assets/photography/IMG_1604.JPG', 'assets/photography/IMG_2227.JPG','assets/photography/IMG_2298.JPG', 'assets/photography/IMG_2305.JPG', 'assets/photography/IMG_2327.JPG', 'assets/photography/IMG_4070.JPG', 'assets/photography/IMG_4104.JPG', 'assets/photography/IMG_4115.JPG'];


  constructor() {}
}
