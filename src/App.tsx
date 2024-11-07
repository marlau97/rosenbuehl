import { useContext } from "react";
import { AppContext } from "./Provider";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import "./App.css";
import Privacy from "./Privacy/Privacy";
import Apartments from "./Apartments/Apartments";
import Location from "./Location/Location";
import OurHouse from "./OurHouse/OurHouse";
import TripTips from "./TripTips/TripTips";
import Legal from "./Legal/Legal";

const App: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useContext must be used within an AppProvider");
    }

    const { pageToShow } = context;

    return (
        <div>
            <Header />
            <div className="content">
                {pageToShow === 'landing' && <Landing />}
                {pageToShow === 'apartment' && <Apartments />}
                {pageToShow === 'location' && <Location />}
                {pageToShow === 'house' && <OurHouse />}
                {pageToShow === 'tips' && <TripTips />}
                {pageToShow === 'legal' && <Legal />}
                {pageToShow === 'privacy' && <Privacy />}
            </div>
            <Footer />
        </div>
    );
};

export default App;
