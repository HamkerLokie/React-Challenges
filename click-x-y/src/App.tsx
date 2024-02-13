import React from 'react'
import usePointStack from './hooks/usePointStack'
import './App.css'

function App () {
  const { points, popped, pushPoint, popPoint, redoPoint } = usePointStack()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    pushPoint({ x: clientX, y: clientY })
  }

  const handleUndo = () => {
    popPoint()
  }

  const handleRedo = () => {
    redoPoint()
  }

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className='app' onClick={handleClick}></div>
      {points.map((point, index) => (
        <div
          key={point.x + point.y + index}
          className='point'
          style={{
            top: point.y - 5 + 'px',
            left: point.x - 5 + 'px'
          }}
        ></div>
      ))}
    </>
  )
}

export default App
