import React from 'react';
import './NewLetterBox.css'

const NewLetterBox = () => {
  return (
    <div className='newLetterBox-box'>
        <h2 className='newLetterBox-title'>REFER FRIENDS AND GET REWARDS</h2>
        <p className='newLetterBox-paragrath'>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
        <form>
            <div className="newLetterBox-inputMenssagers"></div>
            <div className="inputEmail">
                <img src="/assets/email.svg" alt="Email Icon" />
                <input type="text" placeholder='Enter your email address' />
            </div>
            <button className="newLetterBox-btn">Get Referral Link</button>
        </form>
        <div className="limitsMenssage">
            <p>Limits on max rewards apply.</p>
        </div>
    </div>
  )
}

export default NewLetterBox