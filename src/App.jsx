import React from 'react'

const App = () => {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <div className='ListContainer'>
      <ul>
        {products.map((p, i) => {
          return <li key={i}>Nome : <strong>{p.name}</strong>, Prezzo: <strong>{p.price}</strong></li>
        })}
      </ul>
    </div>
  )
}

export default App
