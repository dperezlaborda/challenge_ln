import React, { ReactElement } from "react";

const Content = React.lazy(() => import('../../base_components/card_full/components/card_full_content'));
const Badge = React.lazy(() => import('../../base_components/badge_component'));
const Footer = React.lazy(() => import('../../base_components/card_full/components/card_full_footer'));

export const CardFullScreen = ({ children } : { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="h-450px bg-red-500">
      <div className="bg-gradient-to-b from-black-opacity-0 to-black-opacity-80 h-full flex items-end">
        <div className="flex flex-col h-224px w-full pt-16 px-4 pb-2 gap-y-2 lg:px-53px xl:px-80">
          { children }
        </div>
      </div>
    </div>
  )
}

CardFullScreen.Content = Content;
CardFullScreen.Badge = Badge;
CardFullScreen.Footer = Footer;
