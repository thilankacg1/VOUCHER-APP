import React from 'react';
import './AvailableVouchers.css';

interface Voucher {
    code: string;
    discount: string;
    expiry: string;
}

interface AvailableVoucherProps {
    voucherDetailContent: boolean;
    setVoucherDetailContent: (value: boolean) => void;
    setVoucherCode: (value: string) => void;
    setVoucherDiscount: (value: string) => void;
    setSelectVoucherContent: (value: boolean) => void;
}
const AvailableVouchers: React.FC<AvailableVoucherProps> = ({ voucherDetailContent, setVoucherDetailContent, setVoucherCode, setVoucherDiscount, setSelectVoucherContent }) => {
    const availableVouchers: Voucher[] = [
        { code: 'YOUR100FF', discount: '10% Off', expiry: '31/07/2024' },
        { code: 'YOUR500FF', discount: '$50.00 Off', expiry: '31/07/2024' },
    ];

    const handleApplyVoucher = (voucherCode: string, discount: string) => {
        setVoucherDetailContent(!voucherDetailContent);
        setSelectVoucherContent(false)
        setVoucherCode(voucherCode)
        setVoucherDiscount(discount)
    };


    return (
        <>
            <label className='modal-label'>Your available vouchers</label>
            <div className="voucher-list">
                {availableVouchers.map((voucher) => (
                    <div className="voucher" key={voucher.code}>
                        <div className="voucher-details">
                            <div className="voucher-details-top-section">
                                <div className='voucher-percentage'>{voucher.discount}</div>
                                <div className='voucher-expiry'>Expiry: {voucher.expiry}</div>
                            </div>
                            <div className="voucher-details-bottom-section">
                                <p>{voucher.code}</p>
                                <button className="voucher-button" onClick={() => handleApplyVoucher(voucher.code, voucher.discount)}>USE THIS VOUCHER</button>
                            </div>


                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default AvailableVouchers;