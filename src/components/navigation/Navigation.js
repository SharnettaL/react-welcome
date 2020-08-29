import React from "react";
import { Link } from "react-router-dom";
function Navigation(props) {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Jeopardy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
