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


export const ucfirst = (value) => {
  if (typeof value === 'string' && value.trim() !== '') {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
};
