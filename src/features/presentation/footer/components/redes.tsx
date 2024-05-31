import { IconComponent } from '../../base_components/icon_component';
import facebook from '../../../../assets/iconos/facebook-icon.svg';
import twitter from '../../../../assets/iconos/twitter-icon.svg';
import instagram from '../../../../assets/iconos/instagram-icon.svg';
import nose from '../../../../assets/iconos/nose-icon.svg';

export const Redes = ({ hidden }: { hidden: boolean }) => {
  return (
    <div className={`flex gap-x-8 ${hidden ? 'lg:hidden' : ''}`}>
        <IconComponent 
          icon={facebook}
          w="24px"
          h="24px"
        />
        <IconComponent 
          icon={twitter}
          w="24px"
          h="24px"
        />
        <IconComponent
          icon={instagram}
          w="24px"
          h="24px"
        />
        <IconComponent 
          icon={nose}
          w="24px"
          h="24px"
        />
      </div>
  )
}
