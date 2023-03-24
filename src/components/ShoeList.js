import '../components/Shop.css';


function ShoeList({ shoe, addToCart }) {
    console.log("check");
    return (
        <div className='flex'>
            {
                shoe.map((shoeItem, shoeIndex) => {
                    return (
                        <div style={{ width: '30%' }}>
                            <div className='shop-item'>
                                <img src={shoeItem.url} width="100%" />
                                <p>{shoeItem.product_name}</p>
                                <p> Rs. {shoeItem.price}</p>
                                <button
                                    onClick={() => addToCart(shoeItem)}
                                >Add to Cart</button>
                            </div>

                        </div>
                    )

                })
            }
        </div>
    )
}

export default ShoeList