import React from "react";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  
  return (
    <div className="Calendly">
      <PopupWidget
        url="https://calendly.com/collindapper"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("mainContent")}
        text="Let's Connect! Click here."
        textColor="#007ea7"
        color="#121212"
      />
    </div>
  );
};

export default Calendly;