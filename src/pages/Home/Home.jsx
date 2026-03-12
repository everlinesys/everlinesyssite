import AnnouncementBar from "../../components/AnnouncementBar"
import BackedBy from "../../components/BackedBy"
import CTA from "../../components/CTA"
import Capabilities from "../../components/Features"
import Hero from "../../components/Hero"
import ProductIntro from "../../components/ProductIntro"
import Reviews from "../../components/Reviews"
import TechStack from "../../components/TechStack"
import Trust from "../../components/Trust"

export default function Home() {
    return (
        <div>
            {/* <AnnouncementBar /> */}
            <Hero />
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
