import { useState } from 'react';

const useSubMenu = () => {
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

export default useSubMenu;



