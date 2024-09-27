import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {product} from "../../data/product";
import ItemDetail from "./ItemDetail"; // Importamos ItemDetail

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductById = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const foundProduct = product.find(
                        (p) => p.id === parseInt(id)
                    );
                    resolve(foundProduct);
                }, 1000);
            });
        };

        fetchProductById().then((response) => {
            setItem(response);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col items-center p-6">
            <ItemDetail item={item} /> {/* Pasamos el producto a ItemDetail */}
        </div>
    );
}

export default ItemDetailContainer;
