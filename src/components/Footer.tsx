import React from "react";

export const Footer = () => {
  const rdpqLinks = [
    {
      "link": "https://www.rdpq.ca/",
      "text": " www.rdpq.ca"
    },
    {
      "link": "http://411lunettes.com/",
      "text": " www.411lunettes.com"
    },
    {
      "link": "http://411meubles.com/",
      "text": " www.411meubles.com"
    },
    {
      "link": "http://411ordinateur.com/",
      "text": " www.411ordinateur.com"
    },
    {
      "link": "http://411plombier.com/",
      "text": " www.411plombier.com"
    },
    {
      "link": "http://411electricien.com/",
      "text": " www.411electricien.com"
    },
    {
      "link": "http://411garage.com/",
      "text": " www.411garage.com"
    },
    {
      "link": "http://411demenageur.com/",
      "text": " www.411demenageur.com"
    },
    {
      "link": "http://www.reseaucomptable.com/",
      "text": " www.reseaucomptable.com"
    },
    {
      "link": "http://411habitation.com/",
      "text": " www.411habitation.com"
    },
    {
      "link": "http://www.reseauavocats.com/",
      "text": " www.reseauavocats.com"
    },
    {
      "link": "http://www.hpabc.ca/",
      "text": " www.hpabc.ca"
    },
    {
      "link": "http://www.exaweb.ca/",
      "text": " www.exaweb.ca"
    },
    {
      "link": "http://www.collectionarianne.ca/",
      "text": " www.collectionarianne.ca"
    },
    {
      "link": "https://www.411sante.com/sante/montreal/default.php",
      "text": " Dentistes à Montréal"
    },
    {
      "link": "https://www.411sante.com/sante/laval/default.php",
      "text": " Dentistes à Laval"
    },
    {
      "link": "https://www.411sante.com/sante/monteregie/default.php",
      "text": " Dentistes Rive-Sud"
    },
    {
      "link": "https://www.411sante.com/sante/lanaudiere/default.php",
      "text": " Dentistes à Lanaudière"
    },
    {
      "link": "https://www.411sante.com/sante/laurentides/default.php",
      "text": " Dentistes Laurentides"
    },
    {
      "link": "https://www.411sante.com/sante/quebec/default.php",
      "text": " Dentistes à Québec"
    },
    {
      "link": "https://www.411sante.com/sante/montreal/default.php",
      "text": " Acupuncteurs à Montréal"
    },
    {
      "link": "https://www.411sante.com/sante/laval/default.php",
      "text": " Acupuncteurs à Laval"
    },
    {
      "link": "https://www.411sante.com/sante/monteregie/default.php",
      "text": " Acupuncteurs Rive-Sud"
    },
    {
      "link": "https://www.411sante.com/sante/lanaudiere/default.php",
      "text": " Acupuncteurs à Lanaudière"
    },
    {
      "link": "https://www.411sante.com/sante/laurentides/default.php",
      "text": " Acupuncteurs Laurentides"
    },
    {
      "link": "https://www.411sante.com/sante/quebec/default.php",
      "text": " Acupuncteurs à Québec"
    },
    {
      "link": "https://www.411sante.com/sante/montreal/default.php",
      "text": " Chiropraticiens à Montréal"
    },
    {
      "link": "https://www.411sante.com/sante/laval/default.php",
      "text": " Chiropraticiens à Laval"
    },
    {
      "link": "https://www.411sante.com/sante/monteregie/default.php",
      "text": " Chiropraticiens Rive-Sud"
    },
    {
      "link": "https://www.411sante.com/sante/lanaudiere/default.php",
      "text": " Chiropraticiens à Lanaudière"
    },
    {
      "link": "https://www.411sante.com/sante/laurentides/default.php",
      "text": " Chiropraticiens Laurentides"
    },
    {
      "link": "https://www.411sante.com/sante/quebec/default.php",
      "text": " Chiropraticiens à Québec"
    },
    {
      "link": "https://www.411sante.com/sante/montreal/default.php",
      "text": " Psychologues à Montréal"
    },
    {
      "link": "https://www.411sante.com/sante/laval/default.php",
      "text": " Psychologues à Laval"
    },
    {
      "link": "https://www.411sante.com/sante/monteregie/default.php",
      "text": " Psychologues Rive-Sud"
    },
    {
      "link": "https://www.411sante.com/sante/lanaudiere/default.php",
      "text": " Psychologues à Lanaudière"
    },
    {
      "link": "https://www.411sante.com/sante/laurentides/default.php",
      "text": " Psychologues Laurentides"
    },
    {
      "link": "https://www.411sante.com/sante/quebec/default.php",
      "text": " Psychologues à Québec"
    },
    {
      "link": "https://www.411sante.com/sante/montreal/default.php",
      "text": " Lunetteries à Montréal"
    },
    {
      "link": "https://www.411sante.com/sante/laval/default.php",
      "text": " Lunetteries à Laval"
    },
    {
      "link": "https://www.411sante.com/sante/monteregie/default.php",
      "text": " Lunetteries Rive-Sud"
    },
    {
      "link": "https://www.411sante.com/sante/lanaudiere/default.php",
      "text": " Lunetteries à Lanaudière"
    },
    {
      "link": "https://www.411sante.com/sante/laurentides/default.php",
      "text": " Lunetteries Laurentides"
    },
    {
      "link": "https://www.411sante.com/sante/quebec/default.php",
      "text": " Lunetteries à Québec"
    },
    {
      "link": "https://www.411sante.com/sante/montreal/default.php",
      "text": " Denturologistes à Montréal"
    },
    {
      "link": "https://www.411sante.com/sante/laval/default.php",
      "text": " Denturologistes à Laval"
    },
    {
      "link": "https://www.411sante.com/sante/monteregie/default.php",
      "text": " Denturologistes Rive-Sud"
    },
    {
      "link": "https://www.411sante.com/sante/lanaudiere/default.php",
      "text": " Denturologistes à Lanaudière"
    },
    {
      "link": "https://www.411sante.com/sante/laurentides/default.php",
      "text": " Denturologistes Laurentides"
    },
    {
      "link": "https://www.411sante.com/sante/quebec/default.php",
      "text": " Denturologistes à Québec"
    }
  ];
  return (
    <>
      <div className="links">
        <div className="mwidth">
          {rdpqLinks.map((link, index) => (
            <>
              -{" "}
              <a href={link.link} className="footer_link" key={index}>
                {link.text}
              </a>
            </>
          ))}
        </div>
        <div className="mwidth">
          <div className="google_logos">
            <img src="https://www.411sante.com/img/google-pro.jpg" alt="Google pour les pros" />
            <img src="https://www.411sante.com/img/digital-active.jpg" alt="Digital Active" />
          </div>
        </div>
      </div>
      <footer>
        <p>
          <span>
            © 2023 &nbsp;-&nbsp; TOUS&nbsp;DROITS&nbsp;RÉSERVÉS. 411Santé &nbsp;-&nbsp;
            2160&nbsp;DE&nbsp;LA&nbsp;MONTAGNE&nbsp;SUITE&nbsp;740&nbsp;MONTREAL&nbsp;QUEBEC&nbsp;H3G&nbsp;2T3
            Tél.&nbsp;:&nbsp;(514)&nbsp;673‑2806
          </span>
        </p>
      </footer>
    </>
  );
};
