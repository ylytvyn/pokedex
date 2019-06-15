import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal, ModalType } from '../../model';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  modalType = ModalType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IModal) { }

}
