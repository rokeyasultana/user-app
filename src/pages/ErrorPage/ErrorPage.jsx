import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font bold text-purple-500 mt-5 mb-5">
          Opps!!! Page Not Found
        </h2>

        <img
          className="rounded mx-auto d-block mb-10"
          src="https://static.vecteezy.com/system/resources/previews/000/258/961/non_2x/error-404-unavailable-web-page-file-not-found-concept-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
