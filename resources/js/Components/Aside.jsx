import React, {useEffect, useState} from "react";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/react";
import SchoolMenu from "@/layouts/Menu/SchoolMenu"
import useSubMenu from "@/functions";
import AdminMenu from "@/Layouts/Menu/AdminMenu";

export default function Aside({user}) {
  const {openSubMenus, toggleSubMenu} = useSubMenu();

  const [roleNames, setRoleNames] = useState([]);

  useEffect(() => {
    if (user?.roles) {
      setRoleNames(user.roles.map(role => role.name));
    }
  }, [user]);



  return (
    <>
      {/* Menu */}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand">
          <Link href="/">
            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"/>
          </Link>
          <a
            href="#"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"/>
          </a>
        </div>
        <div className="menu-inner-shadow"/>
        {/* Dashboards */}
        <ul className="menu-inner py-1">

          {roleNames.includes("admin") && <AdminMenu/>}
          {roleNames.includes("school") && <SchoolMenu/>}

        </ul>
      </aside>
      {/* / Menu */}
    </>
  )
}
