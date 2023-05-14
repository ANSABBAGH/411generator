import React from "react";
import { ClientData } from "../../../types";
import * as styles from "./styles.module.css";

interface ScheduleProps {
  company: ClientData;
}

export const Schedule = ({ company }: ScheduleProps) => {

  const companyDayMapper = {
    "HLundi": "Lundi",
    "HMardi": "Mardi",
    "HMercredi": "Mercredi",
    "HJeudi": "Jeudi",
    "HVendredi": "Vendredi",
    "HSamedi": "Samedi",
    "HDimanche": "Dimanche"
  };

  return (
    <div className={styles.schedule}>
      <h2>Heures d'ouverture</h2>
      <ul>
        {Object.entries(companyDayMapper).map(([key, value]) => {
          return (
            <li>
              <p>
                {value} <span>{company[key as keyof typeof companyDayMapper] || "Fermé"}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <p className="spacer"></p>
    </div>
  );
};
