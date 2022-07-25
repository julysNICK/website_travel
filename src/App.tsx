import "./App.css";
import BoxText from "./component/boxText";
import ListLogos from "./component/ListLogos";
import Navbar from "./component/navbar";
import SectionCategory from "./component/sectionCategory";
import SectionDestination from "./component/SectionDestination";
import SectionTravelTwoColumns from "./component/SectionTravelTwoColumns";
import SendMe from "./component/SendMe";
import SliderTwoColumn from "./component/sliderTwoColumn";
function App() {
    return (
        <div className="container">
            <Navbar />
            <BoxText />
            <SectionCategory />
            <SectionDestination />
            <SectionTravelTwoColumns />
            {/* <SliderTwoColumn /> */}
            <ListLogos />
            <SendMe />
        </div>
    );
}

export default App;
