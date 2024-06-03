import { Suspense, createContext } from "react"
import { CardRegular } from "../../base_components/card_regular/card_regular.tsx"
import { SectionTitleComponent } from "../../base_components/section_title_component.tsx"
import { FocalProps } from "../../../interfaces/interfaces.ts"

export const FocalContext = createContext({} as FocalProps);
const { Provider } = FocalContext;

export const Focal = ({ data, isLoading, error }: FocalProps ) => {

  return (
    <>
      <SectionTitleComponent title="Focal izquierdo" />
      <Provider value={{
        data,
        isLoading,
        error
      }}>
        <div className="grid grid-cols-1 gap-y-8 mt-5 md:grid-cols-3 md:gap-8 lg:px-10 xl:px-80">
        {data?.map((card, index) => (
            <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}>
              <Suspense fallback={<div>Loading...</div>}>
                <CardRegular
                  href={card.url_nota}
                  className={index === 0 ? "md:flex md:flex-col-reverse" : ""}
                >
                  <div className={index === 0 ? "md:pl-4 xl:pl-0" : "md:pr-4 xl:pr-0"}>
                    <CardRegular.Image
                      className={index === 0 ? "md:h-312px xl:h-373px" : "md:h-156px"}
                      alt={'alt'}
                      src={card.imagen_nota}
                    />
                  </div>
                  <div>
                    <CardRegular.Title
                      fontSize={index === 0 ? "text-xl md:text-4xl" : "text-xl md:text-lg"}
                      className={index != 0 ? "py-2 px-4 md:pl-0 md:pr-4 md:font-suecaslab-medium" : "py-2 px-4 xl:px-0"}
                      lead={card.volanta || "N/A"}
                      title={card.titulo}
                    />
                    {index === 0 && <CardRegular.Subtitle />}
                    <CardRegular.Footer
                      className={index == 0 ? "px-4 md:pb-2 xl:px-0 xl:py-2" : "px-4 md:px-0" }
                      author={card.nombre_autor || "N/A"} 
                      textColor="text-button-text"
                    />
                  </div>
                </CardRegular>
              </Suspense>
            </div>
          ))}
        </div>
      </Provider>
    </>
  )
}
