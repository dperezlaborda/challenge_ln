import { Suspense } from 'react';
import { AperturaViewModel } from './apertura_view_model';
import { 
  NavigationHeader,
  SubHeader,
  Anticipo,
  Placeholder,
  Hero,
  Cabezal
} from './components/apertura';

export const Apertura = () => {

  const { weatherData, mockData } = AperturaViewModel();

  return (
      <>
        <NavigationHeader />
        <SubHeader wheaterData={weatherData.clima} />
        <Anticipo />
        <Placeholder />
        <div className='hidden md:flex md:px-4 md:py-6 lg:px-56 xl:px-450px'>
          <Cabezal />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero data={mockData}>
            <Hero.Badge bgColor='bg-black-ln lg:bg-red-ln' />
            <Hero.Content />
            <Hero.Footer author={mockData[0].nombre_autor ?? 'N/A'}/>
          </Hero>
        </Suspense>
      </>
  )
}
