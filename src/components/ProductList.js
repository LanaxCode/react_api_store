import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json); //hier wird das updating eingeleitet und das useState mit den daten aus dem fetch befüllt
            })
    }, [])

    console.log(products)

    return (
        <section className="product-grid">
            {products.map((elt) => {
                return (
                    <ProductItem
                        image={elt.image}
                        title={elt.title}
                        price={elt.price}
                        id={elt.id}

                    />
                )

            })}
        </section>
    );
}

export default ProductList;