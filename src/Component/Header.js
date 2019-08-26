import React from "react";

const Header = () => {
  const date = new Date();
  const hour = date.getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return (
    <>
      <header className="header">
        <h1>To Do App</h1>
        <h3 style={{ color: "Orange" }}>{greeting}</h3>
      </header>
    </>
  );
};
export default Header;
