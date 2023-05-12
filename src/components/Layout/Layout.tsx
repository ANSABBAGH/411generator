import React from "react";
import * as menuStyles from "./styles.module.css";
import { Footer } from "./Footer";
import classnames from "classnames";
import "../../assets/css";

interface LayoutProps {
  children: React.ReactNode;
}

export default ({ children }: LayoutProps) => {
  console.log(menuStyles);
  return (
    <div>
      <header>
        <div className="logo">
          <a href="https://www.411sante.com/index.php">
            411
            <span className="comptable">
              sante<span className="com">.com</span>
            </span>
          </a>
        </div>
        <div className="selectRegion slate">
          <form name="regionHeader">
            <select id="selectRegionHeader" name="selectRegion">
              <option value="0">Sélectionnez votre région</option>
              <option value="13">Région de Montréal</option>
              <option value="16">Région de Québec</option>
              <option value="1">Abitibi / Témiscamingue</option>
              <option value="2">Bas-Saint-Laurent</option>
              <option value="3">Centre-du-Québec</option>
              <option value="4">Chaudière / Appalaches</option>
              <option value="5">Côte-Nord</option>
              <option value="6">Estrie</option>
              <option value="7">Gaspésie</option>
              <option value="7">Îles-de-la-Madeleine</option>
              <option value="8">Lanaudière</option>
              <option value="9">Laurentides</option>
              <option value="10">Laval</option>
              <option value="11">Mauricie</option>
              <option value="12">Montérégie</option>
              <option value="13">Montréal</option>
              <option value="14">Nord-du-Québec</option>
              <option value="15">Outaouais</option>
              <option value="16">Québec</option>
              <option value="17">Saguenay</option>
              <option value="17">Lac-St-Jean</option>
              <option value="48">Ottawa</option>
              <option value="49">Toronto</option>
            </select>
          </form>
        </div>
      </header>
      <nav id="f-nav" className={classnames(menuStyles["menu_container"], menuStyles["f-nav"])}>
        <div className={classnames(menuStyles["menu_fit"], menuStyles["menu_bg"])}>
          <ul className={menuStyles["nav"]}>
            <li id="home" className={menuStyles["home"]}>
              <a href="https://www.411sante.com/index.php">
                <span></span>
                <img src="https://www.411sante.com/img/ico-accueil.svg" alt="Accueil" />
                Accueil
              </a>
            </li>
            <li id="adh" className={menuStyles["adh"]}>
              <a href="https://www.411sante.com/adhesion_reseau.php">
                <span></span>
                <img src="https://www.411sante.com/img/ico-adhesion.svg" alt="Adhésion au réseau" />
                Adhésion au réseau
              </a>
            </li>
            <li id="contact" className={menuStyles["contact"]}>
              <a href="https://www.411sante.com/contact.php?idClient=545">
                <span></span>
                <img src="https://www.411sante.com/img/ico-contact.svg" alt="Contactez-nous" />
                Contactez-nous
              </a>
            </li>
            <li id="advertisers" className={menuStyles["advertisers"]}>
              <a href="https://www.411sante.com/annonceurs.php">
                <span></span>
                <img src="https://www.411sante.com/img/ico-annonceurs.svg" alt="Annonceurs" />
                Annonceurs
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
};
