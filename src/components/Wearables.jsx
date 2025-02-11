import Product from './Product'
import "./Product.css";
const Wearables = () => {
  return (
    <div>
    <h1>WEARABLES</h1>
    <div className="home__row">
      <Product
        id="45678912"
        title="Apple Watch SE (2nd Gen, 2023) Smartwatch "
        price={27999}
        rating={5}
        description="Experience the convenience and versatility of the Apple Watch SE with advanced health and fitness features, GPS, and Retina display."
        image="https://m.media-amazon.com/images/I/61rTufzD1zL.SX679.jpg"
      />
      <Product
        id="56789023"
        title="Titan Celestor Smartwatch "
        price={9995}
        rating={4}
        description="Smartwatch with AMOLED display, advanced GPS, and durable design, perfect for outdoor adventures and daily use."
        image="https://m.media-amazon.com/images/I/61ofV82kMKL.SX425.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="67890134"
        title="Heart Health Hybrid Smartwatch for Men & Women"
        price={42499}
        rating={5}
        description="Withings ScanWatch Nova combines ECG, SPO2, and temperature monitoring with stylish design and long battery life for comprehensive health tracking."
        image="https://m.media-amazon.com/images/I/71Lfwkepk+L.SX425.jpg"
      />
      <Product
        id="78901245"
        title="OnePlus Nord Buds 2 TWS in Ear Earbuds "
        price={2499}
        rating={4}
        description="OnePlus Nord Buds 2 with ANC, dynamic drivers, and fast charging provide high-quality audio and clear calls with long-lasting comfort."
        image="https://m.media-amazon.com/images/I/61-ZYvldY+L.AC_UY218.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="89012356"
        title="Boult Audio Z40 Gaming in Ear Earbuds "
        price={1298}
        rating={4}
        description="Earbuds with long battery life, low latency, and high-quality audio provide immersive gaming experiences and clear communication."
        image="https://m.media-amazon.com/images/I/61bN8LdPLLL.SX425.jpg"
      />
      <Product
        id="90123467"
        title="Mivi DuoPods i2 True Wireless Earbuds"
        price={798}
        rating={4}
        description="Mivi DuoPods i2 true wireless earbuds with long battery life, HD call clarity, and IPX4 rating offer a comfortable and immersive audio experience."
        image="https://m.media-amazon.com/images/I/61b8STGCCxL.AC_UY218.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="12345680"
        title="Apple AirPods (3rd generation) with Lightning Charging Case"
        price={19099}
        rating={5}
        description="Apple AirPods (3rd generation) with easy setup, seamless connectivity, and high-quality sound deliver a superior wireless listening experience."
        image="https://m.media-amazon.com/images/I/61CVih3UpdL.AC_UY218.jpg"
      />
      <Product
        id="23456791"
        title="Carlington Premium Watch for Men"
        price={848}
        rating={4}
        description="Carlington premium watch for men with a stylish black chain, stainless steel build, and scratch-resistant design offers durability and elegance."
        image="https://m.media-amazon.com/images/I/71euM6LMwfL.SX679.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="34567802"
        title="Titan Neo Splash Blue Dial Quartz watch for Men"
        price={5595}
        rating={4}
        description="Titan Neo Splash watch with blue dial and stainless steel strap offers multifunctionality and stylish design for everyday wear."
        image="https://m.media-amazon.com/images/I/71SxGG76qpL.SX679.jpg"
      />
      <Product
        id="45678913"
        title="Samsung Galaxy Buds2 Pro"
        price={9999}
        rating={5}
        description="Samsung Galaxy Buds2 Pro with AI features, noise cancellation, and ergonomic design deliver high-quality sound and comfortable listening experiences."
        image="https://m.media-amazon.com/images/I/61Qqg+T8nsL.AC_UY218.jpg"
      />
    </div>
  </div>

  )
}

export default Wearables