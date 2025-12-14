import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function Cours() {
  return (
    <>
<main>
  {/* =======================
Content START */}
  <section className="pt-sm-7">
    <div className="container pt-3 pt-xl-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-4 col-xl-3">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-lg offcanvas-start h-100" tabIndex={-1} id="offcanvasSidebar">
            {/* Offcanvas header */}
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            {/* Offcanvas body */}
            <div className="offcanvas-body p-0">
              <div className="card border p-3 w-100">
                {/* Card header */}
                <div className="card-header text-center border-bottom">
                  {/* Avatar */}
                  <div className="avatar avatar-xl position-relative mb-2">
                    <img className="avatar-img rounded-circle border border-2 border-white" src="/assets/images/slouma.jpg"  />
                 
                  </div>
                  <h6 className="mb-0">Ghodbeny Abdessalem</h6>
                  <a  className="text-reset text-primary-hover small">Abdessalem.Ghodbani@esprit.tn</a>
                </div>
                {/* Card body START */}
                <div className="card-body p-0 mt-4">
                  {/* Sidebar menu item START */}
                  <ul className="nav nav-pills-primary-border-start flex-column">
                   <li className="nav-item">
  <NavLink
    to="/UpWeb/decouvrir"
    
  >
    <i className="bi bi-lightbulb fa-fw me-2" />
    Introduction
  </NavLink>
</li>
 <li className="nav-item">
  <NavLink
    to="/UpWeb/decouvrir/react-compiler"
    className={({ isActive }) =>
      isActive ? "nav-link active" : ""
    }
  >
    <i className="bi bi-lightbulb fa-fw me-2" />
     TS + React Compiler
  </NavLink>


</li>
                 <li className="nav-item">
  <NavLink
    to="/UpWeb/decouvrir/react-router-framework"
    className={({ isActive }) =>
      isActive ? "nav-link active" : ""
    }
  >
    <i className="bi bi-lightbulb fa-fw me-2" />
     TS +React Router v7
  </NavLink>
</li>


<li className="nav-item">
  <NavLink
    to="/UpWeb/decouvrir/react-router-framework"
    className={({ isActive }) =>
      isActive ? "nav-link active" : ""
    }
  >
    <i className="bi bi-lightbulb fa-fw me-2" />
     Architecture react-7R  
  </NavLink>
</li>
                    
                  </ul>
                  {/* Sidebar menu item END */}
                </div>
                {/* Card body END */}
              </div>
            </div>
          </div>		
        </div>
        {/* Main content */}
          <div className="col-lg-8 col-xl-9 ps-lg-4 ps-xl-6">
            <Outlet />
          </div>
      </div>
    </div>
  </section>
  {/* =======================
Content END */}
</main>

    
    
    
    
    
    
    
    </>
  )
}

export default Cours