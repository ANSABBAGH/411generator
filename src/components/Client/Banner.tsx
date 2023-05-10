import React from "react";

interface BannerProps {
  imgUrl: string;
}

export const Banner = ({ imgUrl }: BannerProps) => {
  return (
    <>
      <div className="autofitimg" id="autofitting2">
        <img src={imgUrl} alt="Massothérapie Clinique Les 4 Mains" />
      </div>
      <div className="rpcq font2_reg">
        <h1>RÉSEAU DES PROFESSIONNELS DE LA SANTÉ DU QUÉBEC (RPSQ) - Thérapeutes et autres</h1>
      </div>
    </>
  );
};
