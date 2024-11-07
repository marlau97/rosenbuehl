import Header from "./Header/Header";
import Booking from "./Booking/Booking";
import  "./App.css"
import Footer from "./Footer/Footer";


function App() {

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='content'>
                <Booking></Booking>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
