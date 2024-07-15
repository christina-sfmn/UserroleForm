import React, { useEffect, useState } from "react";
import { FormInput, FormInputs } from "./FormInput";
import { UserList } from "./UserList";

export const UserView = () => {
  // Array to save user input
  const [users, setUsers] = useState<FormInputs[]>(() => {
    const savedUsers = localStorage.getItem("users"); // Get saved users from local storage
    // If saved users exist, return them. Else return inital user "Max Mustermann".
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            vorname: "Max",
            nachname: "Mustermann",
            userrole: "Editor",
            newsletter: true,
          },
        ];
  });

  // Save users to local storage each time a user is added or removed
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users)); // 1. argument -> function to save users to local storage
  }, [users]); // 2. argument -> tells React to execute useEffect-function each time array [users] is changed

  // Function to add new user to array
  const addUser = (
    vorname: string,
    nachname: string,
    userrole: string,
    newsletter: boolean
  ) => {
    setUsers([...users, { vorname, nachname, userrole, newsletter }]);
  };

  // Function to remove user from array
  const removeUser = (index: number) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  return (
    <>
      <FormInput addUser={addUser} />
      <UserList users={users} removeUser={removeUser} />
    </>
  );
};
