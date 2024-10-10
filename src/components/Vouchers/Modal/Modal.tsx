import React from 'react';
import './Modal.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <button
                        onClick={onClose}
                        className="modal-close"
                    >
                        &times;
                    </button>
                    <h2 className="modal-title">{title}</h2>

                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;

