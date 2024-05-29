import { CardRegular } from "../../base_components/card_regular/card_regular.tsx"

export const Focal = () => {
  return (
    <>
      <div className="py-0 px-4">
        <h2 className="text-2xl	mb-2 font-bold">
          Focal izquierdo
        </h2>
        <span className="block h-px bg-button-border w-full"></span>
      </div>
      <div className="grid grid-cols-1 gap-y-8 mt-5 md:grid-cols-3 md:gap-8">
        <div className="md:col-span-2 md:row-span-2">
          <CardRegular className="md:flex md:flex-col-reverse">
            <div>
              <CardRegular.Image alt=''/>
            </div>
            <div>
              <CardRegular.Title lead='Lead 1' title='Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'/>
              <CardRegular.Subtitle />
              <div className="px-4">
                <CardRegular.Footer author='Tay' textColor="text-button-text"/>
              </div>
            </div>
          </CardRegular>
        </div>
        <div className="md:col-span-1 md:row-span-1">
          <CardRegular>
            <CardRegular.Image alt=''/>
            <CardRegular.Title lead='Lead 2' title='Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'/>
            <CardRegular.Subtitle />
            <div className="px-4">
              <CardRegular.Footer author='Tay' textColor="text-button-text"/>
            </div>
          </CardRegular>
        </div>
        <div className="md:col-span-1 md:row-span-1">
          <CardRegular>
            <CardRegular.Image alt=''/>
            <CardRegular.Title lead='Lead 3' title='Title esto es un titulo de la novedad con unas cuantas lineas que ocupar'/>
            <CardRegular.Subtitle />
            <div className="px-4">
              <CardRegular.Footer author='Tay' textColor="text-button-text"/>
            </div>
          </CardRegular>
        </div>
      </div>
    </>
  )
}
