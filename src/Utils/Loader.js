import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/ClipLoader";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
export default function Loader() {
 
  return (
    <div className="sweet-loading flex flex-col justify-center items-center">
     

      <FadeLoader
        color={"#379465"}
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="text-redColor text-lg">Loading...</p>
    </div>
  )
}
