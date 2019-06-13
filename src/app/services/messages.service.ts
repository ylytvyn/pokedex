import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageComponent } from '../components/message/message.component';
import { ModalType } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public modal: MatDialog ) { }

  getTitle(modalType: ModalType): string {
    switch (modalType) {
      case ModalType.Info:
      default:
        return 'Information Message';
      case ModalType.Warning:
        return 'Warning Message';
      case ModalType.Error:
        return 'Error Message';
      case ModalType.Confirm:
        return 'Please Confirm';
    }
  }

  getIcon(modalType: ModalType): string {
    switch (modalType) {
      case ModalType.Info:
      default:
        return 'info';
      case ModalType.Warning:
        return 'warning';
      case ModalType.Error:
        return 'error';
      case ModalType.Confirm:
        return 'check_circle';
    }
  }

  getColor(modalType: ModalType): string {
    switch (modalType) {
      case ModalType.Info:
      case ModalType.Confirm:
      default:
        return 'primary';
      case ModalType.Warning:
        return 'accent';
      case ModalType.Error:
        return 'warn';
    }
  }

  openModal(message: string, modalType?: ModalType) {
    const modalWindow = this.modal.open(MessageComponent, {
      width: '450px',
      data: {
        title: this.getTitle(modalType),
        icon: this.getIcon(modalType),
        color: this.getColor(modalType),
        content: message,
        modalType: modalType
      }
    });
  }
}
