import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Dummy Profile</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <Link
            to="/MainMenu/Postlist"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setSelectedTab("CreatePost");
          }}
        >
          <Link
            to="/MainMenu/createPost"
            className={`nav-link text-white ${
              selectedTab === "CreatePost" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <NavLink
          to="/"
          className="d-flex align-items-center text-white text-decoration-none "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>Log_Out</strong>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
