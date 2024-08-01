import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})
export class ModalDeleteComponent {

  constructor(
    public dialogRef: DialogRef<ModalDeleteComponent>
  ){

  }

  closeModal(){this.dialogRef.close()}
}