import React from "react";

const Layout: React.FC = (props) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
