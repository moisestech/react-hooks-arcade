import * as React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader(props) {
  return (
    <div className="site-header">
      {/* stuff on the left */}

      <div>
        <Link to="/authentication">Home</Link>
        <Link to="/authentication/dashboard">Dashboard</Link>
      </div>

      {/* stuff on the right */}
      <div>
        <button>Login</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
