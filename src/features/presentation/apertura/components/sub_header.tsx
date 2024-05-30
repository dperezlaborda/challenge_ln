import { IconComponent } from '../../base_components/icon_component';
import { ImageComponent } from '../../base_components/image_component';
import clubLaNacionLogo from '../../../../assets/logo-club-ln.svg';
import weatherIcon from '../../../../assets/iconos/wheater-icon.svg';
import { Data } from '../../../types/weather_data';

export const SubHeader = ({ wheaterData } : {wheaterData : Data}) => {

  const weather = wheaterData?.data?.timelines?.daily[0]?.values?.temperatureAvg ?? '20.00º';

  return (
    <div className="flex items-center justify-center h-10 px-4 py-1 md:justify-between lg:bg-gray-ln lg:py-2 lg:px-8 xl:px-xl-header-px">
      <div className="flex gap-x-4">
        <p className="hidden md:flex md:text-blue-ln md:text-sm md:font-bold arial-typo">Dólar: </p>
        <p className="text-sm	arial-typo">BNA: <b>$00,00 / $00,00 </b> </p>
        <p className="text-sm	arial-typo">Blue: <b>$00,00 / $00,00</b> </p>
      </div>
      <div className="hidden lg:flex">
        <div className="flex gap-x-2">
          <IconComponent icon={weatherIcon} w="22px" h="19px" />
          <p className='text-sm arial-typo'><b>{weather}</b> Capital Federal</p>
        </div>
      </div>
      <div className="hidden lg:flex">
        <p className='text-blue-ln text-sm arial-typo'>Recibí Newsletters</p>
      </div>
      <div className="hidden md:flex md:items-center md:gap-x-3">
        <ImageComponent src={clubLaNacionLogo} width='25px' alt_img='club ln'/>
        <p className='text-sm font-normal text-blue-ln arial-typo'>Descubrí tus beneficios</p>
      </div>
    </div>
  )
}
