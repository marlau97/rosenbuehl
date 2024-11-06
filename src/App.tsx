import Header from "./Header/Header";
import Booking from "./Booking/Booking";
import  "./App.css"


function App() {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='content'>
                <Booking></Booking>
            </div>
        </div>
    );
}

export default App;
