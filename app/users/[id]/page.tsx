import React from "react";

interface props {
  params: { photo: number };
}

const UserDetailPage = ({ params: { photo } }: props) => {
  return <div>User No. {photo}</div>;
};

export default UserDetailPage;
