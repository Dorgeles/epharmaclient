import React from "react";
import "./RecuCard.css";
import { RecuListTile } from "../..";
import { listRecu } from "./recu-listTile/data";

const RecuCard = () => {
  var rows = [],
    i = 0,
    len = 4;
  while (++i <= len) rows.push(listRecu[i]);
  console.log(rows);
  return (
    <div className="recuContainer">
      {rows.map((recu) => (
        <RecuListTile
          key={recu.id}
          nomClient={recu.nomClient}
          timestamp={recu.timeStamp}
          total={recu.total}
        />
      ))}
        <br />
        <div className="voir-plus">
            <h4>Voir tous les reçus</h4>
        </div>
      
    </div>
  );
};

export default RecuCard;
