import { 
  NavigationHeader,
  SubHeader,
  Anticipo,
  Placeholder,
  CardFullScreen,
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
        <CardFullScreen>
          <CardFullScreen.Badge label='infografía'/>
          <CardFullScreen.Content title='Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar' />
          <CardFullScreen.Footer author="Bla bla"/>
        </CardFullScreen>
      </>
  )
}
