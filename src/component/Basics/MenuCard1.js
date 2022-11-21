import React from 'react'

const MenuCard1 = ({ menuData }) => {
  console.log(menuData);
  const { id, name, category, price, description, image } = menuData;
  return (
    <>
      <section className="main-card--cointainer">
            <>
              <div key={id} className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category} </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {/* note: 3 lorem12 to generate random sentences */}
                      {/* note: 4 spans in comment can also cause error */}
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle"> Order Now </span>
                </div>
              </div>
            </>
      </section>
    </>
  );
};

export default MenuCard1
