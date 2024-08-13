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
        <NavLink
          href={route("student.create")}
          active={route().current("student.create")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Assign Class
        </NavLink>
      </li>

      <li className="menu-item">
        <a href="#"
           className={`menu-link menu-toggle ${isActive(menuLink.student , menuLink.class) ? 'open' : ''} ${openSubMenus['student.index'] ? 'open' : ''}`}
           onClick={() => toggleSubMenu('student.index')}>
          <i className="menu-icon tf-icons bx bx-user"/>
          <div className="text-truncate" data-i18n="Layouts">
            Academics
          </div>
        </a>

        <ul
          className={`menu-sub ${isActive(menuLink.student) ? 'open' : ''} ${openSubMenus['student.index'] ? 'open' : ''}`}>
          <li className="menu-item">
            <NavLink
              href={route("student.create")}
              active={route().current("student.create")}
              className={'menu-link text-truncate'}
            >
              <i className="menu-icon tf-icons bx bx-home-smile"/>
              Dummy
            </NavLink>
          </li>
        </ul>
      </li>


    </>
  );
}
