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
import { useState } from "react";

function App() {
    const [showSideMenu, setShowSideMenu] = useState(false);

    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);
    };

    return (
        <>
            {showSideMenu && <SideMenu toggleSideMenu={toggleSideMenu} />}
            <Hero />
            <Navbar toggleSideMenu={toggleSideMenu} />
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
