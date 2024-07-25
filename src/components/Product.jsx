
import "./Product.css";

const Product = ({ id, title, image, price, rating, description }) => {
  return (
    <div className="product">
      <img src={image} alt="Product" className="product__image" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__description">-{description}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
      
        <button className="product__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;

