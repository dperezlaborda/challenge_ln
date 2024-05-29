import { BadgeComponent } from "../../base_components/badge_component";
import { Card } from "../../base_components/card_full/card_full";

export const CardFullScreen = () => {
  return (
    <div className="h-450px bg-red-500">
      <div className="bg-gradient-to-b from-black-opacity-0 to-black-opacity-80 h-full flex items-end">
        <div className="flex flex-col h-224px w-full pt-16 px-4 pb-2 gap-y-2 lg:px-53px xl:px-80">
          <BadgeComponent label='infografía'/>
          <Card.Content title='Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar' />
          <Card.Footer author="Bla bla"/>
        </div>
      </div>
    </div>
  )
}
