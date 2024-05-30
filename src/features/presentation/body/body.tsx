import { 
  Focal,
  Opinion,
  PromoBoxes,
  SectionCard
} from "./components/body"

export const Body = () => {
  return (
    <div className="mt-12">
      <Focal />
      <SectionCard />
      <PromoBoxes />
      <Opinion />
    </div>
  )
}
