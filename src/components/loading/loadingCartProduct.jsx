import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCartProducts = () => {
  return (
    <>
      {Array(1)
        .fill({})
        .map((p, index) => {
          return (
            <div key={index} className="row mb-3 text-center align-items-center" style={{ direction: "rtl" }}>
              <div className="col-3">
                <Skeleton  width={100} height={100} />
              </div>
              <div className="col-9">
                <Skeleton count={2} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default LoadingCartProducts;
