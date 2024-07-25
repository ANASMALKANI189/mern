// import React from 'react'
import elect_icon from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/elect.png'
import fash_icon from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/fashion.png'
import tablet from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/tablets.png'
import laptop from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/laptop.png'
import furn from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/furn.png'
import mbacc from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/mobacc.png'
import lapacc from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/lapacc.png'
import gmacc from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/gmacc.png'
import  bag from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/baglap.png'
import Navbar from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/Navbar.jsx'
// import iphone from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/Iphone.jpg'
import  './Home.css'

const Home = () => {
  return (
    <>
  <div className="main">
  <div className="categories">
    <div className="category">
      <img src={elect_icon} className="icon" alt="Tv & Appliances"/>
      <h4>Tv & Appliances</h4>
    </div>
    <div className="category">
      <img src={fash_icon} className="icon" alt="Fashion"/>
      <h4>Fashion</h4>
    </div>
    <div className="category">
      <img src={tablet} className="icon" alt="Tablets & Mobile"/>
      <h4>Tablets & Mobile</h4>
    </div>
    <div className="category">
      <img src={laptop} className="icon" alt="Electronics"/>
      <h4>Electronics</h4>
    </div>
    <div className="category">
      <img src={furn} className="icon" alt="Furniture"/>
      <h4>Furniture</h4>
    </div>
   </div>
  
   <div className="cardsWrapper">
    <div className="card1">
      <div className="cardHeading">
        All your Electronic accessories  |Starting ₹199 
      </div>
      <div className="cardContainer">
        <div className="product">
          <img src={gmacc} decoding="async" alt="Gaming Accessories" className="icon"/>
          <p>Gaming Accessories</p>
        </div>
        <div className="product">
          <img src={lapacc} decoding="async" alt="Keyboard and Mice" className="icon"/>
          <p>Keyboard and Mice</p>
        </div>
        <div className="product">
          <img src={mbacc} decoding="async" alt="Mobile Accessories" className="icon"/>
          <p>Mobile Accessories</p>
        </div>
        <div className="product">
          <img src={bag} decoding="async" alt="Laptop bags" className="icon"/>
          <p>Laptop bags</p>
        </div>
      </div>
      <a href="">See all offers</a>
    </div>

    <div className="card1">
      <div className="cardHeading">
        
      </div>
      <div className="cardContainer">
        <div className="product">
          <img src={gmacc} decoding="async" alt="Gaming Accessories" className="icon"/>
          <p>Gaming Accessories</p>
        </div>
        <div className="product">
          <img src={lapacc} decoding="async" alt="Keyboard and Mice" className="icon"/>
          <p>Keyboard and Mice</p>
        </div>
        <div className="product">
          <img src={mbacc} decoding="async" alt="Mobile Accessories" className="icon"/>
          <p>Mobile Accessories</p>
        </div>
        <div className="product">
          <img src={bag} decoding="async" alt="Laptop bags" className="icon"/>
          <p>Laptop bags</p>
        </div>
      </div>
      <a href="">See all offers</a>
    </div>
    <div className="card1">
      <div className="cardHeading">
       
      </div>
      <div className="cardContainer">
        <div className="product">
          <img src={gmacc} decoding="async" alt="Gaming Accessories" className="icon"/>
          <p>Gaming Accessories</p>
        </div>
        <div className="product">
          <img src={lapacc} decoding="async" alt="Keyboard and Mice" className="icon"/>
          <p>Keyboard and Mice</p>
        </div>
        <div className="product">
          <img src={mbacc} decoding="async" alt="Mobile Accessories" className="icon"/>
          <p>Mobile Accessories</p>
        </div>
        <div className="product">
          <img src={bag} decoding="async" alt="Laptop bags" className="icon"/>
          <p>Laptop bags</p>
        </div>
      </div>
      <a href="">See all offers</a>
    </div>
    
    
    <div className="content-wrapper">
   <div className="card">
    <div className="right">
      <div className="logo">iPhone 12</div>
      <div className="about">
        <p>6.1-inch Super Retina XDR display
          Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording
          12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording.
        </p>
      </div>
      <button>
        <h1>Buy Now</h1>
        <h1>₹49,999</h1>
      </button>
    </div>
    <div className="left">
    </div>
   </div>
</div>

  </div>

</div>

    <footer>
    <div className="footer-part-1">
      <ul>
        <li>AbeBooks</li>
        <li>Books, art</li>
        <li>&amp; collectibles</li>
      </ul>
      <ul>
        <li>Amazon Web Services</li>
        <li>Scalable Cloud</li>
        <li>Computing Services</li>
      </ul>
      <ul>
        <li>Audible</li>
        <li>Download</li>
        <li>Audio Books</li>
      </ul>
      <ul>
        <li>DPReview</li>
        <li>Digital</li>
        <li>Photography</li>
      </ul>
      <ul>
        <li>IMDb</li>
        <li>Movies, TV</li>
        <li>&amp; Celebrities</li>
      </ul>
      <ul>
        <li>Amazon Bussiness</li>
        <li>Everything For</li>
        <li>Your Bussiness</li>
      </ul>
      <ul>
        <li>Prime Now</li>
        <li>2-Hours Delivery</li>
        <li>on Everyday Items</li>
      </ul>
      <ul>
        <li>Amazon Prime Music</li>
        <li>100 million songs, ad-free</li>
        <li>Over 15 million podcast episodes</li>
      </ul>
    </div>

    <div className="footer-part-sm">
      <div className="lang">
        <i className="fa-solid fa-globe"></i>
        English
      </div>
      <h3><a href="">Already a customer? Sign in</a></h3>
    </div>

    <div className="footer-part-2">
      <p>
        <a href="">Conditions of Use &amp; Sale</a>
        <a href="">Privacy Notice</a> <a href="">Interest-Based Ads</a>
      </p>
      <p>&copy; 1996-2023, Amazon.com, Inc. or its affilates</p>
    </div>
  </footer>
<Navbar/>
    </>
  )
}

export default Home
