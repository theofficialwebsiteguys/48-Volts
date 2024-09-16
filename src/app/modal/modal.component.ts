import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  title: string;
  mediaUrl: string;
  mediaType: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalComponent>
  ) {
    this.title = data.title;
    this.mediaUrl = data.mediaUrl;
    this.mediaType = data.mediaType;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  @ViewChild('mediaImage') mediaImage!: ElementRef<HTMLImageElement>;


  ngAfterViewInit() {
    // Once the image is loaded, adjust the modal size
    const imageElement = this.mediaImage.nativeElement;
    imageElement.onload = () => {
      this.adjustModalSize(imageElement);
    };
  }

  adjustModalSize(image: HTMLImageElement) {
    const naturalWidth = image.naturalWidth;
    const maxWidth = 500; // You can set a max limit if needed
    const modalWidth = Math.min(naturalWidth, maxWidth); // Ensure it doesn't exceed max-width

    // Set the modal width to the image's width or the max width
    this.dialogRef.updateSize(`${modalWidth}px`);
  }
}
