export interface IPokemon {
  id: number;
  name: string;
  description: string;
  img: string;
  type: any;
  total: number;
  abilities: any;
  evolution: any;
  isSelected?: boolean;
}

export interface IModal {
  title: string;
  icon: string;
  color: string;
  content: string;
  modalType: ModalType;
}

export enum ModalType {
  Info,
  Warning,
  Error,
  Confirm
}
