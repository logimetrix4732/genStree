import React from "react";

const ServiceThreeCard = ({ cardData, space }) => {
  return (
    <div
      className={`counter-area-4 overflow-hidden ${space ? "space-bottom" : ""}`}
    >
      <div className="container th-container5">
        <div className="counter-card4-wrap">
          {cardData.map((card, index) => (
            <React.Fragment key={index}>
              <div className="counter-card4">
                <div className="counter-card4_icon">
                  <img src={card.icon} alt={card.title} loading="lazy" />
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">{card.number}</span>
                  </h3>
                  <h6 className="counter-title">{card.title}</h6>
                  <p className="counter-text mb-0">{card.description}</p>
                </div>
              </div>
              {index < cardData.length - 1 && <div className="divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceThreeCard;
