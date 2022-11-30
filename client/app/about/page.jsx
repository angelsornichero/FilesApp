import Image from "next/image"


export default function AboutPage () {
return (
    <>
        <h1 className="title">About us</h1>
        <div className="about-div">
        <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore, dignissimos perspiciatis sunt laborum laboriosam. Quibusdam tempore deleniti maxime consequuntur culpa quos aliquam, nam voluptas! Dignissimos est quisquam, fugit odio pariatur sed eligendi adipisci ducimus quod fugiat facilis eius nostrum vitae eos nisi! Repellendus laborum aspernatur laudantium. Earum veritatis quam voluptatem cupiditate error fugit delectus libero voluptas, ut reprehenderit consequatur veniam impedit odit pariatur nulla suscipit non facere. Laudantium totam repellat repellendus, rerum ab animi exercitationem aspernatur porro eveniet perspiciatis, autem et est placeat dicta ad pariatur aperiam facilis ipsum culpa libero quam nobis! Pariatur molestiae nobis obcaecati fuga iusto!   
        </p> 
            <Image src='/../public/photoPage5.jpg' className='image' width="400" height="400"/>
        </div>
    </>
)
}