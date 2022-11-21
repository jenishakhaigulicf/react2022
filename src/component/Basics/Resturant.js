// note 8: mapping in the parent component and then sending data cannot be done?

// import React,{ useState } from 'react';
// import "./style.css"; 
// import Menu from "./menuApi";
// import MenuCard from './MenuCard';
// import MenuCard1 from './MenuCard1';

// export const Resturant = () => {
//   // note: 1 hooks must be at the top hierarchy
//   const [menuDatas, setMenuData] = useState(Menu);
//   // const myStyle = {color: 'blue'};
//   let _menuData = [];
//   return (
//     <>
//       {/* note: 7 map right here */}
//       {
//         menuDatas.map((menuData) => {
//          console.log(menuData);
//         })
//       }
//       <MenuCard1 menuDatas={_menuData} />
//       {/* <MenuCard menuDatas={menuDatas} /> */}
//     </>
//   );

// }

import React,{ useState } from 'react';
import "./style.css"; 
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueDatas = [...new Set (
  Menu.map((menuDatas)=>{
    return menuDatas.category
  })
), 'ALL']
// console.log(uniqueDatas);

export const Resturant = () => {

  // note: 1 hooks must be at the top hierarchy
  const [menuDatas, setMenuData] = useState(Menu);
  const [menuLists, setMenuLists] = useState(uniqueDatas);

  const filterItem = (category) => {
    if (category ===  "ALL") return setMenuData(Menu)
    const updatedList = Menu.filter((menuData) => {
      return menuData.category === category;
    })
    setMenuData(updatedList);
  }

  // const myStyle = {color: 'blue'};
  return (
    <>
      <NavBar filterItem={filterItem} menuLists={menuLists} />
      <MenuCard menuDatas={menuDatas} />
    </>
  );

}

