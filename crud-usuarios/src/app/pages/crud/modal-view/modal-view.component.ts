import { Component, Inject } from '@angular/core';
import { User } from '../../../interfaces/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.scss'
})
export class ModalViewComponent {

  userData: User;

  constructor(
    public dialogRef: MatDialogRef<ModalViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userData = data
    console.log('Dados do usuário: ', this.userData)
  }

  closeModal() {this.dialogRef.close()}
}
