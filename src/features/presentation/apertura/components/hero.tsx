import React, { Suspense, createContext } from "react";
import { HeroProps } from "../../../interfaces/interfaces";
import bgImage from "../../../../assets/imagenes/mariposa.jpg";

const Content = React.lazy(() => import('../../base_components/hero/components/hero_content'));
const Badge = React.lazy(() => import('../../base_components/badge_component'));
const Footer = React.lazy(() => import('../../base_components/hero/components/hero_footer'));

export const HeroContext = createContext({} as HeroProps);
const { Provider } = HeroContext;

export const Hero = ({ children, data } : HeroProps) => {

  return (
    <Provider value={{
      data
    }}>
      <div className="h-450px md:h-855px lg:h-768px bg-cover bg-center" style={{
          backgroundImage: `url(${bgImage})`
        }} role="banner"
      >
        <div className="bg-gradient-to-b from-black-opacity-0 to-black-opacity-80 h-full flex items-end">
          <div className="flex flex-col h-224px w-full pt-16 px-4 pb-2 gap-y-2 lg:px-53px xl:px-80">
            <Suspense fallback={<div>Loading...</div>}>
              { children }
            </Suspense>
          </div>
        </div>
      </div>
    </Provider>
  )
}

Hero.Content = Content;
Hero.Badge = Badge;
Hero.Footer = Footer;
