import React, { useState, useEffect } from 'react'
import Producto from './Producto'

function Productos(){

    const [productos, setProductos] = useState([])

    /* Loader */
    const [isLoading, setIsLoading] = useState(true)

    /* Effect loader */
    useEffect(
        () => {
            setTimeout(()=>{
                setProductos(
                    [
                        {
                            nombre: "DualSense™ Wireless Controller",
                            imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-white-accessory-front?$FourColumn_Large$",
                            descripcion: "PlayStation 5",
                            precio: "74,99 €",
                            /* sku: "232392", */
                            stock: "En stock",
                        }
                    ]                    
                )
                setIsLoading(false)
            },2000)
        },
        []
    )

    const [mensaje, setMensaje] = useState(' ')

    const comprar = () => {

        setMensaje("Su producto ha sido agregado al carrito")

    }

    const blanco = () => {
        setProductos(
            [
                {
                    nombre: "DualSense™ Wireless Controller",
                    imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-white-accessory-front?$FourColumn_Large$",
                    descripcion: "PlayStation 5",
                    precio: "74,99 €",
                    /* sku: "232392", */
                    stock: "En stock",
                }
            ]
        )
    }

    const violeta = () => {
        setProductos(
            [
                {
                    nombre: "DualSense™ Wireless Controller",
                    imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-galactic-purple-accessory-front?$FourColumn_Large$",
                    descripcion: "PlayStation 5",
                    precio: "74,99 €",
                    /* sku: "232393", */
                    stock: "En stock",
                }
            ]
        )
    }

    const negro = () => {
        setProductos(
            [
                {
                    nombre: "DualSense™ Wireless Controller",
                    imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-midnight-black-accessory-front?$FourColumn_Large$",
                    descripcion: "PlayStation 5",
                    precio: "74,99 €",
                    /* sku: "232393", */
                    stock: "En stock",
                }
            ]
        )
    }

    const rojo = () => {
        setProductos(
            [
                {
                    nombre: "DualSense™ Wireless Controller",
                    imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-cosmic-red-accessory-front?$Background_Large$",
                    descripcion: "PlayStation 5",
                    precio: "74,99 €",
                    /* sku: "232393", */
                    stock: "En stock",
                }
            ]
        )
    }

    /* Mientras loading sea true, muestro el loader. Cuando sea false, muestro los productos */
    if(isLoading){
        return(
            <div className="loader">
                <img className="ps-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/800px-Playstation_logo_colour.svg.png" alt="Logo PlayStation" />
            </div>
        )
    }else{
        return(
            <>
                {productos.map(producto => <Producto nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}
                stock={producto.stock} mensaje={mensaje} comprar={comprar} blanco={blanco} violeta={violeta} negro={negro} rojo={rojo} />)}
    
                {/* <Producto comprar={comprar} /> */}
    
                {/* <button onClick={comprar}>Comprar</button> */}
    
    
            </>
            
                
        )
    }
}

    
    export default Productos