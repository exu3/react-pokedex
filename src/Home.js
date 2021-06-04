import React from "react";
import { Link } from "react-router-dom";

export default function Home({ pokemon: results }) {
  return (
    <div className="mt-10 mx-10 p-4 flex flex-wrap justify-center">
      {results &&
        results.map((val, idx) => (
          <Link to={`/about/${val.idx}`} key={idx}>
            <div className="mx-4 text-2xl text-blue-500">{val.name}</div>
          </Link>
        ))}
    </div>
  );
}
