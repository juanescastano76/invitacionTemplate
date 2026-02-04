import React, { Children } from "react";

interface Props {}

function Card({ children }) {
  return (
    <article className="article-items w-[70dvw] flex items-center flex-col justify-center m-auto">
      {children}
    </article>
  );
}

export default Card;
