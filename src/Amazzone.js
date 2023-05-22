import './Amazzone.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import imagine from "./pages/Assets/Immages/Amazon_logo.svg.png";
import imagine2 from "./pages/Assets/Immages/shopping-cart-free-png.webp";
import Page2 from "./pages/Le novità più interessanti";
import Page3 from "./pages/I prodotti del momento";
import Page4 from "./pages/I più desiderati";
import Page5 from "./pages/I più regalati";









function Main() {
  const [products, setProducts] = useState([])
  useEffect(() => {
      async function fetchProducts () {
          let res = await fetch ("https://dummyjson.com/products")
          let json = await res.json ()
          console.log(json);
          setProducts (json)
  
      }
      fetchProducts ()
    } , [])
    
  return (
    <>
      <header>         
        <div className="logo">
          <img src={imagine} alt="logo Amazon"/>
        </div>

        <div className="search-bar"> 
        <label for="site-search"> <b> Ricerca prodotti:</b></label>
          <input type="search" id="site-search" name="q"/>

          <button type="button">Search</button>
        </div>

        <div className="cart">
        <img src={imagine2} alt="logo Amazon"/>
        <span> Carrello </span>
        
        </div>

      </header>

      <nav className='nav-bar'>
        <ul>
          <li>
            <Link to="Page2">Le novità più interessanti</Link>
          </li>
          <li>
            <Link to="Page3">I prodotti del momento</Link>
          </li>
          <li>
            <Link to="Page4">I più desiderati</Link>
          </li>
          <li>
            <Link to="Page4">I più regalati</Link>
          </li>
        </ul>
        
      </nav>

      <body>

        <h2>Bestseller di Amazon</h2>
        <h4>I nostri prodotti più popolari in base alle vendite. Aggiornamento frequente.</h4>

        {/* {products.map((product) => (
        <div key={product.id}>
        <h3>{product.titolo}</h3>
        <p>{product.prezzo}</p>
        <p>{product.brand}</p>
        <img src={product.immagine} alt={product.titolo} />
        </div>
        ))} */}

        {/* Qui ho provato a selezionare prezzo, brand, id, titolo e immgine dei prodotti solo che non funziona e mi esce "products.map is not a function..." */}



        

        
        
      </body>

      

    </>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
        <Route path="Le novità più interessanti" element={<Page2 />} />
        <Route path="I prodotti del momento" element={<Page3 />} />
        <Route path="I più desiderati" element={<Page4 />} />
        <Route path="I più regalati" element={<Page5 />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
