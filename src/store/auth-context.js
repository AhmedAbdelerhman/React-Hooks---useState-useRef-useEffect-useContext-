import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedInStoredValue = localStorage.getItem("isLogIn");

  function loginHandler(email, password) {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogIn", "1");
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLogIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedInStoredValue === "1") setIsLoggedIn(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {" "}
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        {" "}
        {props.children}{" "}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContext;
