import React, {useState} from "react";
import NavLink from "@/Components/NavLink";
export default function Aside() {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  return (
    <div>
      {/* Menu */}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <span className="app-brand-logo demo">
               <img src={'logoawa.png'} className={'logo sized-100px'}/>
            </span>
          </a>
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
                Dashboards
              </div>

            </a>

          </li>
          {/* Layouts */}
          <li className="menu-item">
            <a href={route("test.index")} className={`menu-link menu-toggle ${openSubMenus['clients'] ? 'open' : ''}`}
               onClick={() => toggleSubMenu('clients')}>
              <i className="menu-icon tf-icons bx bx-layout"/>
              <div className="text-truncate" data-i18n="Layouts">
                Clients
              </div>
            </a>
            <NavLink
              href={route("test.index")}
              active={route().current("test.index")}
            >
              Adnan
            </NavLink>
            <ul className={`menu-sub ${openSubMenus['clients'] ? 'open' : ''}`}>
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Without menu">
                    Without menu
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Without navbar">
                    Without navbar
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-fluid.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Fluid">
                    Fluid
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-container.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Container">
                    Container
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Blank">
                    Blank
                  </div>
                </a>
              </li>
            </ul>
          </li>


          {/* Apps & Pages */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Apps &amp; Pages</span>
          </li>
          <li className="menu-item">
            <a
              href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html"
              target="_blank"
              className="menu-link"
            >
              <i className="menu-icon tf-icons bx bx-envelope"/>
              <div className="text-truncate" data-i18n="Email">
                Email
              </div>
              <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                Pro
              </div>
            </a>
          </li>

          {/* Layouts */}
          <li className="menu-item">
            <a href="#" className={`menu-link menu-toggle ${openSubMenus['chat'] ? 'open' : ''}`}
               onClick={() => toggleSubMenu('chat')}>
              <i className="menu-icon tf-icons bx bx-chat"/>
              <div className="text-truncate" data-i18n="Layouts">
                Chat
              </div>
            </a>
            <ul className={`menu-sub ${openSubMenus['chat'] ? 'open' : ''}`}>
              <li className="menu-item">
                <a href="layouts-without-menu.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Without menu">
                    Without menu
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-without-navbar.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Without navbar">
                    Without navbar
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-fluid.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Fluid">
                    Fluid
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-container.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Container">
                    Container
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="layouts-blank.html" className="menu-link">
                  <div className="text-truncate" data-i18n="Blank">
                    Blank
                  </div>
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </aside>
      {/* / Menu */}
    </div>
  )
}
