import { ImageComponent } from "../../base_components/image_component";
import laNacionLogo from "../../../../assets/logo-la-nacion.svg";


export const Logo = ({ hidden }: { hidden: boolean }) => {
  return (
    <div className={`flex justify-center w-full ${hidden ? 'lg:hidden' : ''}`}>
      <ImageComponent 
        src={laNacionLogo}
        alt_img='La Nacion Logo'
        height='16px'
        width='164px'
      />
    </div>
  )
}
