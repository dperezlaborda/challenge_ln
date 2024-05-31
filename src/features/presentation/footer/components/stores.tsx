import { ImageComponent } from "../../base_components/image_component"
import googlePlayLogo from "../../../../assets/imagenes/Android.png";
import appStoreLogo from "../../../../assets/imagenes/iOS.png";

export const Stores = ({hidden}: { hidden:boolean }) => {
  return (
    <div className={`flex gap-x-8 lg:justify-end ${hidden ? 'lg:hidden' : ''}`}>
      <ImageComponent 
        src={googlePlayLogo}
        alt_img="google play store"
        height="35px"
        width="120px"
      />
      <ImageComponent 
        src={appStoreLogo}
        alt_img="app store"
        height="35px"
        width="120px"
      />
    </div>
  )
}
