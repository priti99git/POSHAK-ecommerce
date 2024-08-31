

import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/action/index.js'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const statee = useSelector((state)=> state.addItem || [])
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }


    const cartItems = (cartItem) => {
        return(
           <>
      
            <div className="px-2 my-3 bg-light rounded-3" key={cartItem.id} >
                
                <div className="container py-2">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">Rs:- {cartItem.price*80}</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        )
    }
    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
         <h1 className='text-black'>Your Cart</h1>
         {statee.length === 0 && emptyCart()}
        {statee.length > 0 && statee.map(cartItems)}
        {statee.length > 0 && button()}
        </>
        
    )
}

export default Cart