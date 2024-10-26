import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Item from "./Item";
import "../../index.css"

function ItemList({ category }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "producto"));
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                return productsData;
            } catch (error) {
                console.error("Error fetching products:", error);
                return [];
            }
        };

        fetchProducts()
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error in fetchProducts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    const filteredData = category ? data.filter((prod) => prod.category === category) : data;

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="py-8 text-2xl">
                    {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All our products'}
                </h2>
                <div className="grid grid-cols-6 gap-16 pb-8">
                    {filteredData.map((prod) => (
                        <Item
                            key={prod.id}
                            id={prod.id}
                            image={prod.image}
                            name={prod.name}
                            brand={prod.brand}
                            category={prod.category}
                            price={prod.price}
                            description={prod.description}
                            stock={prod.stock}
                            size={prod.size}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ItemList;