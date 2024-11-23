import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Subscribe from "../mailList/Subscribe";
import Footer from "../../components/footer/Footer";



 

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Featured />
        
          <h2 className="homeTitle">Browse by property type</h2>
          <PropertyList />
          <h2 className="homeTitle">Peoples Favorite</h2>
          <FeaturedProperties />
          <Subscribe />
          <Footer />
        </div>
    </div>
  )
}

export default Home;

