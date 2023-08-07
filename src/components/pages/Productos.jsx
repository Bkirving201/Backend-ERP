import React, { useState,useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css'
import '../Styles/Productos.css';
const API_URL = "https://backenderp.onrender.com/productos";



const Productos = () => {

  const [producto,setProducto] = useState([]);

  
  const getProductos = async () => {

    try {
      
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducto(data)
      console.log(data);

    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    getProductos();
        
  }, []);
  

  return (
    
    

    <div className="container">

          
        <table className="table table-striped">

        <thead>

            <tr className="Titulos">
              <th scope="col">Codigo del producto</th>
              <th scope="col">Producto</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>


          <tbody>

          {producto.map((cli) => (
            <tr className="Datos" key={cli._id}>
              <td>{cli.CodigoProducto}</td>
              <td>{cli.ProductoName}</td>
              <td>{cli.CantidadStock}</td>
              <td>{cli.Precio}</td>
              <td>{cli.Descripción}</td>            
            </tr>
          ))}

           
          </tbody>


        </table>
        
    </div>

  )
}

export default Productos
