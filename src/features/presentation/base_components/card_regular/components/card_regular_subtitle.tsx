import { useContext } from "react";
import { FocalContext } from "../../../body/components/focal";

const CardRegularSubtitle = () => {

  const { data } = useContext(FocalContext) as { data: { subtitulo: string }[] };

  return (
    <p className="text-base text-text-color py-2 px-4 xl:px-0 arial-typo">
      {data[0].subtitulo}
    </p>
  )
}

export default CardRegularSubtitle;