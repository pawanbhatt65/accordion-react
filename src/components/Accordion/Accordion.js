import React, { Fragment, useState } from "react";
import AccordionData from "../AccordionData/AccordionData";

const Accordion = () => {
  const data = [
    {
      id: "d1",
      title: "Open the tab 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae nostrum voluptatibus consequuntur aut excepturi autem, libero necessitatibus porro deleniti ea amet, molestias ab iste officiis suscipit minima, maiores totam quos ipsum omnis sit natus sapiente magni! Eius, magnam perferendis. Aperiam, maxime fugit neque minima beatae impedit dolorum obcaecati aspernatur.",
    },
    {
      id: "d2",
      title: "Open the tab 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae nostrum voluptatibus consequuntur aut excepturi autem, libero necessitatibus porro deleniti ea amet, molestias ab iste officiis suscipit minima, maiores totam quos ipsum omnis sit natus sapiente magni! Eius, magnam perferendis. Aperiam, maxime fugit neque minima beatae impedit dolorum obcaecati aspernatur.",
    },
    {
      id: "d3",
      title: "Open the tab 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae nostrum voluptatibus consequuntur aut excepturi autem, libero necessitatibus porro deleniti ea amet, molestias ab iste officiis suscipit minima, maiores totam quos ipsum omnis sit natus sapiente magni! Eius, magnam perferendis. Aperiam, maxime fugit neque minima beatae impedit dolorum obcaecati aspernatur.",
    },
    {
      id: "d4",
      title: "Open the tab 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae nostrum voluptatibus consequuntur aut excepturi autem, libero necessitatibus porro deleniti ea amet, molestias ab iste officiis suscipit minima, maiores totam quos ipsum omnis sit natus sapiente magni! Eius, magnam perferendis. Aperiam, maxime fugit neque minima beatae impedit dolorum obcaecati aspernatur.",
    },
  ];

  const [openItemId, setOpenItemId] = useState(data[0].id);

  const toggleAccordion = (itemId) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <Fragment>
      <div className="container">
        <AccordionData data={data} openItemId={openItemId} toggleAccordion={toggleAccordion} />
      </div>
    </Fragment>
  );
};

export default Accordion;
