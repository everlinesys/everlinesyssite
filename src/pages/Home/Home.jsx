import AnnouncementBar from "../../components/AnnouncementBar"
import BackedBy from "../../components/BackedBy"
import CTA from "../../components/CTA"
import Capabilities from "../../components/Features"
import Hero from "../../components/Hero"
import HeroDev from "../../components/Hero-new"
import ProductIntro from "../../components/ProductIntro"
import Reviews from "../../components/Reviews"
import TechStack from "../../components/TechStack"
import Trust from "../../components/Trust"
import Works from "../../components/Works"

export default function Home() {
    return (
        <div>
            {/* <AnnouncementBar /> */}
            {/* <Hero /> */}
            <HeroDev />
            <Works />
            <ProductIntro />
            <Capabilities />
            <BackedBy />
            <TechStack />
            <Trust />
            <Reviews />
            <CTA />
        </div>
    )
}
