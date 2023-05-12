import React from "react"
import { ClientData } from "../../../types";

interface ClientInfoProps {
  company: ClientData;
}

export const ClientInfo = ({ company }: ClientInfoProps) => {
  return (
    <div className="client_info">
      <h4>
        Nous desservons Longueuil,{" "}
        <a
          href="https://www.411sante.com/dentiste/monteregie/saint-hubert-2/dentiste-saint-hubert.htm"
          className="city_served"
        >
          Saint-Hubert
        </a>
        ,{" "}
        <a
          href="https://www.411sante.com/dentiste/monteregie/saint-lambert-2/dentiste-saint-lambert.htm"
          className="city_served"
        >
          Saint-Lambert
        </a>
      </h4>
    </div>
  );
};
