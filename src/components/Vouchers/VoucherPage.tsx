import React, { useState } from 'react';
import Header from '../Header/Header';
import Modal from './Modal/Modal';
import VoucherInputForm from './VoucherInputForm/VoucherInputForm';
import AvailableVouchers from './AvailableVouchers/AvailableVouchers';
import './VoucherPage.css';
import MembershipContent from './MembershipContent/MembershipContent';
import ConfirmIcon from '../../assets/confirmIcon.png'
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';



const VouchersPage: React.FC = () => {
    const [voucherCode, setVoucherCode] = useState<string>('');
    const [voucherDiscount, setVoucherDiscount] = useState<string>('');
    const [openModal, setModalOpen] = useState<boolean>(false);
    const [selectVoucherContent, setSelectVoucherContent] = useState<boolean>(true);
    const [voucherDetailContent, setVoucherDetailContent] = useState<boolean>(false);
    const [isOpenConfirmContent, setIsOpenConfirmContent] = useState<boolean>(false);

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectVoucherContent(true);
        setVoucherDetailContent(false);
        setVoucherCode("");
        setVoucherDiscount("");
    }

    const handleSubmit = () => {
        setModalOpen(false);
        setIsOpenConfirmContent(true);
    }

    const handleConfirmModalClose = () => {
        setIsOpenConfirmContent(false);
        setSelectVoucherContent(true);
        setVoucherDetailContent(false);
        setVoucherCode("");
        setVoucherDiscount("")
    }

    return (
        <div className="vouchers-page">
            <Header />
            <div className="voucher-container">
                <div className='voucher-header'>
                    <p>Vouchers</p>

                </div>
                <div className="voucher-content">
                    <p>You haven't applied a voucher yet</p>
                    <button className='secondary-btn' onClick={() => setModalOpen(!openModal)}>Apply Voucher</button>
                </div>

            </div>
            <Modal isOpen={openModal}
                onClose={() => handleModalClose()}
                title="Apply voucher">
                {selectVoucherContent && (
                    <>
                        <VoucherInputForm
                            setVoucherDetailContent={setVoucherDetailContent}
                            voucherCode={voucherCode}
                            setVoucherCode={setVoucherCode}
                            setSelectVoucherContent={setSelectVoucherContent} />
                        <div className="divider">
                            <span className="divider-text">or</span>
                        </div>
                        <AvailableVouchers voucherDetailContent={voucherDetailContent}
                            setVoucherDetailContent={setVoucherDetailContent}
                            setVoucherCode={setVoucherCode}
                            setVoucherDiscount={setVoucherDiscount}
                            setSelectVoucherContent={setSelectVoucherContent} />
                    </>
                )}

                {voucherDetailContent && (
                    <MembershipContent voucherCode={voucherCode} voucherDiscount={voucherDiscount} handleModalClose={handleModalClose}
                        handleSubmit={handleSubmit} />
                )}

            </Modal>

            <ConfirmationModal isOpen={isOpenConfirmContent}>
                <div className="confirm-modal-icon">
                    <img src={ConfirmIcon} />
                </div>
                <div className='confirm-modal-body'>

                    <p>Congratulations!</p>
                    <span>The voucher has been applied successfully.</span>
                </div>
                <div className="confirm-modal-footer">
                    <button className='secondary-btn custom-btn'
                        onClick={() => handleConfirmModalClose()}>close</button>
                </div>
            </ConfirmationModal>
        </div>
    );
};

export default VouchersPage;
