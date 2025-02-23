// App.jsx
import { useState } from 'react';
import ProductForm from './components/productForm'; 
import ProductCard from './components/productCard';


import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/productForm.scss';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{ padding: '2rem' }}>
      <ProductCard />
    </div>
    <div style={{ padding: '2rem' }}>
      <ProductForm />
    </div>

    </>
  );
}

export default App;
