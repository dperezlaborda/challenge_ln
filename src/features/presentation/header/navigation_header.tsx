import laNacionLogo from '../../../assets/logo-la-nacion.svg';
import { ImageComponent } from '../base_components/image_component';

export const NavigationHeader = () => {
  return (
    <div className="border-b border-border-color h-12">
      <div className="flex justify-between px-4 py-3 md:bg-blue-200">
        <ImageComponent 
          src={laNacionLogo}
          alt_img='La Nacion Logo'
          height='16px'
          width='164px'
        />
        <div className="flex items-center gap-x-6">
          <p>suscribite</p>
          <p>h</p>
        </div>
      </div>
    </div>
  )
}