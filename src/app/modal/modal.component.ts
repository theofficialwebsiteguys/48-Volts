import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
}
