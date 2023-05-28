import React, { Fragment } from "react";

const AccordionData = ({ data, openItemId, toggleAccordion }) => {
  return (
    <Fragment>
      {data.map((dataItem) => {
        const isOpen = openItemId === dataItem.id;

        return (
          <div className="box" key={dataItem.id}>
            <h3 className={`${!isOpen?"plus": ""} title`} onClick={() => toggleAccordion(dataItem.id)}>
              {dataItem.title}
            </h3>
            <div className={`box-item ${isOpen ? "show" : ""}`}>
              <p>{dataItem.text}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default AccordionData;
