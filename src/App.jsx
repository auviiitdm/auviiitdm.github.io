import { useState, useEffect } from "react";

// components
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Vehicles from "./components/Vehicles/Vehicles";
import Sponsors from "./components/Sponsors";
import Posts from "./components/Posts/Posts";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// assests
import Logo from "./assets/new_logo.png";

// styles
import { ThreeDots } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./styles/style.css";
import "animate.css/animate.min.css";

const Loading = () => (
  <div className="loading">
    <img src={Logo} alt="logo" />
    <ThreeDots color="#0dc1f7" height={100} width={100} />
  </div>
);

// main jsx
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 1000);
    return () => clearInterval(isLoading);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <LandingPage />
          <Navbar />
          <AboutPage />
          <AchievementsPage />
          <Vehicles />
          <Sponsors />
          <Posts />
          <Teams />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
