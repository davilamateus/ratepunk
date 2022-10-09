import './steps.css';

const Steps = () => {
  return (
    <div className='steps-box'>
        <div className='steps-item'>
            <img src="./assets/invite.svg" alt="Invite icon" className="step-img" />
            <div className="step-text">
                <h4>STEP 1</h4>
                <h2>INVITE FRIENDS</h2>
                <p>Refer friends with your unique referral link.</p>
            </div>
        </div>
        <div className='steps-item collect-coins-img'>
            <div className="step-text">
                <h4>STEP 2</h4>
                <h2>COLLECT COINS</h2>
                <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
            </div>
            <img src="./assets/collect-coins.svg" alt="Collect Coins icon" className="step-img " />
        </div>
        <div className='steps-item'>
            <img src="./assets/voucher.svg" alt="Coucher icon" className="step-img" />
            <div className="step-text">
                <h4>STEP 3</h4>
                <h2>GET VOUCHER</h2>
                <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
            </div>
        </div>
    </div>
  )
}

export default Steps;