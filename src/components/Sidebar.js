import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button
        className="btn btn-primary toggle-btn d-flex align-items-center justify-content-center"
        onClick={toggleSidebar}
      >
        <i className="bi bi-list mr-3"></i>
        {isOpen && <span>{isOpen ? 'Close' : 'Open'} Menu</span>}
      </button>
      <ul className="nav flex-column mt-3">
        
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="#widgets">
            <i className="bi bi-grid mr-3"></i>
            {isOpen && <span>Widgets</span>}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="#datatable">
            <i className="bi bi-table mr-3"></i>
            {isOpen && <span>Data Table</span>}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link d-flex align-items-center" href="#form">
            <i className="bi bi-pencil-square mr-3"></i>
            {isOpen && <span>Form</span>}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
