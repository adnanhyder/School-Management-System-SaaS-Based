import NavLink from "@/Components/NavLink";
import React from "react";

import useSubMenu from "@/functions";
import SchoolMenu from "@/Layouts/Menu/SchoolMenu";

export default function AdminMenu() {
  const {openSubMenus, toggleSubMenu} = useSubMenu();
  return (
    <>
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
      <li className="menu-header small text-uppercase">
        <span className="menu-header-text">Management</span>
      </li>
      <li className="menu-item">
        <a href="#" className={`menu-link menu-toggle ${openSubMenus['users'] ? 'open' : ''}`}
           onClick={() => toggleSubMenu('users')}>
          <i className="menu-icon tf-icons bx bx-user"/>
          <div className="text-truncate" data-i18n="Layouts">
            Users
          </div>
        </a>
        <ul className={`menu-sub ${openSubMenus['users'] ? 'open' : ''}`}>
          <li className="menu-item">
            <NavLink
              href={route("user.index")}
              active={route().current("user.index")}
              className={'menu-link text-truncate'}
            >
              All Users
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="menu-item">
        <a href="#" className={`menu-link menu-toggle ${openSubMenus['role'] ? 'open' : ''}`}
           onClick={() => toggleSubMenu('role')}>
          <i className="menu-icon tf-icons bx bx-sync"/>
          <div className="text-truncate" data-i18n="Layouts">
            Roles
          </div>
        </a>
        <ul className={`menu-sub ${openSubMenus['role'] ? 'open' : ''}`}>
          <li className="menu-item">
            <NavLink
              href={route("role.index")}
              active={route().current("role.index")}
              className={'menu-link text-truncate'}
            >
              All Roles
            </NavLink>
          </li>
        </ul>
      </li>
      {/*<li className="menu-item">*/}
      {/*  <a href="#" className={`menu-link menu-toggle ${openSubMenus['project'] ? 'open' : ''}`}*/}
      {/*     onClick={() => toggleSubMenu('project')}>*/}
      {/*    <i className="menu-icon tf-icons bx bxl-product-hunt"/>*/}
      {/*    <div className="text-truncate" data-i18n="Layouts">*/}
      {/*      Projects*/}
      {/*    </div>*/}
      {/*  </a>*/}
      {/*  <ul className={`menu-sub ${openSubMenus['project'] ? 'open' : ''}`}>*/}
      {/*    <li className="menu-item">*/}
      {/*      <NavLink*/}
      {/*        href={route("project.index")}*/}
      {/*        active={route().current("project.index")}*/}
      {/*        className={'menu-link text-truncate'}*/}
      {/*      >*/}
      {/*        All Projects*/}
      {/*      </NavLink>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</li>*/}
      {/*<li className="menu-item">*/}
      {/*  <a href="#" className={`menu-link menu-toggle ${openSubMenus['clients'] ? 'open' : ''}`}*/}
      {/*     onClick={() => toggleSubMenu('clients')}>*/}
      {/*    <i className="menu-icon tf-icons bx bxs-user-account"/>*/}
      {/*    <div className="text-truncate" data-i18n="Layouts">*/}
      {/*      Clients*/}
      {/*    </div>*/}
      {/*  </a>*/}
      {/*</li>*/}
      {/*<li className="menu-item">*/}
      {/*  <a href="#" className={`menu-link menu-toggle ${openSubMenus['tasks'] ? 'open' : ''}`}*/}
      {/*     onClick={() => toggleSubMenu('tasks')}>*/}
      {/*    <i className="menu-icon tf-icons bx bx-task"/>*/}
      {/*    <div className="text-truncate" data-i18n="Layouts">*/}
      {/*      Tasks*/}
      {/*    </div>*/}
      {/*  </a>*/}
      {/*  <ul className={`menu-sub ${openSubMenus['tasks'] ? 'open' : ''}`}>*/}
      {/*    <li className="menu-item">*/}
      {/*      <NavLink*/}
      {/*        href={route("task.index")}*/}
      {/*        active={route().current("task.index")}*/}
      {/*        className={'menu-link text-truncate'}*/}
      {/*      >*/}
      {/*        All Task*/}
      {/*      </NavLink>*/}
      {/*    </li>*/}
      {/*    <li className="menu-item">*/}
      {/*      <NavLink*/}
      {/*        href={route("task.myTasks")}*/}
      {/*        active={route().current("task.myTasks")}*/}
      {/*        className={'menu-link text-truncate'}*/}
      {/*      >*/}
      {/*        My Tasks*/}
      {/*      </NavLink>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</li>*/}
      <li className="menu-item">
        <a href="#" className={`menu-link menu-toggle ${openSubMenus['school'] ? 'open' : ''}`}
           onClick={() => toggleSubMenu('school')}>
          <i className="menu-icon tf-icons bx bxs-graduation"/>
          <div className="text-truncate" data-i18n="Layouts">
            School
          </div>
        </a>
        <ul className={`menu-sub ${openSubMenus['school'] ? 'open' : ''}`}>
          <li className="menu-item">
            <NavLink
              href={route("school.index")}
              active={route().current("school.index")}
              className={'menu-link text-truncate'}
            >
              All Schools
            </NavLink>
          </li>
        </ul>
      </li>




    </>
  );
}
