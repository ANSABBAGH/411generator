import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default ({ children }: LayoutProps) => {
  return (
    <div>
      <nav id="f-nav" className="menu_container">
        <div className="menu_fit menu_bg">
          {" "}
          <a className="toggleMenu" href="javascript:;" style={{ display: "none" }}>
            <span>&nbsp;</span>
          </a>
          <ul className="nav">
            <li id="accueil">
              {" "}
              <a href="https://www.411sante.com/index.php">
                <span></span>
                <img src="https://www.411sante.com/img/ico-accueil.svg" alt="Accueil" />
                Accueil
              </a>
            </li>
            <li id="adh">
              {" "}
              <a href="https://www.411sante.com/adhesion_reseau.php">
                <span></span>
                <img src="https://www.411sante.com/img/ico-adhesion.svg" alt="Adhésion au réseau" />
                Adhésion au réseau
              </a>
            </li>
            <li id="contact">
              <a href="https://www.411sante.com/contact.php?idClient=545">
                <span></span>
                <img src="https://www.411sante.com/img/ico-contact.svg" alt="Contactez-nous" />
                Contactez-nous
              </a>
            </li>
            <li id="annonceurs">
              <a href="https://www.411sante.com/annonceurs.php">
                <span></span>
                <img src="https://www.411sante.com/img/ico-annonceurs.svg" alt="Annonceurs" />
                Annonceurs
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};
