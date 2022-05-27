import React from "react";
import Styles from "../components/restaurent.module.css";

const Restaurent = (props) => {
  return (
    <div key={props.restaurent.id} className={Styles.box}>
      <div className={Styles.boxleft}>
        <img src={props.restaurent.image} alt="images" />
      </div>
      <div className={Styles.boxmid}>
        <h3>{props.restaurent.name}</h3>
        <p>{props.restaurent.category}</p>
        <p>Cost {(props.restaurent.costForTwo)/2} for one</p>
        <div className={Styles.delivery}>
            <p>Min {(props.restaurent.costForTwo)/2}</p>
            <p>.Up to 30 min</p>
        </div>
        <p>Accepts all types payment</p>
      </div>
      <div className={Styles.boxright}>
          <div>
              <p>{props.restaurent.rating}</p>
              <p>{props.restaurent.total_votes}votes</p>
              <p>{props.restaurent.review}reviews</p>
              </div>
      </div>
    </div>
  );
};

export default Restaurent;
