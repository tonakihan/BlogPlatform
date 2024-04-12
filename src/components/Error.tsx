import type { FC } from "react";

interface ErrorParams {
  message: string
}

const Error: FC<ErrorParams> = ({ message }) => {
  return (
    <div className="error">
      <h1> Error </h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;