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
      <li className="menu-header small text-uppercase">
        <span className="menu-header-text">administration</span>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("sessions.index")}
          active={route().current("sessions.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Sessions
        </NavLink>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("class.index")}
          active={route().current("class.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Class
        </NavLink>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("student.index")}
          active={route().current("student.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Students
        </NavLink>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("teacher.index")}
          active={route().current("teacher.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Teachers
        </NavLink>
      </li>
      <li className="menu-header small text-uppercase">
        <span className="menu-header-text">Attendance</span>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("attendance.index")}
          active={route().current("attendance.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Student Attendance
        </NavLink>
      </li>


      <li className="menu-header small text-uppercase">
        <span className="menu-header-text">Inventory</span>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("category.index")}
          active={route().current("category.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Item Categories
        </NavLink>
      </li>
        <li className="menu-item child-menu">
          <NavLink
            href={route("item.index")}
            active={route().current("item.index")}
            className={'menu-link text-truncate'}
          >
            <i className="menu-icon tf-icons bx bx-home-smile"/>
            Items
          </NavLink>
        </li>
        <li className="menu-item child-menu">
          <NavLink
            href={route("gatepass.index")}
            active={route().current("gatepass.index")}
            className={'menu-link text-truncate'}
          >
            <i className="menu-icon tf-icons bx bx-home-smile"/>
            Gate Pass
          </NavLink>
        </li>

      <li className="menu-header small text-uppercase">
        <span className="menu-header-text">Fee</span>
      </li>
      <li className="menu-item child-menu">
        <NavLink
          href={route("feeCategory.index")}
          active={route().current("feeCategory.index")}
          className={'menu-link text-truncate'}
        >
          <i className="menu-icon tf-icons bx bx-home-smile"/>
          Fee Category
        </NavLink>
      </li>
        <li className="menu-item child-menu">
          <NavLink
            href={route("fee.index")}
            active={route().current("fee.index")}
            className={'menu-link text-truncate'}
          >
            <i className="menu-icon tf-icons bx bx-home-smile"/>
            Fee
          </NavLink>
        </li>


      </>
      );
      }
