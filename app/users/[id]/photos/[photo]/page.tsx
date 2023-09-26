import React from "react";

interface props {
  params: { photo: number };
}

const photos = ({ params: { photo } }: props) => {
  return <div>photos {photo}</div>;
};

export default photos;
