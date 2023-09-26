import Link from "next/link";
import React, { Suspense } from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc((user) => user.name);

  return (
    <>
      <h1 className="m-5 text-2xl font-bold">Users</h1>
      <Suspense
        fallback={
          <div className="loading loading-spinner loading-lg m-5"></div>
        }
      >
        <table className="mx-auto my-auto table table-bordered">
          <thead>
            <tr>
              <th>
                <Link href="/users?sortOrder=name">Name</Link>
              </th>
              <th>
                <Link href="/users?sortOrder=email">Email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Suspense>
    </>
  );
};

export default UsersPage;
