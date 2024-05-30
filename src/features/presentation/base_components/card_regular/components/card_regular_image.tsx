export interface CardRegularImageProps {
  src?: string;
  className?: string;
  alt: string;
}

const CardRegularImage = ({
  src,
  className = '',
  alt,
}: CardRegularImageProps) => {
  return (
    <div className={`relative border border-gray-ln h-60 bg-blue-200 ${className}`}>
      <img className="absolute top-0 left-0 w-full h-full object-cover" src={src ? src : 'no image'} alt={alt} />
    </div>
  );
}

export default CardRegularImage;
