import React, {useState} from "react";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/react";
import SchoolMenu from "@/layouts/Menu/SchoolMenu"
import useSubMenu from "@/functions";
import AdminMenu from "@/Layouts/Menu/AdminMenu";

export default function Aside({user}) {
  const {openSubMenus, toggleSubMenu} = useSubMenu();
  const roleNames = user?.roles.map(role => role.name);


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
          <li className="menu-item active open">
            <NavLink
              href={route("dashboard.admin")}
              active={route().current("dashboard.admin")}
              className={'menu-link text-truncate'}
            >
              <i className="menu-icon tf-icons bx bx-home-smile"/>
              Dashboard
            </NavLink>


          </li>
          {/* Users Management */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Management</span>
          </li>
          {roleNames.includes("admin") && (
            <AdminMenu/>
          )}
          {roleNames.includes("school") && (
            <SchoolMenu/>
          )}

        </ul>
      </aside>
      {/* / Menu */}
    </>
  )
}
