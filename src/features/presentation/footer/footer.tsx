import { Divider } from "./components/divider";
import { FooterViewModel } from "./footer_view_model";
import { Links } from "./components/links";
import { Redes } from "./components/redes";
import { Logo } from "./components/logo";
import { Legales } from "./components/legales";
import { Stores } from "./components/stores";

export const Footer = () => {

  const { linksLineOne, magazineLinks, wineClubLinks, shippingLinks } = FooterViewModel();

  return (
    <footer className="mt-12 mb-8 grid place-items-center gap-y-8 lg:px-53px lg:place-items-start">
      {/* footer desktop start */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:items-center lg:w-full">
        <Redes hidden={false}/>
        <Logo hidden={false} />
        <Stores hidden={false} />
      </div>
      <Divider hidden={false} />
      <div className="hidden lg:flex">
        <Links 
          linksLineOne={linksLineOne}
          magazineLinks={magazineLinks?.revistas}
          wineClubLinks={wineClubLinks?.clubDelVino}
          shippingLinks={shippingLinks?.envios}
        />
      </div>
      <Divider hidden={false} />
      <div className="hidden lg:flex lg:w-full lg:justify-between">
        <ul className="flex gap-x-6">
          <li className="text-sm text-blue-ln arial-typo">Mapa del sitio</li>
          <li className="text-sm text-blue-ln arial-typo">Ayuda</li>
          <li className="text-sm text-blue-ln arial-typo">Términos y Condiciones</li>
          <li className="text-sm text-blue-ln arial-typo">¿Cómo anunciar?</li>
          <li className="text-sm text-blue-ln arial-typo">Suscribirse al diario impreso</li>
        </ul>
        <div className="flex gap-x-4">
          <p className="text-sm arial-typo button-text">Protegido por re CAPTCHA:</p>
          <p className="text-sm arial-typo text-blue-ln">Condiciones</p>
          <p className="text-sm arial-typo text-blue-ln">Privacidad</p>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-between	lg:w-full lg:flex-row-reverse">
        <Legales hidden={false}/>
      </div>
      {/* footer desktop stop */}

      {/* footer mobile start */}
      <Logo hidden={true}/>
      <Divider hidden={true} />
      <Redes hidden={true}/>
      <Stores hidden={true} />
      <Legales hidden={true} />
      {/* footer mobile stop */}
    </footer>
  );
};
