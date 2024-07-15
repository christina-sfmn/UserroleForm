import React from "react";

type UserListElementProps = {
  index: number;
  vorname: string;
  nachname: string;
  userrole: string;
  newsletter: boolean;
  removeUser: (index: number) => void;
};

export const UserListElement = ({
  index,
  vorname,
  nachname,
  userrole,
  newsletter,
  removeUser,
}: UserListElementProps) => {
  return (
    <div className="flex items-center justify-between border-b border-neutral-600 mb-5">
      <div>
        <p className="text-neutral-600 font-semibold">
          {vorname} {nachname}
        </p>
        <p
          className={`${
            newsletter ? "text-green-600" : "text-red-600"
          } text-xs font-semibold mb-1`}>
          Newsletter
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <button onClick={() => removeUser(index)}>
          <img
            src="src/assets/trash-svgrepo-com.svg"
            className="absolute top-0 right-16 w-6"
          />
        </button>
        <p className="text-blue-400 font-semibold">{userrole}</p>
      </div>
    </div>
  );
};
