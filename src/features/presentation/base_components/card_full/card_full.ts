import React from 'react';

const Footer = React.lazy(() => import('./components/card_full_footer'));
const Content = React.lazy(() => import('./components/card_full_content'));

export const Card = {
    Content: Content,
    Footer: Footer
}