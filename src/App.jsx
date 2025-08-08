import React from 'react'
import { useState } from 'react';

const App = () => {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);
  const addToCart = (product) => {
    return setAddedProducts((prev) => {
      const addedProd = prev.find((pre) => {
        return pre.name === product.name
      })
      if (addedProd) {
        return prev.map((pre) => {
          return pre.name === product.name ? { ...pre, quantity: pre.quantity + 1 } : pre
        })
      }
      return [...prev, { ...product, quantity: 1 }]

    })
  }

  console.log(addedProducts)

  return (
    <div className='ListContainer w-50'>
      <h2>Lista Prodotti</h2>
      <ul>
        {products.map((p, i) => {
          return <li key={i} className='my-2'>
            Nome : <strong>{p.name}</strong>, Prezzo: <strong>{p.price}€</strong>
            <button className='mx-2' onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        })}

      </ul>
      <div className='cart'>
        <h2>Carrello</h2>
        <ul>
          {addedProducts ? addedProducts.map((a, index) => {
            return <li key={index} className='my-2'>
              Nome : <strong>{a.name}</strong>, Prezzo: <strong>{a.price}€</strong>, Quantità: <strong>{a.quantity}</strong>
            </li>
          }) : ''}
        </ul>
      </div>
    </div>
  )
}


export default App
