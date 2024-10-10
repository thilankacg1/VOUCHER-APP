import React from 'react';
import './VoucherInputForm.css'

interface VoucherInputFormProps {
    setSelectVoucherContent: (value: boolean) => void;
    setVoucherDetailContent: (value: boolean) => void;
    voucherCode: string;
    setVoucherCode: (value: string) => void;
}

const VoucherInputForm: React.FC<VoucherInputFormProps> = ({ setSelectVoucherContent, setVoucherDetailContent, voucherCode, setVoucherCode }) => {

    const handleVoucherCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVoucherCode(event.target.value);
    };
    const handleApplyClick = () => {
        // TODO: should verify vouchercode exist and a valid one using api check
        if (voucherCode !== '') {
            setSelectVoucherContent(false);
            setVoucherDetailContent(true);
        }

    }
    return (
        <>
            <label className='modal-label'>Do you have a voucher code?</label>
            <form className="modal-form">
                <input type="text" placeholder="Enter your voucher code here" value={voucherCode}
                    onChange={handleVoucherCodeChange} />
                <button type="button" className='secondary-btn custom-btn' onClick={() => handleApplyClick()}>APPLY</button>
            </form>
        </>
    )
}

export default VoucherInputForm;
