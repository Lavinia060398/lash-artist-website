export type PortfolioPhoto = {
  src: string;
  alt: string;
  /** Wide photos span two columns (770×376 in the design). */
  wide?: boolean;
};

/**
 * Portfolio grid in design order (rows of 1170px: wide + narrow or three narrow).
 */
export const portfolio: PortfolioPhoto[] = [
  { src: "/images/portfolio/01.jpg", alt: "Extensii de gene volum pe ochi verde, efect curbat" },
  { src: "/images/portfolio/02.jpg", alt: "Extensii de gene văzute de sus, cu patch sub ochi", wide: true },
  { src: "/images/portfolio/03.jpg", alt: "Extensii de gene cu volum pe ochi căprui, privire frontală" },
  { src: "/images/portfolio/04.jpg", alt: "Extensii de gene dense și curbate pe ochi verde" },
  { src: "/images/portfolio/05.jpg", alt: "Extensii de gene volum pe ochi verde, profil" },
  { src: "/images/portfolio/06.jpg", alt: "Extensii de gene volum, ochi închis, cu patch sub ochi", wide: true },
  { src: "/images/portfolio/07.jpg", alt: "Extensii de gene cu efect cat eye pe ochi verde" },
  { src: "/images/portfolio/08.jpg", alt: "Extensii de gene natural volume pe ochi căprui" },
  { src: "/images/portfolio/09.jpg", alt: "Extensii de gene pe ochi verde, efect deschis" },
  { src: "/images/portfolio/10.jpg", alt: "Extensii de gene văzute din lateral, în timpul procedurii" },
  { src: "/images/portfolio/11.jpg", alt: "Extensii de gene mega volume pe ochi verde" },
  { src: "/images/portfolio/12.jpg", alt: "Privire cu extensii de gene naturale, ambii ochi", wide: true },
  { src: "/images/portfolio/13.jpg", alt: "Clientă cu extensii de gene volum, portret" },
  { src: "/images/portfolio/14.jpg", alt: "Clientă cu extensii de gene naturale, portret" },
  { src: "/images/portfolio/15.jpg", alt: "Clientă cu extensii de gene soft volume, portret" },
  { src: "/images/portfolio/16.jpg", alt: "Extensii de gene volum pe ochi verde, prim-plan", wide: true },
  { src: "/images/portfolio/17.jpg", alt: "Extensii de gene wispy pe ochi căprui" },
  { src: "/images/portfolio/18.jpg", alt: "Clientă cu extensii de gene și mască, după procedură" },
  { src: "/images/portfolio/19.jpg", alt: "Clientă cu extensii de gene și sprâncene stilizate" },
  { src: "/images/portfolio/20.jpg", alt: "Clientă zâmbind, cu extensii de gene volum" },
  { src: "/images/portfolio/21.jpg", alt: "Extensii de gene mega volume pe ochi verde, de aproape" },
  { src: "/images/portfolio/22.jpg", alt: "Extensii de gene volum, ochi închis, prim-plan", wide: true },
];
