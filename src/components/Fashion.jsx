import "./Product.css";
import Product from './Product'
const Fashion = () => {
  return (
    <div>
      <h1>Fashion</h1>

      <div className="home__row">
        <Product
          id="98765432"
          title="HEMILIQUE Mens Casual Button Down Shirt "
          price={399}
          rating={4}
          description="A stylish casual shirt perfect for summer, featuring long sleeves, Cuban collar, and tropical textured fabric for a comfortable and trendy look."
          image="https://m.media-amazon.com/images/I/719OiTXZk3L.SY741.jpg"
        />
        <Product
          id="87654321"
          title="MOXTE Men Popcorn Casual Shirt"
          price={699}
          rating={4}
          description="A regular fit casual shirt suitable for various occasions, offering style and comfort with a modern design that enhances your wardrobe."
          image="https://m.media-amazon.com/images/I/41+3ClI8kVL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="76543210"
          title="Auge Follow Mode Fashion Formal Shirts for Men"
          price={650}
          rating={4}
          description="Formal shirts by Auge Follow Mode designed for men who appreciate quality and style, ideal for professional settings and formal occasions."
          image="https://m.media-amazon.com/images/I/71GnPSkoU3L.AC_UL320.jpg"
        />
        <Product
          id="65432109"
          title="Titan Crest Black Colored Sunglasses for Men"
          price={3000}
          rating={5}
          description="Titan Crest sunglasses featuring a sleek black design with rectangle-shaped lenses, offering 100% UV protection and a stylish accessory for men."
          image="https://m.media-amazon.com/images/I/51wHLZ5tN7L.SX569.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="54321098"
          title="Allen Solly Men Casual Regular Fit Pants"
          price={1419}
          rating={4}
          description="Allen Solly casual pants for men with a regular fit, ideal for everyday wear and versatility, crafted with comfort and style in mind."
          image="https://m.media-amazon.com/images/I/51ig7qbtDPL.AC_UL320.jpg"
        />
        <Product
          id="43210987"
          title="LINVO Polarized Sunglasses for Men & Women"
          price={1699}
          rating={4}
          description="LINVO polarized sunglasses featuring a retro semi-rimless design, offering UV400 protection and suitable for driving and outdoor activities."
          image="https://m.media-amazon.com/images/I/51cYqOQSkFL.SX679.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="32109876"
          title="Sparx Men's Sc0162g Sneakers"
          price={789}
          rating={4}
          description="Sparx sneakers for men with a comfortable fit and stylish design, perfect for casual outings and everyday use, enhancing your footwear collection."
          image="https://m.media-amazon.com/images/I/61VzAAvV6RL.SY575.jpg"
        />
        <Product
          id="21098765"
          title="Campus mens Oxyfit (N) Walking Shoe"
          price={469}
          rating={4}
          description="Campus Oxyfit walking shoes designed for men, offering comfort and support, ideal for daily walks and light activities, ensuring a pleasant walking experience."
          image="https://m.media-amazon.com/images/I/61lfgSuma9L.AC_UL320.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="10987654"
          title="Nike Mens Blazer Low '77 VNTG Sneaker"
          price={6369}
          rating={5}
          description="Nike Blazer Low '77 VNTG sneakers for men featuring a vintage design with premium materials, offering comfort, style, and a timeless appeal."
          image="https://m.media-amazon.com/images/I/71nt45MWFmL.SX575.jpg"
        />
        <Product
          id="09876543"
          title="new balance unisex-adult Bb550 Casual Shoe"
          price={8617}
          rating={5}
          description="New Balance BB550 casual shoes designed for both men and women, combining comfort with a modern aesthetic, suitable for daily wear and various activities."
          image="https://m.media-amazon.com/images/I/51TcAY-3ORL.AC_UL320.jpg"
        />
      </div>
 </div>

  )
}

export default Fashion