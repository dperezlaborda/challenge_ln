import { ButtonComponent } from '../../base_components/button_component';
import { ImageComponent } from '../../base_components/image_component';
import { IconComponent } from '../../base_components/icon_component';
import laNacionLogo from '../../../../assets/logo-la-nacion.svg';
import SearchIcon from '../../../../assets/iconos/search-icon.svg';
import SectionsIcon from '../../../../assets/iconos/sections-icon.svg';

export const NavigationHeader = () => {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-4 py-3 lg:py-4 lg:px-lg-header-px xl:px-xl-header-px">
        <div className='hidden lg:flex lg:gap-x-6'>
          <ButtonComponent label="secciones" icon={SectionsIcon} />
          <ButtonComponent label="buscar" icon={SearchIcon} />
        </div>
        <ImageComponent 
          src={laNacionLogo}
          alt_img='La Nacion Logo'
          height='16px'
          width='164px'
          className='lg:w-lg-logo'
        />
        <div className='hidden lg:flex lg:gap-x-6'>
          <ButtonComponent label="suscribite" bgColor="bg-yellow-ln" border="border border-button-border" />
          <ButtonComponent label="ingresar" bgColor="bg-transparent" border="border border-blue-ln" labelColor="text-blue-ln"/>
        </div>
        <div className="flex items-center gap-x-6 lg:hidden">
          <p className="text-xs uppercase text-blue-ln font-bold arial-typo">suscribite</p>
          <IconComponent icon={SearchIcon} w={'20px'} h={'20px'} />
        </div>
      </div>
    </div>
  )
}