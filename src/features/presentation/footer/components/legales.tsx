import { ImageComponent } from '../../base_components/image_component';
import gdaLogo from '../../../../assets/iconos/gda-icon.svg';
import dataFiscalLogo from '../../../../assets/imagenes/data-fiscal.png';

export const Legales = ({hidden}: { hidden:boolean }) => {
  return (
    <>
      <div className={`flex gap-x-8 px-8 ${hidden ? 'lg:hidden' : ''}`}>
        <ImageComponent 
          src={gdaLogo}
          alt_img='GDA Logo'
          height='20px'
          width='37px'
        />
        <p className="text-sm text-button-text arial-typo">Miembro de GDA. Grupo de Diarios América</p>
        <ImageComponent 
          src={dataFiscalLogo}
          alt_img="data fiscal"
          height="38px"
          width="28px"
        />
      </div>
      <div className={`flex justify-center ${hidden ? 'lg:hidden' : ''}`}>
        <p className="text-center text-sm	arial-typo text-button-text">Copyright 2024 SA LA NACION | Todos los derechos reservados</p>
      </div>
    </>
  )
}
