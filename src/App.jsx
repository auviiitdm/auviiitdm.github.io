import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/About";
import AchievementsPage from "./components/Achievement";
import Vehicles from "./components/Vehicles/Vehicles";
import Sponsors from "./components/Sponsors";
import TeamHub from "./components/TeamHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// assets
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

const MainPage = ({ loading }) => (
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
        <Contact />
        <Footer />
        <BackToTop />
      </>
    )}
  </>
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
    <Router>
      <Switch>
        <Route exact path="/" render={() => <MainPage loading={loading} />} />
        <Route path="/teamhub" component={TeamHub} />
      </Switch>
    </Router>
  );
};

export default App;
