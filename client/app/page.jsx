import { Images } from '../components/Images/Images'
import { ScrollDown } from '../components/scroll-down/scroll'
import { HomePageInfo } from '../components/HomePageInfo/homePageInfo'
import { Footer } from "../components/Footer/footer.jsx"
export default function HomePage  () {
    return (
    <>
        <div>
            <h1 className="title">Files App</h1>
            <h4 className="h4">"Save your files with security"</h4>
            <Images />
            <ScrollDown />
        </div>   
        <HomePageInfo />
        <Footer />
    </>
    )
}