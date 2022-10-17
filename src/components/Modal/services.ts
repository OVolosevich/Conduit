import { modalTextContent } from '../../variables';
import { ModalText } from '../../Shared';

const getModalContent = (
  modal: 'signUp' | 'signIn',
  option: 'success' | 'failure',
): ModalText => modalTextContent[modal][option];

export default getModalContent;
