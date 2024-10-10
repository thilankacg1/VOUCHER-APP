import React from 'react'
import './ConfirmationModal.css'

interface ConfirmModalProps {
    isOpen: boolean;
    children: React.ReactNode;
}
const ConfirmationModal: React.FC<ConfirmModalProps> = ({ isOpen, children }) => {
    if (!isOpen) return null;
    return (
        <div className="confirm-modal-overlay">
            <div className="confirm-modal">
                <div className="confirm-modal-header">
                    <button
                        className="confirm-modal-close"
                    >
                        &times;
                    </button>

                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default ConfirmationModal
