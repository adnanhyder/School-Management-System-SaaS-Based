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
      <li className="menu-header small text-uppercase">
        <span className="menu-header-text">Management</span>
      </li>
      <li className="menu-item">
        <a href="#"
           className={`menu-link menu-toggle ${isActive(menuLink.student) ? 'open' : ''} ${openSubMenus['student.index'] ? 'open' : ''}`}
           onClick={() => toggleSubMenu('student.index')}>
          <i className="menu-icon tf-icons bx bx-user"/>
          <div className="text-truncate" data-i18n="Layouts">
            Students
          </div>
        </a>

        <ul
          className={`menu-sub ${isActive(menuLink.student) ? 'open' : ''} ${openSubMenus['student.index'] ? 'open' : ''}`}>
          <li className="menu-item">
            <NavLink
              href={route("student.index")}
              active={route().current("student.index")}
              className={'menu-link text-truncate'}
            >
              Admission
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              href={route("student.create")}
              active={route().current("student.create")}
              className={'menu-link text-truncate'}
            >
              Create Student
            </NavLink>
          </li>
        </ul>
      </li>

    </>
  );
}
