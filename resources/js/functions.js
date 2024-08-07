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
  const isTrue = routeParam.includes(currentRoute);
  console.log(isTrue)
  return isTrue;
}
