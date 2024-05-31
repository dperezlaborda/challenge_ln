import linksDataMock from "../../../mock/links-mock.json";
import { MockLinksType } from "../../types/mock";

export const FooterViewModel = () => {

  const linksMock:MockLinksType[] = linksDataMock;

  const linksLineOne = linksMock.slice(0, 11);
  const magazineLinks = linksMock.find(objeto => Object.prototype.hasOwnProperty.call(objeto, "revistas"));
  const wineClubLinks = linksMock.find(objeto => Object.prototype.hasOwnProperty.call(objeto, "clubDelVino"));
  const shippingLinks = linksMock.find(objeto => Object.prototype.hasOwnProperty.call(objeto, "envios"));

  return {
    linksLineOne,
    magazineLinks,
    wineClubLinks,
    shippingLinks
  }
}
