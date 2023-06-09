import React, { useState, useEffect } from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Footer from "../components/Footer";
import "../styles/HomeStyle.css";

// Deklarimi i funksionit Home
function Home() {

    // Deklarimi i variables products dhe funksionit setProducts si useState
    const [products, setProducts] = useState([]);

    // Krijimi i nje funksioni per te kerkuar te dhenat nga API i produktit
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:6001/api/product/get");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            {/* Thirrja e komponenteve te Navbar dhe Slider */}
            <Navbar />
            <Slider />

            {/* Krijimi i kartes se produkteve ne Home page */}
            <div>
                <div
                    className="main-content"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Render a Product component for each item in the products array */}
                    {products.map((product) => (
                        <div className="products-container">
                            <Product key={product.id} product={product} />
                        </div>
                    ))}

                </div>
            </div>

            <div style={{height: '100px'}}></div>

            <Footer />
        </>
    );

}

export default Home;