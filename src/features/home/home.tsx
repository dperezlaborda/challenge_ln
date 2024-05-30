import { useNotas } from "../hooks/use_notas";
import { Apertura } from "../presentation/apertura/apertura"
import { Body } from "../presentation/body/body"
import { Footer } from "../presentation/footer/footer"

export const Home = () => {

  const { data, isLoading, error } = useNotas();

  console.log(data, isLoading, error);

  return (
    <div>
      <Apertura />
      <Body />
      <Footer />
    </div>
  )
}