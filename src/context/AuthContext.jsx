
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("foodieUser")) || null;
    } catch {
      return null;
    }
  });

  const register = (name, email, password) => {
    const users = JSON.parse(
      localStorage.getItem("foodieUsers") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();

    const exists = users.find(
      (u) => u.email === normalizedEmail
    );

    if (exists) {
      return { success: false, message: "Email already registered!" };
    }

    users.push({
      name,
      email: normalizedEmail,
      password,
    });

    localStorage.setItem("foodieUsers", JSON.stringify(users));

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(
      localStorage.getItem("foodieUsers") || "[]"
    );

    const foundUser = users.find(
      (u) =>
        u.email === email.trim().toLowerCase() &&
        u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password!",
      };
    }

    const loggedInUser = {
      name: foundUser.name,
      email: foundUser.email,
    };

    setUser(loggedInUser);
    localStorage.setItem("foodieUser", JSON.stringify(loggedInUser));

    return { success: true };
  };
const logout = () => {
  setUser(null);
  localStorage.removeItem("foodieUser");

  // Clear cart on logout
  localStorage.removeItem("foodieCart");
};

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
