import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";

import { getUsers } from "../actions/users";

const UserScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userlist = useSelector((state) => state.userList);
  const userinfo = useSelector((state) => state.auth);

  const { loading, users } = userlist;
  const { user } = userinfo;
  useEffect(() => {
    if (userinfo && user.isAdmin) {
      dispatch(getUsers());
    } else {
      history.push("/signin");
    }
  }, [dispatch, history]);

  const deleteUserHandler = (id) => {
    console.log("delete user");
  };

  return (
    <Fragment>
      <h1>Users</h1>
      {loading ? (
        "loading..."
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              {/* <th>ROLE</th> */}

              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}> {user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i
                      className="fas fa-check"
                      style={{
                        color: "green",
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-times"
                      style={{
                        color: "red",
                      }}
                    ></i>
                  )}
                </td>
                {/* <td>{user.roles[0].title}</td> */}
                <td>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteUserHandler(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default UserScreen;
