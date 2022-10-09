import Steps from '../steps/Steps';
import NewLetterBox from './NewLetterBox';
import './NewLetterDiv.css';

const NewLetterDiv = () => {
  return (
    <div className='new-letter-div '>
      <div className='new-letter-container'>
          <NewLetterBox/>
          <Steps/>
      </div>
    </div>
  )
}

export default NewLetterDiv;