// import React, { Fragment, useState, useEffect, useCallback } from "react";
import UsersList from "./components/UsersList";
// import Loader from "react-js-loader";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
// import { Button } from "reactstrap";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  //   const [users, setUsers] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const fetchUsers = useCallback(async () => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch("http://localhost:4000/users");
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }, []);

  //   async function addUserHandler(user) {
  //     await fetch("http://localhost:4000/users", {
  //       method: "POST",
  //       body: JSON.stringify(user),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //   }
  //   const onDeleteID = useCallback(async (deletedData) => {
  //     await fetch(`http://localhost:4000/users/${deletedData}`, {
  //       method: "DELETE",

  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //   }, []);
  //   useEffect(() => {
  //     fetchUsers();
  //   }, [fetchUsers, onDeleteID]);

  //   let content = <p>No Users Found</p>;
  //   if (users.length > 0) {
  //     content = <UsersList users={users} deleteId={onDeleteID} />;
  //   }

  //   if (error) {
  //     content = <p>{error}</p>;
  //   }

  //   if (isLoading) {
  //     content = (
  //       <div>
  //         <Loader
  //           type="spinner-circle"
  //           bgColor={"#000000"}
  //           title={"box-rotate-x"}
  //           size={100}
  //         />
  //       </div>
  //     );
  //   }
  //   return (
  //     <Fragment>
  //       <section>
  //         <AddUser addUser={addUserHandler} />
  //       </section>
  //       <section>
  //         <Button color="success" onClick={fetchUsers}>
  //           Fetch UserList
  //         </Button>
  //       </section>
  //       <section>{content}</section>
  //     </Fragment>
  //   );
  // };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route exact path="/create" component={AddUser} />
          <Route exact path="/update/:id" component={UpdateUser} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
