import React, {useState} from "react";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/react";
export default function Aside() {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  return (
    <>
      {/* Menu */}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand" >
          <Link href="/">
            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
          </Link>
          <a
            href="#"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"/>
          </a>
        </div>
        <div className="menu-inner-shadow"/>
        <ul className="menu-inner py-1">
          {/* Dashboards */}
          <li className="menu-item active open">
            <a href="#" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-smile"/>
              <div className="text-truncate" data-i18n="Dashboards">
                Dashboard
              </div>

            </a>

          </li>

          {/* Users Management */}
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

          <li className="menu-item">
            <a href="#" className={`menu-link menu-toggle ${openSubMenus['project'] ? 'open' : ''}`}
               onClick={() => toggleSubMenu('project')}>
              <i className="menu-icon tf-icons bx bxl-product-hunt"/>
              <div className="text-truncate" data-i18n="Layouts">
                Projects
              </div>
            </a>
            <ul className={`menu-sub ${openSubMenus['project'] ? 'open' : ''}`}>
              <li className="menu-item">
                <NavLink
                  href={route("project.index")}
                  active={route().current("project.index")}
                  className={'menu-link text-truncate'}
                >
                  All Projects
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className={`menu-link menu-toggle ${openSubMenus['clients'] ? 'open' : ''}`}
               onClick={() => toggleSubMenu('clients')}>
              <i className="menu-icon tf-icons bx bxs-user-account"/>
              <div className="text-truncate" data-i18n="Layouts">
                Clients
              </div>
            </a>
          </li>

          <li className="menu-item">
            <a href="#" className={`menu-link menu-toggle ${openSubMenus['tasks'] ? 'open' : ''}`}
               onClick={() => toggleSubMenu('tasks')}>
              <i className="menu-icon tf-icons bx bx-task"/>
              <div className="text-truncate" data-i18n="Layouts">
                Tasks
              </div>
            </a>
            <ul className={`menu-sub ${openSubMenus['tasks'] ? 'open' : ''}`}>
              <li className="menu-item">
                <NavLink
                  href={route("task.index")}
                  active={route().current("task.index")}
                  className={'menu-link text-truncate'}
                >
                  All Task
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  href={route("task.myTasks")}
                  active={route().current("task.myTasks")}
                  className={'menu-link text-truncate'}
                >
                  My Tasks
                </NavLink>
              </li>
            </ul>
          </li>

        </ul>
      </aside>
      {/* / Menu */}
    </>
  )
}
