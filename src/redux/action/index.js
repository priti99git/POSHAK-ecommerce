
//for add item to cart
export const addItem =(Product)=>
{
    return{
        type : "ADDITEM",
        payload : Product

    }
}

//for delete item from cart
export const delItem=(Product)=>
{
    return{
        type: "DELITEM",
        payload : Product
    }
}