import { modalTextContent } from '../../variables';
import { ModalText } from '../../Shared';

export const getModalContent = (
  modal: 'signUp' | 'signIn',
  option: 'success' | 'failure',
): ModalText => modalTextContent[modal][option];
