import NoImage from "../../../../../assets/imagenes/Image-not-found.png";

const CardError = () => {
  return (
    <div className="flex justify-center h-full md:h-156px">
      <img src={NoImage} alt="Image not found" />
    </div>
  )
}

export default CardError