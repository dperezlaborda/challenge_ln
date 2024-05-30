import React, { ReactElement } from 'react';

const Image = React.lazy(() => import('./components/card_regular_image'));
const Title = React.lazy(() => import('./components/card_regular_title'));
const Subtitle = React.lazy(() => import('./components/card_regular_subtitle'));
const Footer = React.lazy(() => import('../hero/components/hero_footer'));
const FooterImg = React.lazy(() => import('./components/card_regular_footer_img'));
const Error = React.lazy(() => import('./components/card_error'));

export const CardRegular = ({ children, className = '' } : { children: ReactElement | ReactElement[], className?: string }) => {
    return(
        <div className={`w-full ${className}`}>
            {children}
        </div>
    )
}

CardRegular.Image = Image;
CardRegular.Title = Title;
CardRegular.Subtitle = Subtitle;
CardRegular.Footer = Footer;
CardRegular.FooterImg = FooterImg;
CardRegular.Error = Error;