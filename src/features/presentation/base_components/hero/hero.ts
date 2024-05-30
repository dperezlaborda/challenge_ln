import React from 'react';

const Footer = React.lazy(() => import('./components/hero_footer'));
const Content = React.lazy(() => import('./components/hero_content'));

export const Hero = {
    Content: Content,
    Footer: Footer
}