import React, { useState } from "react";
import Btn from "../components/Btn";
import { AboutUs, HoneyCombs } from "../includes";
import Services from "../includes/Main/Services";

function Main() {
    return (
      <div>
        <HoneyCombs />
        <AboutUs/>
        <Services />
      </div>
    );
}

export default Main;
