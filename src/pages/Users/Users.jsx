import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import s from "./Users.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation()
  useEffect(() => {
    const getUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };
    getUsers();
  }, []);


  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("name") ?? "";

  const getFilterData = () => {
    return users.filter((user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase())
    );
  };
  const filteredData = getFilterData();
  return (
    <>
      <h2 className={s.title}>Users</h2>
      <input
        value={query}
        className={s.input}
        type="text"
        placeholder="Enter user name"
        onChange={(e) =>
          setSearchParams(e.target.value ? { name: e.target.value } : {})
        }
      />
      <ul className={s.list}>
        {filteredData.map((item) => {
          return (
            <li
              key={item.id}
              className={s.item}
            >
              <Link to={item.id.toString()} state={location}>
                {item.firstName} {item.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
