import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  progress = 0;
  showFlash = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    this.progress = 0;
    setTimeout(() => {
      this.progress = 100;
    }, 0);

    setTimeout(() => {
      this.showFlash = true;

      // Add fade-out class to the entire screen
      const outerContainer = document.querySelector('.outer-container');
      this.renderer.addClass(outerContainer, 'fade-out');

      // Navigate to the home page during the flash effect
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000); // Match this duration with the CSS transition duration
    }, 5000); // Circle animation duration
  }
}
