import React from 'react';
// import '../components/Shop.css';
import ShoeList from './ShoeList';
import CartList from './CartList';
import { useState } from 'react';


function Shop() {

  const [shoe, setShoe] = useState([
    {
      id: 1,
      product_name: "JD 4 Designed Basketball Breathable Durable Sport",
      url: 'https://image.made-in-china.com/2f0j00HKCTzZUGvloE/Designer-Jd-Basketball-Shoes-Jd-4-Sport-Shoes-Running-Shoes-Training-Shoes-Size-41-47.jpg',
      price: 3099.00,
      product_description: "Material: Mesh, Sole Material: Rubber, Shoe Type: Casual, Closure: Lace Up, Regular Fit, Plain white with side lining, Stylish and Comfortable."
    },
    {
      id: 2,
      product_name: "Travis Scott Snekaer Shoes",
      url: 'https://media.karousell.com/media/photos/products/2023/2/7/travis_scott_x_fragment_x_air__1675757141_b5cd70d3.jpg',
      price: 2999.00,
      product_description: "Material: Mesh, Sole Material: Rubber, Shoe Type: Casual, Closure: Lace Up, Regular Fit, Plain white with side lining, Stylish and Comfortable."

    },
    {
      id: 3,
      product_name: "Men Mesh Breathable Running Sport Shoes Light Soft Thick Sole",
      url: 'https://static-01.daraz.com.np/p/205af0df62a34cde211d2b902d16ea92.jpg',
      price: 1900.00,
      product_description: "Upper Material: Mesh, outsidesole Material: Rubber, Closure: Lace Up, Pattern Type: Solid."

    },
    {
      id: 4,
      product_name: "White/Blue Fancy Sneakers for women",
      url: 'https://images.meesho.com/images/products/177843684/xgopr_512.jpg',
      price: 1899.00,
      product_description: "Material: Fiber, Good Quality, Comfortable and Fashionable."
    },
    {
      id: 5,
      product_name: "New Flat White Shoes PU No Lace Sneakers Skateboard Sports Shoes For Women",
      url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/o/4/i/8-01326-snker-shozie-white-pink-black-original-imaggwt7acdy4khw.jpeg?q=70',
      price: 1950,
      product_description: "Very comfortable, Fashionable and Washable, Sports Type: Lifestyle."
    },
    {
      id: 6,
      product_name: "Fashionable women's Sneaker casual sports shoes",
      url: 'https://i.ebayimg.com/images/g/J1AAAOSwIM5d8yu2/s-l500.jpg',
      price: 2900.00,
      product_description: "Product category: Casual and fashion sneaker, Upper: Mesh, Outsole: Rubber, Style: Leisure."
    },
    {
      id: 7,
      product_name: "Laced Up Comfortable and Stylish Sneaker For Both Men and Women",
      url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71uvqJocO8L._AC_UF1000,1000_QL80_.jpg',
      price: 1699.00,
      product_description: "Material: Meshc, Sole Material: Rubber, Shoe Type: Casual,  Plain white with side lining."
    },
    {
      id: 8,
      product_name: "JD 6 Retro Designed Basket Ball Breathable Durable Sports Shoes For Men",
      url: 'https://ae01.alicdn.com/kf/H3ecf42b62c5c47238480df37065d1229Z/2021-New-Arrival-Men-s-Outdoor-Basketball-Air-Jordan-6-Shoes-High-Nike-Black-Red-Athletic.jpg',
      price: 3499.00,
      product_description: "Material: Mesh, Sole Material: Rubber, Shoe Type: Casual, Stylish and Comfortable."
    },
  ])

  const [cart, setcart] = useState([])
  console.log(cart)
  const addToCart = (data) => {
    console.log(data)
    setcart([...cart, data])
  }

  return (
    <div>
      <CartList art={cart}></CartList>
      <ShoeList shoe={shoe} addToCart={addToCart} ></ShoeList>

    </div>
  );
}

export default Shop;






