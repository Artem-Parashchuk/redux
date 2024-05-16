import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Layout } from "./pages/Layout/Layout";
import { Team } from "./components/Team/Team";
import { OurMission } from "./components/OurMission/OurMission";
import { Company } from "./components/Company/Company";
import { Users } from "./pages/Users/Users";
import { UserDetails } from "./pages/UserDetails/UserDetails";
import s from "./App.module.css";
import { Posts } from "./components/Posts/Posts";
import { PostDetails } from "./components/PostDetails/PostDetails";
import { Login } from "./pages/Login/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";

function App() {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          >
            <Route
              path="team"
              element={<Team />}
            />
            <Route
              path="ourMission"
              element={<OurMission />}
            />
            <Route
              path="company"
              element={<Company />}
            />
          </Route>

          <Route
            path="users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="users/:userId"
            element={<UserDetails />}
          >
            <Route
              path="info"
              element={<h1>User Info</h1>}
            />
            <Route
              path="posts"
              element={<Posts />}
            >
              <Route
                path="details/:postId"
                element={<PostDetails />}
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
