import React, { useState } from "react";
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
