import {useState,useEffect, useRef} from 'react';
import './NewLetterBox.css'

const NewLetterBox = () => {

  const [emailInput, setEmailInput] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [stage, setStage] = useState(1);
  const [copyReferral,setCopyReferral] = useState('');


  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
     if(re.test(email) == true){
      setErrorEmail('');
      return true;
     } else {
       setErrorEmail('Please Write The Email Correctly!');
      return false;
    }
  }


  function getReferralLInk(e){
    e.preventDefault();

    if(validateEmail(emailInput) === true){

      let req = new XMLHttpRequest();
      
      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          setCopyReferral(`https://ratepunk.com/referral/${Math.random().toString(16).substr(2)}`);
          setStage(2)
        }
      };
        
      req.open("POST", "https://api.jsonbin.io/v3/b", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-Master-Key", "$2b$10$7EmY42Ddc.yrmfXZUhi6a.t/pvXFmnnU9ra2Ge6hm1XtU3LQ.NsM.");
      req.send(`{"email":"${emailInput}"}`);
    } 

    

  }

  const textAreaRef = useRef(null);

  function copyText(e) {
    textAreaRef.current.select();
    document.execCommand('copy');

    e.target.focus();
  };


  return (
    <div className='newLetterBox-box'>
        <h2 className='newLetterBox-title'>REFER FRIENDS AND GET REWARDS</h2>
        <p className='newLetterBox-paragrath'>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
          {stage === 1? 
          <>
            <form onSubmit={(e)=>{getReferralLInk(e)}}>
              <div className="newLetterBox-inputMenssagers"> {errorEmail}</div>
              <div className="inputEmail">
                  <img src="./assets/email.svg" alt="Email Icon" />
                  <input type="text" onChange={(e)=>{
                    setEmailInput(e.target.value)
                    setErrorEmail('')
                    }} placeholder='Enter your email address' />
              </div>
              <button className="newLetterBox-btn">Get Referral Link</button>
          </form>
          </>
        : 
        <>
          <div className="message-success">
            <img src="./assets/success.svg" alt="Success icon" />
            <p>Your email is confirmed!</p>
          </div>
          <div className="copy-referral">
              <input ref={textAreaRef} value={copyReferral}/>
              <button onClick={copyText}>Copy</button>   
          </div>
              <button className='copyMobile' onClick={copyText}>Copy URL</button>        
        </>
        }
        <div className="limitsMenssage">
            <p>Limits on max rewards apply.</p>
        </div>
    </div>
  )
}

export default NewLetterBox