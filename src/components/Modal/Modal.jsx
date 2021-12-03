import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseIcon } from './../../icons/close.svg';
import IconButton from './../IconButton';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onToggleModal }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onToggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackdropClick = e => {
    e.currentTarget === e.target && onToggleModal();
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">
        {children}
        <IconButton className="Modal__close" onClick={onToggleModal} aria-label="CLose button">
          <CloseIcon width="25" height="25" fill="#000"></CloseIcon>
        </IconButton>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
