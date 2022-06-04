import './App.css';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard'


function App() {
  const [longUuid, setLongUuid] = useState('')
  const [shortUuid, setShortUuid] = useState('')

  function handleClickLong() {
    setLongUuid(uuidv4())
  }

  function handleClickShort() {
    setShortUuid(uuidv4().slice(0, 8))
  }



  return (
    <div className="App">
      <div>This is simple uuid generator, allows copying to clipboard. Feel free to use it.</div>
      <div className="grid-container">

        <div className='grid-item'><button onClick={handleClickLong}>Generate long uuid:</button>
          <CopyToClipboard text={longUuid}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>

        <div className='grid-item'><label>{longUuid}</label></div>

        <div className='grid-item'><button onClick={handleClickShort}>Generate short uuid:</button>
          <CopyToClipboard text={shortUuid}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>

        <div className='grid-item'> <label>{shortUuid}</label></div>

      </div>
    </div>
  );
}

export default App;
