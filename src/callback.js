import React from "react";
import jwt from "jsonwebtoken";


function Callback() {

  
  const hash = window.location.hash;
  const hashparams = new URLSearchParams(hash.substring(1));

  const accessToken = hashparams.get("access_token");
  const decoded = jwt.decode(accessToken);
  console.log(decoded);

  localStorage.setItem("access_token", "hi0");

  window.location.href = "/";
  
  return (
    <div>
      <button>Loading...</button>
    </div>
  );
}

export default Callback;
