import imageLancha from '../../../assets/cards-image/lancha.jpeg';
import imageJetSki from '../../../assets/cards-image/jetski.jpeg';
import imageQuadriciculo from '../../../assets/cards-image/quadriciculo.jpeg';
import imageUtv from '../../../assets/cards-image/utv.jpeg';

export const cardText = [
  {
    id: 'lancha',
    title: "Lancha",
    link: "veiculos/lancha",
    description:
      "Mais que transporte, a lancha é luxo, liberdade e momentos inesquecíveis navegando em alto-mar.",
      backgroundImg: imageLancha
  },
  {
    id: 'jet-ski',
    title: "Moto aquática",
    link: "veiculos/moto-aquatica",
    description:
      "O jet ski é adrenalina pura: velocidade, emoção e liberdade em cada curva sobre as ondas.",
      backgroundImg: imageJetSki
  },
  {
    id: 'utv',
    title: "UTV",
    link: "veiculos/utv",
    description:
      "O UTV é potência sem limites: aventura, segurança e conforto para explorar qualquer terreno extremo.",
      backgroundImg: imageUtv
  },
  {
    id: 'quadriciclo',
    title: "Quadriciclo",
    link: "veiculos/quadriciculo",
    description:
      "O quadriciclo é liberdade total: ágil, resistente e pronto para transformar qualquer trilha em diversão.",
    backgroundImg: imageQuadriciculo
  },
];
