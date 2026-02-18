import CTA from "../../components/CTA"
import Capabilities from "../../components/Features"
import Hero from "../../components/hero"
import ProductIntro from "../../components/ProductIntro"
import Reviews from "../../components/Reviews"
import Trust from "../../components/Trust"

export default function Home() {
    return (
        <div>
            <Hero />
            <ProductIntro />
            <Capabilities />
            <Trust />
            <Reviews />
            <CTA />
        </div>
    )
}
