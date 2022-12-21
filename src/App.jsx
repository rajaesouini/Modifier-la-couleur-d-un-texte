import { useState } from 'react'
import './App.css'

function App() {
  const [count, setColor] = useState("#ce4545");
  const handleChange = (e) => {
    setColor(e.currentTarget.value);
  }

  return (
    <>
    <p style={{ color: count }}>Changer la couleur du texte{ handleChange }</p>
    <input type='color' oninput="setColor"  onChange={handleChange} />
    </>
  )
}

export default App;
