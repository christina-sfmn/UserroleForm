import React from "react";
import { UserListElement } from "./UserListElement";

type UserListProps = {
  users: {
    vorname: string;
    nachname: string;
    userrole: string;
    newsletter: boolean;
  }[];
  removeUser: (index: number) => void;
};

export const UserList = ({ users, removeUser }: UserListProps) => {
  return (
    <section className="md:w-3/5 w-full border-2 border-neutral-400 p-5 max-h-[30rem] overflow-y-auto">
      {users.map((user, index) => (
        <UserListElement
          key={index}
          index={index}
          vorname={user.vorname}
          nachname={user.nachname}
          userrole={user.userrole}
          newsletter={user.newsletter}
          removeUser={removeUser}
        />
      ))}
    </section>
  );
};
