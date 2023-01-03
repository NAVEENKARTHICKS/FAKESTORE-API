import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [productlist,setProductlist]=useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(json=>setProductlist(json))
  });
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
      {
        productlist.map((value,index)=>(
          <div className='col-lg-4'>
            <div className="card">
              <div className="card_header">
                <p className="text-center">{value.title}</p>
              </div>
              <div className="class-boby">
              <img className="card-img-top" src={value.image} alt="sample"/>
          </div>
            </div>
          </div>
        ))
      }
      
      </div>
    </div>
    </>
    
  );
}

export default App;
