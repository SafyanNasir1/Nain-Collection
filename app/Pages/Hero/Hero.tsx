"use client"

import DeliveryMap from "@/app/Components/DeliveryMap/DeliveryMap";
import Main from "../../Components/Main/main";
import Navbar from "../../Components/Navbar/navbar";
import Product from "../../Components/Product/product";
import FeatureStrip from "../../Components/FeatureStrip/FeatureStrip";
import Footer from "../../Components/Footer/Footer";


export default function Hero() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Product/>
    <DeliveryMap/>
    <FeatureStrip/>
    <Footer/>
    </>
  );
}
