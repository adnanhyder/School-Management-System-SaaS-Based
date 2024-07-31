import Aside from "@/Components/Aside";

export default function AdminLayout() {
  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Aside/>
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
                  <i className="bx bx-menu bx-md"/>
                </a>
              </div>
              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                {/* Search */}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item d-flex align-items-center">
                    <i className="bx bx-search bx-md"/>
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
                        <div className="dropdown-divider my-1"/>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-user bx-md me-3"/>
                          <span>My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          <i className="bx bx-cog bx-md me-3"/>
                          <span>Settings</span>{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 bx bx-credit-card bx-md me-3"/>
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
                        <div className="dropdown-divider my-1"/>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-power-off bx-md me-3"/>
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
                  <div
                    className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                    <div className="text-body">

                    </div>
                    <div className="d-none d-lg-inline-block">

                    </div>
                  </div>
                </div>
              </footer>
              {/* / Footer */}
              <div className="content-backdrop fade"/>
            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle"/>
      </div>
      {/* / Layout wrapper */}
    </>
  )
}

