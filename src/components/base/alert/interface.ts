export interface IAlertProps {
  onClose?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  okText?: string;
  title?: string;
  content?: string;
}

export interface IAlertApi {
  open: (configs?: IAlertProps) => void;
}
