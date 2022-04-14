import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://links.papareact.com/6ff"
            alt="banner"
          />
          <div className="home__row">
            <Product id="0" title="Looking for Alaska" price={299} image='https://rukminim1.flixcart.com/image/416/416/j0tvngw0/book/5/2/8/looking-for-alaska-original-imaesjhjcf7dcqcu.jpeg?q=70' rating={5}/>
            <Product id="1" title="Sujata Juicer Mixer Grinder 900 " price={5349} image='https://5.imimg.com/data5/OG/JV/AW/SELLER-3326648/sujata-powermatic-900-w-juicer-250x250.jpg' rating={4}/>
          </div>
          <div className="home__row">
            <Product id="2" title="asics UPCOURT (MEN)" price={6497} image=" https://rukminim1.flixcart.com/image/495/594/kyhlfgw0/shoe/e/z/x/-original-imagapk8atfty7uq.jpeg?q=50" rating={3}/>
            <Product id="3" title="DELL Inspiron Core i3 " price={64970} image=" https://rukminim1.flixcart.com/image/312/312/kp1imq80/computer/u/b/z/na-gaming-laptop-acer-original-imag3d63hk3h8nm2.jpeg?q=70" rating={5}/>
            <Product id="4" title="PROVOGUE Backpack" price={672} image="https://rukminim1.flixcart.com/image/800/960/kddf6a80/backpack/f/g/g/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-004-original-imafua3eku3uzywy.jpeg?q=50" rating={4}/>
          </div>
          <div className="home__row">
            <Product id="5" title="SAMSUNG Series 7 189 cm (75 inch)"price={239999} image="https://rukminim1.flixcart.com/image/416/416/jialea80/television/z/s/e/samsung-75nu7100-original-imaf64ffzhfuqgmw.jpeg?q=70" rating={4}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
