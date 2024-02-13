import { useState } from 'react'
import './App.css'

function App () {
  const [entries, setEntries] = useState(['a', 'b', 'c'])

  function handleAddEntry (index: number) {
    setEntries(prev => [
      ...prev.slice(0, index + 1),
      ' ',
      ...prev.slice(index + 1)
    ])
  }

  function handleChangeInput (e: string, index: number) {
    setEntries(prev => prev.map((val, idx) => (idx === index ? e : val)))
  }

  return (
    <div className='wrapper'>
      {entries.map((entry, index) => (
        <div className='cell'>
          <input
            className='entry'
            onChange={e => handleChangeInput(e.target.value, index)}
            value={entry}
          />
          {index !== entries.length - 1 &&  <span className='add-btn' onClick={() => handleAddEntry(index)}>
            &nbsp;
          </span>}
         
        </div>
      ))}
    </div>
  )
}

export default App
