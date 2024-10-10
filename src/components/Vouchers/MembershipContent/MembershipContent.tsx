import React from 'react';
import './MembershipContent.css'


interface MembershipContentProps {
    voucherCode: string;
    voucherDiscount: string;
    handleModalClose: () => void;
    handleSubmit: () => void;
}


const MembershipModal: React.FC<MembershipContentProps> = ({ voucherCode, voucherDiscount, handleModalClose, handleSubmit }) => {
    return (
        <>
            <div className='membership-container'>
                <h2>YOUR MEMBERSHIP</h2>
                <div className="member-address-details">
                    {/* TODO: add user details*/}
                    <div className='state'>TUGGERANONG, ACT</div>
                    <div className='home-address'>Upper level, shop 10 South Point. Tuggeranong ACT 2900</div>
                </div>
                <div className="member-plan-details">
                    {/* TODO: add memebership additional details*/}
                    <div className="member-plan">
                        <label htmlFor="">Membership plan</label>
                        <span>Your plan DD</span>
                    </div>
                    <div className="member-amount">
                        <label htmlFor="">Membership amount</label>
                        <div>$100.00</div>
                    </div>
                </div>
                <div className="promocode-section">
                    <label htmlFor="">Promo code</label>
                    <div className='voucher-card'>
                        <p> {/* TODO: add selected voucher code*/}
                            {voucherCode} applied</p>
                        <span>{voucherDiscount ? voucherDiscount : "20% Off"}
                            {/* TODO: add selected voucher discount{voucherDiscount} */}
                        </span>
                        <button
                            className="remove-voucher"
                        >
                            &times;
                        </button>
                    </div>
                </div>
                <div className="direct-debit-section">
                    {/* TODO: add direct debit details*/}
                    <label htmlFor="">First direct debit</label>
                    <span>30/07/2024</span>
                </div>
                <div className="voucher-cal-section">
                    {/* TODO: add discount and other price details for calculation*/}
                    <div className='title'>Discounted price after applying voucher</div>
                    <div className="fee-section">
                        <label htmlFor="">Joining fee</label>
                        <span>$0.00</span>
                    </div>
                    <div className="fee-section">
                        <label htmlFor="">Activation fee</label>
                        <span>$0.00</span>
                    </div>
                    <div className="fee-section">
                        <label htmlFor="">Pass fee</label>
                        <span>$0.00</span>
                    </div>

                </div>
                <div className="total-cost-section">
                    {/* TODO: calculate total price using actual details*/}
                    <label htmlFor="">Cost per fortnight</label>
                    <span>$80.00</span>
                </div>
            </div>
            <div className="button-section">
                <button type="button" className='secondary-btn' onClick={() => handleModalClose()}>CLOSE</button>
                <button type="button" className='primary-btn' onClick={() => handleSubmit()}>APPLY</button>
            </div>
        </>
    )
}

export default MembershipModal
