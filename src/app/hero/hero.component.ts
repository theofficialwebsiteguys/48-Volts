import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  isShrunk: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Listen for navigation changes to toggle 'isShrunk' state
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isShrunk = !(event.url === '/' || event.url === '/home');
        this.adjustViewportHeight(); // Adjust the height when the page changes
      }
    });
    
    // Initial height adjustment
    this.adjustViewportHeight();
    
    // Adjust on window resize
    window.addEventListener('resize', this.adjustViewportHeight.bind(this)); 
  }

  onCanPlay(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.play();
  }

  onLoadedMetadata(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.muted = true;
  }

  // Adjust hero container height based on actual viewport size and 'isShrunk' state
  adjustViewportHeight() {
    const heroContainer = document.querySelector('.hero-container') as HTMLElement;
    if (heroContainer) {
      // Set height based on 'isShrunk' state
      if (this.isShrunk) {
        heroContainer.style.height = '30vh'; // Shrunk state
      } else {
        heroContainer.style.height = `${window.innerHeight}px`; // Full height
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustViewportHeight();
  }
}
