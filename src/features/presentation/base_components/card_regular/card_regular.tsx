import React, { ReactElement } from 'react';

const Image = React.lazy(() => import('./components/card_regular_image'));
const Title = React.lazy(() => import('./components/card_regular_title'));
const Subtitle = React.lazy(() => import('./components/card_regular_subtitle'));
const Footer = React.lazy(() => import('../card_full/components/card_full_footer'));

export const CardRegular = ({ children, className } : { children: ReactElement | ReactElement[], className?: string }) => {
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