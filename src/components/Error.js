import React from "react";
import { useRouteError } from "react-router";

export function Error() {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>{err.status}</h1>
      <h2>OOPs something went wrong!</h2>
      <h3>{err.statusText}</h3>
    </div>
  );
}
