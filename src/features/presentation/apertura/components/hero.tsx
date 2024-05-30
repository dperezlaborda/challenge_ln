import React, { ReactElement } from "react";

const Content = React.lazy(() => import('../../base_components/hero/components/hero_content'));
const Badge = React.lazy(() => import('../../base_components/badge_component'));
const Footer = React.lazy(() => import('../../base_components/hero/components/hero_footer'));

export const Hero = ({ children } : { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="h-450px bg-blue-light-ln">
      <div className="bg-gradient-to-b from-black-opacity-0 to-black-opacity-80 h-full flex items-end">
        <div className="flex flex-col h-224px w-full pt-16 px-4 pb-2 gap-y-2 lg:px-53px xl:px-80">
          { children }
        </div>
      </div>
    </div>
  )
}

Hero.Content = Content;
Hero.Badge = Badge;
Hero.Footer = Footer;
