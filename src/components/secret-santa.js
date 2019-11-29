
import React from "react";
import img1 from "../assets/v4-728px-Do-a-Secret-Santa-Step-1-Version-4.jpg";
import img2 from "../assets/aid18231-v4-728px-Do-a-Secret-Santa-Step-7-Version-3.jpg";

export const SecretSanta = () => (
  <>
    <h1>Under Construction</h1>
    <h3><span className="circle">1</span> Start the game</h3>
    <ul>
      <li>Write the names of everyone participating on a piece of paper</li>
      <li>Cut out and toss the names into a hat.</li>
      <li>Set a price limit. </li>
    </ul>
    <h3><span className="circle">2</span> Buy a gift</h3>
    <ul>
      <li>Set a gift-giving date.</li>
      <li>Purchase a gift. </li>
    </ul>
    <h3><span className="circle">3</span> Exchange gifts</h3>
    <br />
    <div className="row">
      <div className="col-6">
        <img src={img1} className="img-fluid" />
      </div>
      <div className="col-6">
        <img src={img2} className="img-fluid" />
      </div>
    </div>
  </>
);
