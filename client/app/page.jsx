import { Images } from '../components/Images/Images'
import { ScrollDown } from '../components/scroll-down/scroll'

export default function HomePage  () {
    return (
        <div>
            <h1 className="title">Files App</h1>
            <h4 className="h4">"Save your files with security"</h4>
            <Images />
            <ScrollDown />
        </div>   
    )
}