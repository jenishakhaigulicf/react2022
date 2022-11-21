import React from "react";

const NavBar = ({ filterItem, menuLists }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuLists.map((menuItem) => {
            return (
              // note 9: onClick function direct fuction call
              <>
                <button className="btn-group__item" onClick={() => filterItem(menuItem)}>
                  {menuItem}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
