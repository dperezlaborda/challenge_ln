export const ImageComponent = ({
  src,
  alt_img,
  width = '100%',
  height = '100%'
}: {
  src: string, 
  alt_img: string,
  width?: string,
  height?: string
}) => {
  return (
    <img src={src} alt={alt_img} width={width} height={height} />
  )
}
