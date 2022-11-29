import Image from 'next/image'
const imagesSrc = ['/../public/photoPage.jpg', '/../public/photoPage2.jpg', '/../public/photoPage3.jpg']

export function Images () {
    return (
        <div className={'carousel slide'}>
            <div className='carousel-inner'>
                <div className="carousel-item active">
                    <Image src={imagesSrc[0]} className='d-block w-100' width="600" height="550"/>
                </div>
                <div className='carousel-item'>
                    <Image src={imagesSrc[1]} className='d-block w-100' width="600" height="550"/>
                </div>
                <div className='carousel-item'>
                    <Image src={imagesSrc[2]} className='d-block w-100' width="600" height="550"/>
                </div>
            </div>
        </div>
    )
}