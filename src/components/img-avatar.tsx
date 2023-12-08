import Image from "next/image";
import img_avatar from '../../public/image-victor.jpg'

function ImgAvatar() {
    return (
        <div className='absolute mt-[88px] p-[5px] bg-white rounded-full'>
            <Image src={img_avatar} alt='image avatar' className='rounded-full' />
        </div>
    );
}

export default ImgAvatar;