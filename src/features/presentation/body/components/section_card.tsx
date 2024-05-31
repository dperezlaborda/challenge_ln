import { MockDataType } from "../../../types/mock"
import { CardRegular } from "../../base_components/card_regular/card_regular"
import { SectionTitleComponent } from "../../base_components/section_title_component"


export const SectionCard = ({ data } : { data: MockDataType[] }) => {

  return (
    <div className="mt-12">
      <SectionTitleComponent title="Card Group x 6" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 md:px-4 lg:px-53px xl:px-80">
        {data.map((card, index) => (
          <CardRegular className="mt-8" key={index}>
            <CardRegular.Image 
              alt=''
              src={card.imagen_nota}
              className="h-240px md:h-156px"
            />
            <CardRegular.Title 
              fontSize="text-xl	md:text-lg md:font-suecaslab-medium"
              className="px-4 md:px-0" 
              lead={card.volanta || "N/A"} 
              title={card.titulo} 
            />
            <div className="mt-2 px-4 md:px-0">
              <CardRegular.Footer textColor="text-button-text" author={card.nombre_autor} />
            </div>
          </CardRegular>
        ))}
      </div>
    </div>
  )
}
