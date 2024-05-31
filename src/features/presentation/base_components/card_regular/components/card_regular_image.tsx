import { CardRegularImageProps } from "../../../../interfaces/interfaces";
import CardError from "./card_error";

const CardRegularImage = ({
  src,
  className = '',
  alt,
  height,
  width
}: CardRegularImageProps) => {
  return (
    <div className={`relative flex justify-center items-center border border-gray-ln h-60 bg-no-image ${className}`}>
      { src ? (
        <img className="absolute top-0 left-0 w-full h-full object-cover" src={src} alt={alt} style={{height: height, width: width}}/>
      ) : (
        <CardError />
      )}
    </div>
  );
}

export default CardRegularImage;
