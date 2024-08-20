import NavLink from "@/Components/NavLink";
import React from "react";


import {useSubMenu, isActive} from "@/functions";

export default function SchoolMenu() {
  const {openSubMenus, toggleSubMenu} = useSubMenu();
  const menuLink = {
    student: [
      'student',
      'student.index',
      'student.create',
      'student.edit'
    ],
    class: [
      'class',
      'class.index',
      'class.create',
      'class.edit'
    ]
  }
  return (
    <>
      <li className="menu-item active open">
        <NavLink
          href={route("dashboard.school")}
          active={route().current("dashboard.school")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Dashboard
        </NavLink>


      </li>
      <li className="menu-item">
        <NavLink
          href={route("sessions.index")}
          active={route().current("sessions.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Sessions
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink
          href={route("student.index")}
          active={route().current("student.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Students
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink
          href={route("teacher.index")}
          active={route().current("teacher.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Teachers
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink
          href={route("class.index")}
          active={route().current("class.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Class
        </NavLink>
      </li>



      <li className="menu-item">
        <a href="#"
           className={`menu-link menu-toggle ${isActive('category') ? 'open' : ''} ${openSubMenus['category.index'] ? 'open' : ''}`}
           onClick={() => toggleSubMenu('category.index')}>
          <i className="menu-icon tf-icons bx bx-user"/>
          <div className="text-truncate" data-i18n="Layouts">
            Inventory
          </div>
        </a>

        <ul
          className={`menu-sub ${isActive('category') ? 'open' : ''} ${openSubMenus['category.index'] ? 'open' : ''}`}>
          <li className="menu-item">
            <NavLink
              href={route("category.index")}
              active={route().current("category.index")}
              className={'menu-link text-truncate'}
            >
              <i className="menu-icon tf-icons bx bx-home-smile"/>
              Category
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              href={route("item.index")}
              active={route().current("item.index")}
              className={'menu-link text-truncate'}
            >
              <i className="menu-icon tf-icons bx bx-home-smile"/>
              Items
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              href={route("gatepass.index")}
              active={route().current("gatepass.index")}
              className={'menu-link text-truncate'}
            >
              <i className="menu-icon tf-icons bx bx-home-smile"/>
              Gatepass
            </NavLink>
          </li>
        </ul>
      </li>


    </>
  );
}
