import React, { useState } from 'react'

export default function States() {

  const [x, setx] = useState(0)
  const [y, sety] = useState(0)

  function handleX(e) {
    setx(e.target.value)
    
  }
  function handleX(e) {
    sety(e.target.value)
    
  }

  return (
    <div>

      <h2>ARTHAMATIC OPERATIONS</h2>
      <input type='number' value={x} onChange={handleX} />
      <br />
      <input type='number' value={y} onChange={handleY} />
      <hr />
      <h1>{x}</h1>
      <h1>{y}</h1>
      <h2>{Number(x)+Number(y)}</h2>
      <h2>{x - y}</h2>
      <h2>{x * y}</h2>
      <h2>{x / y}</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, architecto.</p>

    </div>
  )
}
