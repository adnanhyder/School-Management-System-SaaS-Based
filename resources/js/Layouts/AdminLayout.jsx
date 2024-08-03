import Aside from "@/Components/Aside";
import Navbar from "@/Components/Navbar";
import AdminFooter from "@/Components/AdminFooter";

export default function AdminLayout({user, header, children}) {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Layout wrapper */}

          <Aside user={user} />
          {/* Layout container */}
          <div className="layout-page">

            <Navbar
              user={user}
            />
            {/* Content wrapper */}
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                {header && (
                  <header className="">
                    <div className="">
                      {header}
                    </div>
                  </header>
                )}
                <main>{children}</main>
              </div>

              {/* Admin Footer */}
              <AdminFooter/>
              {/* / Footer */}

            </div>
            {/* Content wrapper */}
          </div>
          {/* / Layout page */}
        </div>
      {/*  /Layout wrapper */}
      </div>
    </>
  )
}

