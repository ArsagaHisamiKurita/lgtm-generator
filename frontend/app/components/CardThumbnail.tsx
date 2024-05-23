import { THUMBNAIL_SIZE } from '../utils/constants';
import { ButtonFavorite } from './ButtonFavorite';

type CardThumbnailProps = {
    image: {
        image_url: string;
    };
};

export const CardThumbnail = ({image} : CardThumbnailProps) => {
    return (
        <div className='relative'>
            <img src={image.image_url} width={THUMBNAIL_SIZE.width} height={THUMBNAIL_SIZE.height} alt="" />
            <span className='absolute bottom-[8px] right-[8px] w-[30px] h-[30px]'>
                <ButtonFavorite />
            </span>
        </div>
    );
}