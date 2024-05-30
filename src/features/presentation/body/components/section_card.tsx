import { CardRegular } from "../../base_components/card_regular/card_regular"
import { SectionTitleComponent } from "../../base_components/section_title_component"


export const SectionCard = () => {

  const sectionCards = [
    {
      image: '',
      title: 'Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
    },
    {
      image: '',
      title: 'Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
    },
    {
      image: '',
      title: 'Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
    },
    {
      image: '',
      title: 'Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
    },
    {
      image: '',
      title: 'Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
    },
    {
      image: '',
      title: 'Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
    }
  ]

  return (
    <div className="mt-12">
      <SectionTitleComponent title="Card Group x 6" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 md:px-4 lg:px-53px xl:px-80">
        {sectionCards.map((card, index) => (
          <CardRegular className="mt-8" key={index}>
            <CardRegular.Image alt='' />
            <CardRegular.Title className="px-4 md:px-0" lead="Lead" title={card.title}/>
            <div className="mt-2 px-4 md:px-0">
              <CardRegular.Footer textColor="text-button-text" author="Author / Marquee"/>
            </div>
          </CardRegular>
        ))}
      </div>
    </div>
  )
}
