import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useCustomFetch } from './hooks/useCustomFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products , setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  
  //useEffect(() => {
  //  async function fetchData() {
  //    const response = await fetch(url)
  //
  //    const data = await response.json() 
  //    console.log(data)
  //
  //    setProducts(data)
  //  }
  //
  //  fetchData()
  //}, []);



  //4- custom hook
  const {data: items, httpConfig, loading} = useCustomFetch(url);


  const handlePost = async(e) => {
    e.preventDefault()

    const product = {
      name: name,
      price: price,
    }
    
  //   const response = await fetch(url, {
  //     method: "POST",
  //    headers:{
  //       "Content-Type": "application/json"      
  //    },
  //    body: JSON.stringify(product)
  //  });
  //  const addedProduct = await response.json()
  //
  //  setProducts((prev) => [...prev, addedProduct])

    //5 - Post refactor
    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Products List</h1>
      {/*}6 - loading{*/}
      {loading && <p>carregando dados...</p>}
      <ul>
        {/*}
        {products.map((p)=> (
          <li key={p.id}>
            {p.name} - R$ {p.price}
          </li>
        ))}
        {*/}
        {items && items.map((p)=> (
          <li key={p.id}>
            {p.name} - R$ {p.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handlePost}>
          <label>
            nome:
            <input type='text' value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            price:
            <input type='text' value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading &&  <input value="aguarde" disabled/>}
          {!loading && <input type="submit" value="create"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
