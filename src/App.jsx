import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import OurTeam from "./components/OurTeam";
import Gallery from "./components/Gallery";
import Consulation from "./components/Consulation";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatParentsSay from "./components/WhatParentsSay";
import Numbers from "./components/Numbers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Hero />
            <Navbar />
            <WhatWeDo />
            <OurTeam />
            <Gallery />
            <Consulation />
            <WhyChooseUs />
            <WhatParentsSay />
            <Numbers />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
