import React from "react";
import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import styles from "./Routing-Setup.module.css";
import { useAuth } from "../../../contexts/AuthContext";

export function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export function About() {
  return <h1>This is the About Page</h1>;
}

export function Contact() {
  return <p>Contact us at example@email.com</p>;
}

export function Navigation() {
  const { logout, isAuthenticated } = useAuth();
  return (
    <nav className={styles.navWrapper}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {isAuthenticated && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard Area</h2>
      <nav>
        <ul>
          <li>
            <Link to="overview">Overview</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export function Overview() {
  return <p>This is the overview page</p>;
}

export function Settings() {
  return <p>This is your settings</p>;
}

export function Redirector() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/overview");
  }

  return (
    <button onClick={handleClick}>Take me to the Dashboard Overview</button>
  );
}

export function UserProfile() {
  const { username } = useParams();

  return <p>Welcome {username}</p>;
}

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Click to Log In</button>
    </div>
  );
}

export function NotFound() {
  return (
    <p>
      Page not found... Go back <Link to="/">Home</Link>
    </p>
  );
}
