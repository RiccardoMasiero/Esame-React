import './Amazzone.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import imagine from "./pages/Assets/Immages/Amazon_logo.svg.png";
import imagine2 from "./pages/Assets/Immages/pngwing.com.png";
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
          let products = json.products
          console.log(json);
          setProducts (products)
  
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
        <label htmlFor="site-search"> <b> Ricerca prodotti:</b></label>
          <input type="search" id="site-search" name="q" />

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
            <Link to="/">Bestseller di Amazon</Link>
          </li>
          <li>
            <Link to="/Page2">Le novità più interessanti</Link>
          </li>
          <li>
            <Link to="Page3">I prodotti del momento</Link>
          </li>
          <li>
            <Link to="Page4">I più desiderati</Link>
          </li>
          <li>
            <Link to="Page5">I più regalati</Link>
          </li>


        </ul>
        <h2>Bestseller di Amazon</h2>
        <h4>I nostri prodotti più popolari in base alle vendite. Aggiornamento frequente.</h4>
      </nav>

      <main>

        {products.map((product) => (
        <div key={product.id}>
        <h3>{product.title }</h3>
        <p id='price'>{product.price}</p>
        <p id='brand'>{product.brand}</p>
        <img src={product.images[0]} alt={product.title} />

          <button id='add' type="button">Aggiungi al carrello</button>
          <button id='buy' type="button">Acquista ora</button>



        </div>
        ))}



      </main>
    </>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
