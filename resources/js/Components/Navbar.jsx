import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Navbar({user}){
  return(
    <>
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
                    src="/assets/img/avatars/1.png"
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
                            src="/assets/img/avatars/1.png"
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">{user.name}</h6>
                        {user?.roles && (
                          <small className="text-muted">
                            <ul>
                              {user.roles.map((role, index) => (
                                <li key={index}>{role.name}</li>
                              ))}
                            </ul>
                          </small>
                        )}
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-1"/>
                </li>
                <ResponsiveNavLink href={route("profile.edit")}>
                  <i className="bx bx-user bx-md me-3"/>
                  Profile
                </ResponsiveNavLink>
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
                <ResponsiveNavLink
                  method="post"
                  href={route("logout")}
                  as="button"
                >
                  <i className="bx bx-power-off bx-md me-3"/>
                  Log Out
                </ResponsiveNavLink>
              </ul>
            </li>
            {/*/ User */}
          </ul>
        </div>
      </nav>
    </>
  );
}
