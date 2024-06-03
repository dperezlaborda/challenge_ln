import { PromoBox } from "../../base_components/promo_box";
import Propiedades from "../../../../assets/propiedades.svg";
import Campo from "../../../../assets/campo.svg";
import Bienestar from "../../../../assets/bienestar.svg";
import Movilidad from "../../../../assets/movilidad.svg";

export const PromoBoxes = () => {

  const promos = [
    {
      title: Propiedades,
      description: 'Casas, departamentos, inversiones y más',
    },
    {
      title: Campo,
      description: 'Agricultura, ganadería, tecnologías y más',
    },
    {
      title: Bienestar,
      description: 'Vida sana, nutrición, descanso y más',
    },
    {
      title: Movilidad,
      description: 'Tendencias, test drives, eléctricos y más',
    }
  ]

  return (
    <div className="mt-12 grid grid-cols-1 px-5 gap-y-4 md:grid-cols-2 md:gap-4 md:px-4 lg:px-53px lg:gap-10 xl:px-80 xl-gap-12">
      {promos.map((promo, index) => (
        <PromoBox key={index} title={promo.title} description={promo.description} />
      ))}
    </div>
  )
}
