import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {

    const [productsDetails, setProductsDetails] = useState([])
    const idParams = useParams()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(json =>
                setProductsDetails(json)
            )
    }, [])

    const singleProduct = productsDetails.filter((elt) => {
        return elt.id.toString() === idParams.productId
    })

    console.log(singleProduct)

    // console.log(productsDetails[0].title)
    return (
        <section>
            <Link to='/' className="back-link">Back to products</Link>
            {singleProduct.map((elt) => {
                return (
                    <div className="detail-product-container">
                        <img src={elt.image}></img>
                        <p>{elt.title}</p>
                        <p>{elt.price}</p>
                        <p>{elt.description}</p>
                    </div>
                )
            })}
            {/* <h2>{productsDetails[0].title}</h2> */}
        </section>
    );
}

export default ProductDetails;