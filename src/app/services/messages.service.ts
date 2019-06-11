import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageComponent } from '../components/message/message.component';
import { ModalType } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public modal: MatDialog ) { }

  openModal(message: string, modalType: ModalType) {
    const modalWindow = this.modal.open(MessageComponent, {
      width: '400px',
      data: {
        title: '',
        icon: '',
        content: message,
        modalType: modalType
      }
    });
  }
}
