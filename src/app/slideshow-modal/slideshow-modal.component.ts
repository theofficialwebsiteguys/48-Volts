import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-slideshow-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow-modal.component.html',
  styleUrl: './slideshow-modal.component.scss'
})
export class SlideshowModalComponent {
  currentIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<SlideshowModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { items: any[], itemType: string }
  ) { }

  ngOnInit(): void {
    // Optional: start the slideshow automatically on modal open
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.nextItem();
    }, 3000); // Switch every 3 seconds
  }

  nextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.data.items.length;
  }

  previousItem(): void {
    this.currentIndex = (this.currentIndex - 1 + this.data.items.length) % this.data.items.length;
  }

  close(): void {
    this.dialogRef.close();
  }
}
