import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="span-12x1">
      <h1 className="font-96 font-medium c-red align-c">
          Error Page
      </h1>
      <div className="display-f direction-c align-i-c">
        <Link
          to="/"
          className="btn bg-light-grey hover-white text-blue"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
