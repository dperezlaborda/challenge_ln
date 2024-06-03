import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Apertura } from "../presentation/apertura/apertura"
import { Body } from "../presentation/body/body"
import { Footer } from "../presentation/footer/footer"

export const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of our site." />
          <meta name="keywords" content="home, site, example" />
        </Helmet>
      </HelmetProvider>
      <Apertura />
      <Body />
      <Footer />
    </div>
  )
}