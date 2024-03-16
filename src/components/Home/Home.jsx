import Hero from "../../pages/Hero/Hero.jsx";
import Tours from "../../pages/Tours/Tours.jsx";
import TourWithDiscount from "../../pages/TourWithDiscount/TourWithDiscount.jsx";
import PopularTour from "../../pages/PopularTour/PopularTour.jsx";

function Home() {
    return (
        <div>
            <Hero/>
            <Tours/>
            <TourWithDiscount/>
            <PopularTour/>
        </div>
    );
}

export default Home;