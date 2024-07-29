export default function AdminLayout() {
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
              <svg
                width={25}
                viewBox="0 0 25 42"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                    id="path-1"
                  />
                  <path
                    d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                    id="path-3"
                  />
                  <path
                    d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                    id="path-4"
                  />
                  <path
                    d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                    id="path-5"
                  />
                </defs>
                <g
                  id="g-app-brand"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Brand-Logo"
                    transform="translate(-27.000000, -15.000000)"
                  >
                    <g id="Icon" transform="translate(27.000000, 15.000000)">
                      <g id="Mask" transform="translate(0.000000, 8.000000)">
                        <mask id="mask-2" fill="white">
                          <use xlinkHref="#path-1" />
                        </mask>
                        <use fill="#696cff" xlinkHref="#path-1" />
                        <g id="Path-3" mask="url(#mask-2)">
                          <use fill="#696cff" xlinkHref="#path-3" />
                          <use
                            fillOpacity="0.2"
                            fill="#FFFFFF"
                            xlinkHref="#path-3"
                          />
                        </g>
                        <g id="Path-4" mask="url(#mask-2)">
                          <use fill="#696cff" xlinkHref="#path-4" />
                          <use
                            fillOpacity="0.2"
                            fill="#FFFFFF"
                            xlinkHref="#path-4"
                          />
                        </g>
                      </g>
                      <g
                        id="Triangle"
                        transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                      >
                        <use fill="#696cff" xlinkHref="#path-5" />
                        <use
                          fillOpacity="0.2"
                          fill="#FFFFFF"
                          xlinkHref="#path-5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
                  <span className="app-brand-text demo menu-text fw-bold ms-2">
              sneat
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
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-home-smile" />
                    <div className="text-truncate" data-i18n="Dashboards">
                      Dashboards
                    </div>
                    <span className="badge rounded-pill bg-danger ms-auto">5</span>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item active">
                      <a href="index.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-smile" />
                        <div className="text-truncate" data-i18n="Analytics">
                          Analytics
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">

                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/dashboards-crm.html"
                        target="_blank"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="CRM">
                          <i className="menu-icon tf-icons bx bx-home-smile" />
                          CRM
                        </div>
                        <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                          <i className="menu-icon tf-icons bx bx-home-smile" />
                          Pro
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">

                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-ecommerce-dashboard.html"
                        target="_blank"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="eCommerce">
                          <i className="menu-icon tf-icons bx bx-home-smile" />
                          eCommerce
                        </div>
                        <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                          Pro
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-logistics-dashboard.html"
                        target="_blank"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Logistics">
                          <i className="menu-icon tf-icons bx bx-home-smile" />
                          Logistics
                        </div>
                        <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                          Pro
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-academy-dashboard.html"
                        target="_blank"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Academy">
                          <i className="menu-icon tf-icons bx bx-home-smile" />
                          Academy
                        </div>
                        <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                          Pro
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Layouts */}
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-layout" />
                    <div className="text-truncate" data-i18n="Layouts">
                      Layouts
                    </div>
                  </a>
                  <ul className="menu-sub">
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

                {/* Front Pages */}
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-store" />
                    <div className="text-truncate" data-i18n="Front Pages">
                      Front Pages
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/landing-page.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Landing">
                          Landing
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/pricing-page.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Pricing">
                          Pricing
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/payment-page.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Payment">
                          Payment
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/checkout-page.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Checkout">
                          Checkout
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/front-pages/help-center-landing.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Help Center">
                          Help Center
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
                <li className="menu-item">
                  <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-chat.html"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-chat" />
                    <div className="text-truncate" data-i18n="Chat">
                      Chat
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-calendar.html"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-calendar" />
                    <div className="text-truncate" data-i18n="Calendar">
                      Calendar
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-kanban.html"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-grid" />
                    <div className="text-truncate" data-i18n="Kanban">
                      Kanban
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                </li>
                {/* Pages */}
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-dock-top" />
                    <div className="text-truncate" data-i18n="Account Settings">
                      Account Settings
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="pages-account-settings-account.html"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Account">
                          Account
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="pages-account-settings-notifications.html"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Notifications">
                          Notifications
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="pages-account-settings-connections.html"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Connections">
                          Connections
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-lock-open-alt" />
                    <div className="text-truncate" data-i18n="Authentications">
                      Authentications
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="auth-login-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Basic">
                          Login
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-register-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Basic">
                          Register
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="auth-forgot-password-basic.html"
                        className="menu-link"
                        target="_blank"
                      >
                        <div className="text-truncate" data-i18n="Basic">
                          Forgot Password
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-cube-alt" />
                    <div className="text-truncate" data-i18n="Misc">
                      Misc
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="pages-misc-error.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Error">
                          Error
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="pages-misc-under-maintenance.html"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Under Maintenance">
                          Under Maintenance
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Components */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Components</span>
                </li>
                {/* Cards */}
                <li className="menu-item">
                  <a href="cards-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-collection" />
                    <div className="text-truncate" data-i18n="Basic">
                      Cards
                    </div>
                  </a>
                </li>
                {/* User interface */}
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-box" />
                    <div className="text-truncate" data-i18n="User interface">
                      User interface
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="ui-accordion.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Accordion">
                          Accordion
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-alerts.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Alerts">
                          Alerts
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-badges.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Badges">
                          Badges
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-buttons.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Buttons">
                          Buttons
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-carousel.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Carousel">
                          Carousel
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-collapse.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Collapse">
                          Collapse
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-dropdowns.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Dropdowns">
                          Dropdowns
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-footer.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Footer">
                          Footer
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-list-groups.html" className="menu-link">
                        <div className="text-truncate" data-i18n="List Groups">
                          List groups
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-modals.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Modals">
                          Modals
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-navbar.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Navbar">
                          Navbar
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-offcanvas.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Offcanvas">
                          Offcanvas
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                        <div
                          className="text-truncate"
                          data-i18n="Pagination & Breadcrumbs"
                        >
                          Pagination &amp; Breadcrumbs
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-progress.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Progress">
                          Progress
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-spinners.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Spinners">
                          Spinners
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-tabs-pills.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Tabs & Pills">
                          Tabs &amp; Pills
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-toasts.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Toasts">
                          Toasts
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-tooltips-popovers.html" className="menu-link">
                        <div
                          className="text-truncate"
                          data-i18n="Tooltips & Popovers"
                        >
                          Tooltips &amp; Popovers
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-typography.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Typography">
                          Typography
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Extended components */}
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-copy" />
                    <div className="text-truncate" data-i18n="Extended UI">
                      Extended UI
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="extended-ui-perfect-scrollbar.html"
                        className="menu-link"
                      >
                        <div className="text-truncate" data-i18n="Perfect Scrollbar">
                          Perfect Scrollbar
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="extended-ui-text-divider.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Text Divider">
                          Text Divider
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="icons-boxicons.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-crown" />
                    <div className="text-truncate" data-i18n="Boxicons">
                      Boxicons
                    </div>
                  </a>
                </li>
                {/* Forms & Tables */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Forms &amp; Tables</span>
                </li>
                {/* Forms */}
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-detail" />
                    <div className="text-truncate" data-i18n="Form Elements">
                      Form Elements
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="forms-basic-inputs.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Basic Inputs">
                          Basic Inputs
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="forms-input-groups.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Input groups">
                          Input groups
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-detail" />
                    <div className="text-truncate" data-i18n="Form Layouts">
                      Form Layouts
                    </div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="form-layouts-vertical.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Vertical Form">
                          Vertical Form
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="form-layouts-horizontal.html" className="menu-link">
                        <div className="text-truncate" data-i18n="Horizontal Form">
                          Horizontal Form
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Form Validation */}
                <li className="menu-item">
                  <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/form-validation.html"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-list-check" />
                    <div className="text-truncate" data-i18n="Form Validation">
                      Form Validation
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                </li>
                {/* Tables */}
                <li className="menu-item">
                  <a href="tables-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-table" />
                    <div className="text-truncate" data-i18n="Tables">
                      Tables
                    </div>
                  </a>
                </li>
                {/* Data Tables */}
                <li className="menu-item">
                  <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/tables-datatables-basic.html"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-grid" />
                    <div className="text-truncate" data-i18n="Datatables">
                      Datatables
                    </div>
                    <div className="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto">
                      Pro
                    </div>
                  </a>
                </li>
                {/* Misc */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Misc</span>
                </li>
                <li className="menu-item">
                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-support" />
                    <div className="text-truncate" data-i18n="Support">
                      Support
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-file" />
                    <div className="text-truncate" data-i18n="Documentation">
                      Documentation
                    </div>
                  </a>
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
                    <li className="nav-item lh-1 me-4">
                      <a
                        className="github-button"
                        href="https://github.com/themeselection/sneat-html-admin-template-free"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                      >
                        Star
                      </a>
                    </li>
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
                  <div className="row">
                    <div className="col-xxl-8 mb-6 order-0">
                      <div className="card">
                        <div className="d-flex align-items-start row">
                          <div className="col-sm-7">
                            <div className="card-body">
                              <h5 className="card-title text-primary mb-3">
                                Congratulations John! 🎉
                              </h5>
                              <p className="mb-6">
                                You have done 72% more sales today.
                                <br />
                                Check your new badge in your profile.
                              </p>
                              <a
                                href="#"
                                className="btn btn-sm btn-outline-primary"
                              >
                                View Badges
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-5 text-center text-sm-left">
                            <div className="card-body pb-0 px-0 px-md-6">
                              <img
                                src="../assets/img/illustrations/man-with-laptop.png"
                                height={175}
                                className="scaleX-n1-rtl"
                                alt="View Badge User"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 order-1">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-6 mb-6">
                          <div className="card h-100">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/chart-success.png"
                                    alt="chart success"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded text-muted" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt3"
                                  >
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      View More
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-1">Profit</p>
                              <h4 className="card-title mb-3">$12,628</h4>
                              <small className="text-success fw-medium">
                                <i className="bx bx-up-arrow-alt" /> +72.80%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-6 mb-6">
                          <div className="card h-100">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="wallet info"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded text-muted" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      View More
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-1">Sales</p>
                              <h4 className="card-title mb-3">$4,679</h4>
                              <small className="text-success fw-medium">
                                <i className="bx bx-up-arrow-alt" /> +28.42%
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Total Revenue */}
                    <div className="col-12 col-xxl-8 order-2 order-md-3 order-xxl-2 mb-6">
                      <div className="card">
                        <div className="row row-bordered g-0">
                          <div className="col-lg-8">
                            <div className="card-header d-flex align-items-center justify-content-between">
                              <div className="card-title mb-0">
                                <h5 className="m-0 me-2">Total Revenue</h5>
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="totalRevenue"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded bx-lg text-muted" />
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="totalRevenue"
                                >
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Select All
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Refresh
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                  >
                                    Share
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div id="totalRevenueChart" className="px-3" />
                          </div>
                          <div className="col-lg-4 d-flex align-items-center">
                            <div className="card-body px-xl-9">
                              <div className="text-center mb-6">
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                  ></button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                              <span className="visually-hidden">
                                Toggle Dropdown
                              </span>
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                      >
                                        2021
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                      >
                                        2020
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                      >
                                        2019
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div id="growthChart" />
                              <div className="text-center fw-medium my-6">
                                62% Company Growth
                              </div>
                              <div className="d-flex gap-3 justify-content-between">
                                <div className="d-flex">
                                  <div className="avatar me-2">
                              <span className="avatar-initial rounded-2 bg-label-primary">
                                <i className="bx bx-dollar bx-lg text-primary" />
                              </span>
                                  </div>
                                  <div className="d-flex flex-column">
                                    <small></small>
                                    <h6 className="mb-0">$32.5k</h6>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <div className="avatar me-2">
                              <span className="avatar-initial rounded-2 bg-label-info">
                                <i className="bx bx-wallet bx-lg text-info" />
                              </span>
                                  </div>
                                  <div className="d-flex flex-column">
                                    <small></small>
                                    <h6 className="mb-0">$41.2k</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ Total Revenue */}
                    <div className="col-12 col-md-8 col-lg-12 col-xxl-4 order-3 order-md-2">
                      <div className="row">
                        <div className="col-6 mb-6">
                          <div className="card h-100">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/paypal.png"
                                    alt="paypal"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt4"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded text-muted" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt4"
                                  >
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      View More
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-1">Payments</p>
                              <h4 className="card-title mb-3">$2,456</h4>
                              <small className="text-danger fw-medium">
                                <i className="bx bx-down-arrow-alt" /> -14.82%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 mb-6">
                          <div className="card h-100">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between mb-4">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/cc-primary.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt1"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded text-muted" />
                                  </button>
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="cardOpt1"
                                  >
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      View More
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-1">Transactions</p>
                              <h4 className="card-title mb-3">$14,857</h4>
                              <small className="text-success fw-medium">
                                <i className="bx bx-up-arrow-alt" /> +28.14%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-6">
                          <div className="card">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-center flex-sm-row flex-column gap-10">
                                <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                  <div className="card-title mb-6">
                                    <h5 className="text-nowrap mb-1">
                                      Profile Report
                                    </h5>
                                    <span className="badge bg-label-warning">
                                YEAR 2022
                              </span>
                                  </div>
                                  <div className="mt-sm-auto">
                              <span className="text-success text-nowrap fw-medium">
                                <i className="bx bx-up-arrow-alt" /> 68.2%
                              </span>
                                    <h4 className="mb-0">$84,686k</h4>
                                  </div>
                                </div>
                                <div id="profileReportChart" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* Order Statistics */}
                    <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-6">
                      <div className="card h-100">
                        <div className="card-header d-flex justify-content-between">
                          <div className="card-title mb-0">
                            <h5 className="mb-1 me-2">Order Statistics</h5>
                            <p className="card-subtitle">42.82k Total Sales</p>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn text-muted p-0"
                              type="button"
                              id="orederStatistics"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded bx-lg" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="orederStatistics"
                            >
                              <a className="dropdown-item" href="#">
                                Select All
                              </a>
                              <a className="dropdown-item" href="#">
                                Refresh
                              </a>
                              <a className="dropdown-item" href="#">
                                Share
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div className="d-flex flex-column align-items-center gap-1">
                              <h3 className="mb-1">8,258</h3>
                              <small>Total Orders</small>
                            </div>
                            <div id="orderStatisticsChart" />
                          </div>
                          <ul className="p-0 m-0">
                            <li className="d-flex align-items-center mb-5">
                              <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-primary">
                            <i className="bx bx-mobile-alt" />
                          </span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Electronic</h6>
                                  <small>Mobile, Earbuds, TV</small>
                                </div>
                                <div className="user-progress">
                                  <h6 className="mb-0">82.5k</h6>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-5">
                              <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-success">
                            <i className="bx bx-closet" />
                          </span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Fashion</h6>
                                  <small>T-shirt, Jeans, Shoes</small>
                                </div>
                                <div className="user-progress">
                                  <h6 className="mb-0">23.8k</h6>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-5">
                              <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-info">
                            <i className="bx bx-home-alt" />
                          </span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Decor</h6>
                                  <small>Fine Art, Dining</small>
                                </div>
                                <div className="user-progress">
                                  <h6 className="mb-0">849k</h6>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center">
                              <div className="avatar flex-shrink-0 me-3">
                          <span className="avatar-initial rounded bg-label-secondary">
                            <i className="bx bx-football" />
                          </span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Sports</h6>
                                  <small>Football, Cricket Kit</small>
                                </div>
                                <div className="user-progress">
                                  <h6 className="mb-0">99</h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*/ Order Statistics */}
                    {/* Expense Overview */}
                    <div className="col-md-6 col-lg-4 order-1 mb-6">
                      <div className="card h-100">
                        <div className="card-header nav-align-top">
                          <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                              <button
                                type="button"
                                className="nav-link active"
                                role="tab"
                                data-bs-toggle="tab"
                                data-bs-target="#navs-tabs-line-card-income"
                                aria-controls="navs-tabs-line-card-income"
                                aria-selected="true"
                              >
                                Income
                              </button>
                            </li>
                            <li className="nav-item">
                              <button type="button" className="nav-link" role="tab">
                                Expenses
                              </button>
                            </li>
                            <li className="nav-item">
                              <button type="button" className="nav-link" role="tab">
                                Profit
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="tab-content p-0">
                            <div
                              className="tab-pane fade show active"
                              id="navs-tabs-line-card-income"
                              role="tabpanel"
                            >
                              <div className="d-flex mb-6">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img
                                    src="../assets/img/icons/unicons/wallet.png"
                                    alt="User"
                                  />
                                </div>
                                <div>
                                  <p className="mb-0">Total Balance</p>
                                  <div className="d-flex align-items-center">
                                    <h6 className="mb-0 me-1">$459.10</h6>
                                    <small className="text-success fw-medium">
                                      <i className="bx bx-chevron-up bx-lg" />
                                      42.9%
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div id="incomeChart" />
                              <div className="d-flex align-items-center justify-content-center mt-6 gap-3">
                                <div className="flex-shrink-0">
                                  <div id="expensesOfWeek" />
                                </div>
                                <div>
                                  <h6 className="mb-0">Income this week</h6>
                                  <small>$39k less than last week</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ Expense Overview */}
                    {/* Transactions */}
                    <div className="col-md-6 col-lg-4 order-2 mb-6">
                      <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <h5 className="card-title m-0 me-2">Transactions</h5>
                          <div className="dropdown">
                            <button
                              className="btn text-muted p-0"
                              type="button"
                              id="transactionID"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded bx-lg" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="transactionID"
                            >
                              <a className="dropdown-item" href="#">
                                Last 28 Days
                              </a>
                              <a className="dropdown-item" href="#">
                                Last Month
                              </a>
                              <a className="dropdown-item" href="#">
                                Last Year
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-4">
                          <ul className="p-0 m-0">
                            <li className="d-flex align-items-center mb-6">
                              <div className="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/paypal.png"
                                  alt="User"
                                  className="rounded"
                                />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="d-block">Paypal</small>
                                  <h6 className="fw-normal mb-0">Send money</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-2">
                                  <h6 className="fw-normal mb-0">+82.6</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <div className="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/wallet.png"
                                  alt="User"
                                  className="rounded"
                                />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="d-block">Wallet</small>
                                  <h6 className="fw-normal mb-0">Mac'D</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-2">
                                  <h6 className="fw-normal mb-0">+270.69</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <div className="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/chart.png"
                                  alt="User"
                                  className="rounded"
                                />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="d-block">Transfer</small>
                                  <h6 className="fw-normal mb-0">Refund</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-2">
                                  <h6 className="fw-normal mb-0">+637.91</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <div className="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/cc-primary.png"
                                  alt="User"
                                  className="rounded"
                                />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="d-block">Credit Card</small>
                                  <h6 className="fw-normal mb-0">Ordered Food</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-2">
                                  <h6 className="fw-normal mb-0">-838.71</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <div className="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/wallet.png"
                                  alt="User"
                                  className="rounded"
                                />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="d-block">Wallet</small>
                                  <h6 className="fw-normal mb-0">Starbucks</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-2">
                                  <h6 className="fw-normal mb-0">+203.33</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex align-items-center">
                              <div className="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/cc-warning.png"
                                  alt="User"
                                  className="rounded"
                                />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="d-block">Mastercard</small>
                                  <h6 className="fw-normal mb-0">Ordered Food</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-2">
                                  <h6 className="fw-normal mb-0">-92.45</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*/ Transactions */}
                  </div>
                </div>
                {/* / Content */}
                {/* Footer */}
                <footer className="content-footer footer bg-footer-theme">
                  <div className="container-xxl">
                    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                      <div className="text-body">
                        © , made with ❤️ by
                        <a
                          href="https://themeselection.com"
                          target="_blank"
                          className="footer-link"
                        >
                          ThemeSelection
                        </a>
                      </div>
                      <div className="d-none d-lg-inline-block">
                        <a
                          href="https://themeselection.com/license/"
                          className="footer-link me-4"
                          target="_blank"
                        >
                          License
                        </a>
                        <a
                          href="https://themeselection.com/"
                          target="_blank"
                          className="footer-link me-4"
                        >
                          More Themes
                        </a>
                        <a
                          href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                          target="_blank"
                          className="footer-link me-4"
                        >
                          Documentation
                        </a>
                        <a
                          href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                          target="_blank"
                          className="footer-link"
                        >
                          Support
                        </a>
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
