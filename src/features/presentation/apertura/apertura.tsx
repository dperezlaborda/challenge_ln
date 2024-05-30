import { 
  NavigationHeader,
  SubHeader,
  Anticipo,
  Placeholder,
  Hero,
  Cabezal
} from './components/apertura';

export const Apertura = () => {
  return (
      <>
        <NavigationHeader />
        <SubHeader />
        <Anticipo />
        <Placeholder />
        <div className='hidden md:flex md:px-4 md:py-6 lg:px-56 xl:px-450px'>
          <Cabezal />
        </div>
        <Hero>
          <Hero.Badge bgColor='bg-black-ln lg:bg-red-ln' label='infografía'/>
          <Hero.Content title='Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar' />
          <Hero.Footer author="Bla bla"/>
        </Hero>
      </>
  )
}
