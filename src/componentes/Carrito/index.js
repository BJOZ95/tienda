import React, { useContext } from 'react'
import { DataContext } from "../../context/Dataprovider";

export const Carrito =() => {
    const value= useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const removeProducto = id =>{
		if(window.confirm("¿Seguro qué quieres levantar este producto? 7w7")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

    const disminuir = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const aumentar = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

    const tooglefalse = () => {
        setMenu(false);
    };

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>                
                {
                    carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "2rem", color:"rgb(219, 73, 224)"}}>Carrito Vacio</h2> :<>
                    {
                    carrito.map((producto) => (

                    <div className="carrito_center" key={producto.id}>

                        
                        <div className="carrito__item">
                            <img src={producto.image.default} alt="" />
                            <div>
                                <h3>{producto.title} </h3>
                                <p className="price">${producto.price}</p>
                            </div>
                            <div>
                                <box-icon Name="up-arrow" type="solid" onClick={() => aumentar(producto.id)}></box-icon>
                                <p className="cantidad"> {producto.cantidad} </p>
                                <box-icon Name="down-arrow" type="solid" onClick={() => disminuir(producto.id)}></box-icon>
                            </div>
                            <div className="remove__item">
                                <box-icon Name="trash" onClick={() => removeProducto(producto.id)}></box-icon>
                            </div>
                        </div>
                    </div> 
                    ))
                } 
                </>
                }               
                <div className="carrito__footer">
                    <h3>Total: ${total} </h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )
}