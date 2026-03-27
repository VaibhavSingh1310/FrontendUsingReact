export default function Cart(totalAmt,cart){
    return(
        <div>
            <h2>Your Cart : </h2>
            {cart.map((element,index)=><span>{Product.name}</span>)}
            <h3>Total Cart Amount: {totalAmt}</h3>
        </div>
    )
}
