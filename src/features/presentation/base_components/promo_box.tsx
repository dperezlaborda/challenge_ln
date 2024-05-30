import { ImageComponent } from "./image_component"

export const PromoBox = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="flex border border-gray-ln p-4 gap-4">
      <div className="grid gap-2">
        <ImageComponent src={title} alt_img="Promo" height="22px" width="auto" />
        <p className="">{description}</p>
      </div>
    </div>
  )
}
