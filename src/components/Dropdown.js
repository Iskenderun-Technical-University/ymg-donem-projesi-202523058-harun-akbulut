import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <div className="container">
    <div className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`} style={{padding:0,alignItems: "flex-start"}}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </div>
    </div>
  );
};

export default Dropdown;
