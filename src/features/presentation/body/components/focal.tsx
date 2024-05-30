import { CardRegular } from "../../base_components/card_regular/card_regular.tsx"
import { SectionTitleComponent } from "../../base_components/section_title_component.tsx"

export const Focal = () => {

  const cards = [
    {
      src: 'https://via.placeholder.com/150',
      alt: 'image 1'
    },
    {
      src: 'https://via.placeholder.com/150',
      alt: 'image 2'
    },
    {
      src: 'https://via.placeholder.com/150',
      alt: 'image 3'
    }
  ]

  return (
    <>
      <SectionTitleComponent title="Focal izquierdo" />
      <div className="grid grid-cols-1 gap-y-8 mt-5 md:grid-cols-3 md:gap-8 lg:px-10 xl:px-80">
      {cards.map((card, index) => (
          <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}>
            <CardRegular className={index === 0 ? "md:flex md:flex-col-reverse" : ""}>
              <div className={index === 0 ? "md:pl-4 xl:pl-0" : "md:pr-4 xl:pr-0"}>
                <CardRegular.Image
                  className={index === 0 ? "md:h-312px" : "md:h-156px"}
                  alt=''
                />
              </div>
              <div>
                <CardRegular.Title 
                  fontSize={index === 0 ? "text-xl md:text-4xl" : "text-xl md:text-lg"}
                  className={index != 0 ? "py-2 px-4 md:px-0" : "py-2 px-4 xl:px-0"}
                  lead={`Lead ${index + 1}`} 
                  title='Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'
                />
                {index === 0 && <CardRegular.Subtitle />}
                <div className={index == 0 ? "px-4 md:pb-2 xl:px-0 xl:py-2" : "px-4 md:px-0" }>
                  <CardRegular.Footer 
                    author='Tay' 
                    textColor="text-button-text"
                  />
                </div>
              </div>
            </CardRegular>
          </div>
        ))}
      </div>
    </>
  )
}
