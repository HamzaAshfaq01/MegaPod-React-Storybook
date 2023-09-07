import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../stories";
const NoPage = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <>
      {loader && <Loader />}

      <div className="d-flex bg-black align-items-center justify-content-center vh-100">
        <div className="text-center text-white">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>

          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoPage;
