import React from "react";
import img1 from "../../assets/01_sofa.jpg";
import img2 from "../../assets/02_armchair.jpg";
import img3 from "../../assets/03_bed.jpg";
import img4 from "../../assets/04_dining-set.jpg";
import img5 from "../../assets/05_sideboard.jpg";
import img6 from "../../assets/06_coffee-table.jpg";
import img7 from "../../assets/07_tv-console.jpg";
import img8 from "../../assets/08_bookshelf.jpg";
import img9 from "../../assets/09_accent-chair.jpg";
import img10 from "../../assets/10_wardrobe.jpg";
import img11 from "../../assets/11_storage-cabinet.jpg";
import img12 from "../../assets/12_bench.jpg";

import { FaStar, FaStarHalfAlt, FaCartPlus } from "react-icons/fa";

const products = [
  { id: 1, name: "Sofa", price: "5000 PKR", image: img1 },
  { id: 2, name: "Armchair", price: "6000 PKR", image: img2 },
  { id: 3, name: "Bed", price: "7000 PKR", image: img3 },
  { id: 4, name: "Dining Set", price: "8000 PKR", image: img4 },
  { id: 5, name: "Sideboard", price: "9000 PKR", image: img5 },
  { id: 6, name: "Coffee Table", price: "10000 PKR", image: img6 },
  { id: 7, name: "Tv Console", price: "11000 PKR", image: img7 },
  { id: 8, name: "Bookshelf", price: "12000 PKR", image: img8 },
  { id: 9, name: "Accent Chair", price: "8000 PKR", image: img9 },
  { id: 10, name: "Wardrobe", price: "4000 PKR", image: img10 },
  { id: 11, name: "Storage Cabinet", price: "2000 PKR", image: img11 },
  { id: 12, name: "Bench", price: "9000 PKR", image: img12 },
];

const Shop = () => {
  return (
    <div className="shop-container">
      <h2>Featured Products</h2>

      <div className="box">
        {products.map((product) => (
          <div className="box-content" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-details">
              <h4>{product.name}</h4>

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>

              <div className="product-bottom">
                <p>{product.price}</p>
                <button>
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
