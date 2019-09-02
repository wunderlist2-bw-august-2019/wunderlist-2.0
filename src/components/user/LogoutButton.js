import React from "react";
import { Button } from "semantic-ui-react";

function LogoutButton({ logout }) {
  return <Button onClick={logout}>Logout</Button>;
}

export default LogoutButton;
