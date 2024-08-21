import {useState} from 'react';

export const useSubMenu = () => {
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return {
    openSubMenus,
    toggleSubMenu,
  };
};

export const getOptions = (field) => {
  switch (field) {
    case "status":
      return ["Active", "Block"];
    case "gender":
      return ["Male", "Female", "Other"];
    default:
      return [];
  }
};

export const isActive = (routeParam) => {
  const currentRoute = route().current();
  return  routeParam.includes(currentRoute);
}


export const ucfirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
