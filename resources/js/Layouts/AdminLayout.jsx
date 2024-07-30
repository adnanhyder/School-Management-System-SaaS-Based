import React, { useState } from 'react';
export default function AdminLayout() {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return(
      <>
        {/* Layout wrapper */}
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* Menu */}
            <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme"
            >
              <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
            <span className="app-brand-logo demo">
               <img src={'logoawa.png'} className={'logo sized-100px'} />
            </span>
                </a>
                <a
                  href="#"
                  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                >
                  <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center" />
                </a>
              </div>
              <div className="menu-inner-shadow" />
              <ul className="menu-inner py-1">
                {/* Dashboards */}
                <li className="menu-item active open">
                  <a href="#" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-smile" />
                    <div className="text-truncate" data-i18n="Dashboards">
                      Dashboards
                    </div>

                  </a>

                </li>
                {/* Layouts */}
                <li className="menu-item" >
                  <a href="#" className={`menu-link menu-toggle ${openSubMenus['clients'] ? 'open' : ''}`} onClick={() => toggleSubMenu('clients')}>
                    <i className="menu-icon tf-icons bx bx-layout" />
                    <div className="text-truncate" data-i18n="Layouts" >
                      Clients
                    </div>
                  </a>
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
                    <i className="menu-icon tf-icons bx bx-envelope" />
                    <div className="text-truncate" data-i18n="Email">
                      Email
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                </li>

                {/* Layouts */}
                <li className="menu-item" >
                  <a href="#" className={`menu-link menu-toggle ${openSubMenus['chat'] ? 'open' : ''}`} onClick={() => toggleSubMenu('chat')}>
                    <i className="menu-icon tf-icons bx bx-chat" />
                    <div className="text-truncate" data-i18n="Layouts" >
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
            {/* Layout container */}
            <div className="layout-page">
              {/* Navbar */}

              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
                  <a
                    className="nav-item nav-link px-0 me-xl-6"
                    href="#"
                  >
                    <i className="bx bx-menu bx-md" />
                  </a>
                </div>
                <div
                  className="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
                >
                  {/* Search */}
                  <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                      <i className="bx bx-search bx-md" />
                      <input
                        type="text"
                        className="form-control border-0 shadow-none ps-1 ps-sm-2"
                        placeholder="Search..."
                        aria-label="Search..."
                      />
                    </div>
                  </div>
                  {/* /Search */}
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* Place this tag where you want the button to render. */}

                    {/* User */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a
                        className="nav-link dropdown-toggle hide-arrow p-0"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <div className="avatar avatar-online">
                          <img
                            src="../assets/img/avatars/1.png"
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img
                                    src="../assets/img/avatars/1.png"
                                    alt=""
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-0">John Doe</h6>
                                <small className="text-muted">Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider my-1" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-user bx-md me-3" />
                            <span>My Profile</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bx bx-cog bx-md me-3" />
                            <span>Settings</span>{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 bx bx-credit-card bx-md me-3" />
                        <span className="flex-grow-1 align-middle">
                          Billing Plan
                        </span>
                        <span className="flex-shrink-0 badge rounded-pill bg-danger">
                          4
                        </span>
                      </span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider my-1" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-power-off bx-md me-3" />
                            <span>Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*/ User */}
                  </ul>
                </div>
              </nav>

              {/* / Navbar */}
              {/* Content wrapper */}
              <div className="content-wrapper">
                {/* Content */}
                <div className="container-xxl flex-grow-1 container-p-y">

                </div>
                {/* / Content */}
                {/* Footer */}
                <footer className="content-footer footer bg-footer-theme">
                  <div className="container-xxl">
                    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                      <div className="text-body">

                      </div>
                      <div className="d-none d-lg-inline-block">

                      </div>
                    </div>
                  </div>
                </footer>
                {/* / Footer */}
                <div className="content-backdrop fade" />
              </div>
              {/* Content wrapper */}
            </div>
            {/* / Layout page */}
          </div>
          {/* Overlay */}
          <div className="layout-overlay layout-menu-toggle" />
        </div>
        {/* / Layout wrapper */}

      </>
  )
}

