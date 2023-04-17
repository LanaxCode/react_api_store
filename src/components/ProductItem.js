import { Link } from "react-router-dom";
// import ProductDetails from "./ProductDetails";

const ProductItem = (props) => {

    // console.log(props.product)
    console.log(props.id)
    return (
        <div className="product-container">

            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.price}€</p>
            <Link to={`/${props.id}`} className="show-more-button">Show more</Link>
        </div>

    );

}

export default ProductItem;