## Basic login with token storage.
```js
// AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (username, password) => {
    const res = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      localStorage.setItem("token", data.token);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// App.js
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";

function Dashboard() {
  const { token, logout } = useContext(AuthContext);
  return token ? (
    <div>
      <h2>Welcome! Token: {token}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <h2>Please login</h2>
  );
}

function LoginForm() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login("testuser", "password123");
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <Dashboard />
    </AuthProvider>
  );
}
```
