import React from "react";
import { ClientData } from "../../types";
import { ClientInfo } from "./Content/ClientInfo"
import { Schedule } from "./Content/Schedule"

interface ContentProps {
  company: ClientData;
}

export const Content = ({ company }: ContentProps) => {
  const address = `${company["# batiment"]} ${company["rue"]} ${company["cartier"]} ${company["ville"]}, <br /> ${company["province"]} ${company["code postal"]}`;

  return (
    <>
      <div>
        <div className="pclient">
          <div className="box" style={{ border: "none" }}>
            <a className="top_anchor"> </a> <a className="client_anchor"> </a>
            <div className="boxtitre">
              <h1 className="font2_black gris_f">{company["nom de l´entreprise"]}</h1>
            </div>
            <div className="add font2_black">
              <p dangerouslySetInnerHTML={{ __html: address }}></p>
            </div>
            <div className="right">
              <div>
                <a className="client_anchor"> </a>
                <ClientInfo company={company} />
                <Schedule company={company} />
                <div className="payment_type font_blackita">
                  <h3>Paiements acceptés :</h3>
                  <h4>Comptant, Interac, Visa, MasterCard</h4>
                  <img
                    id="interac"
                    src="https://www.411sante.com/images/logos/interac.gif"
                    alt=""
                  />
                  <img id="visa" src="https://www.411sante.com/images/logos/visa.gif" alt="" />
                  <img id="mc" src="https://www.411sante.com/images/logos/mc.gif" alt="" />
                </div>
                <div className="client_logo">
                  <h5>Nous sommes membres des ordres et associations suivantes:</h5>
                  <ul>
                    <li>
                      <img
                        src="https://www.411sante.com/images/logos/ordre-dentiste-quebec.jpg"
                        alt="ordre dentiste quebec"
                      />
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
