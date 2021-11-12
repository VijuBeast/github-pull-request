import React from "react";
import Loader from "react-loader-spinner";

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      // <p style={{ textAlign: 'center', fontSize: '30px' }}>
      //   Hold on, fetching data may take some time 😊
      // </p>
      <Loader style={{ textAlign: "center" }}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000} 
      />
    );
  };
}


export default WithListLoading;
