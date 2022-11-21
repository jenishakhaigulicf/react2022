// <section className='main-card--container'>
// 	<div className='card-container'>
// 		<div className="card">
// 			<div className="card-body">
// 				<span className='card-number card-circle subtle'> 1 </span>
// 				{/* <span className='card-author subtle' style={{color: 'red'}}> */}
// 				{/* <span className='card-author subtle' style={myStyle}> */}
// 				<span className='card-author subtle'> BreakFast </span>
// 				<h2 className='card-title'> Bread and Butter </h2>
// 				<span className='card-description subtle'>
// 					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sit!
// 					Lorem, ipsum dolor.
// 					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis deserunt.
// 				</span>
// 				<div className="card-read">Read</div>
// 			</div>
// 			<img src="" alt="images" className='card-media' />
// 			<span className='card-tag subtle'> Order Now </span>
// 		</div>
// 	</div>
// </section>
import React from "react";

const MenuCard = ({ menuDatas }) => {
  // console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuDatas.map((menuData) => {
          const { id, name, category, price, description, image } = menuData;
          return (
            <>
              <div key={id} className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category} </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {/* note: 3 lorem12 to generate random sentences */}
                      {/* note: 4 spans in comment wasnot causing error also cause error */}
                      {/* <span className='card-author subtle' style={{color: 'red'}}> */}
                      {/* <span className='card-author subtle' style={myStyle}> */}
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle"> Order Now </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
