import Carousal2 from "../../Carousal/Carousal2";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import "./HomePage.css";
import SaleCountdownTimer from "../../SaleCount/SaleCountdownTimer";
import CategoryGrid from "../../categories/CategoryGrid";
import FeatureBar from "../../Featurebar/FeatureBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SaleCountdownTimer/>
      <Carousal2 />
      <CategoryGrid/>
      <FeatureBar/>
      <Footer />
    </>
  );
};

export default HomePage;