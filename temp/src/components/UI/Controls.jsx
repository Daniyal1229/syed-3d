import { useState } from 'react'

export default function Controls() {
  const [show, setShow] = useState(true)
  
  return (
    <>
      {show && (
        <div className="controls-info">
          <h3>🎮 Controls</h3>
          <p>⬆️ Arrow Up - Move Forward</p>
          <p>⬇️ Arrow Down - Move Backward</p>
          <p>⬅️ Arrow Left - Turn Left</p>
          <p>➡️ Arrow Right - Turn Right</p>
          <button
            onClick={() => setShow(false)}
            style={{
              marginTop: '10px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Hide
          </button>
        </div>
      )}
      
      {!show && (
        <button
          onClick={() => setShow(true)}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'rgba(0,0,0,0.7)',
            border: 'none',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '20px',
            backdropFilter: 'blur(10px)'
          }}
        >
          🎮
        </button>
      )}
    </>
  )
}

