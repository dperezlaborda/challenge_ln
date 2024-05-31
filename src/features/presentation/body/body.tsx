import { BodyViewModel } from "./body_view_model";
import { 
  Focal,
  Opinion,
  PromoBoxes,
  SectionCard
} from "./components/body"

export const Body = () => {

  const { notas, reversedData, slicedData } = BodyViewModel();

  return (
    <div className="mt-12">
      <Focal 
        data={slicedData}
        isLoading={notas.notas.isLoading}
        error={notas.notas.error}
      />
      <SectionCard data={reversedData} />
      <PromoBoxes />
      <Opinion data={slicedData}/>
    </div>
  )
}
