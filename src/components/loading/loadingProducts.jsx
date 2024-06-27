import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingProducts = () => {
  return (
    <>
      {Array(16)
        .fill({})
        .map((p , index) => {
          return (
            <div
              style={{ borderRadius: "10px" }}
              className="text-center col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2"
              key={index}
            >
              <Skeleton className="mb-4 " width={250} height={300} />
              <Skeleton className="mb-3" count={2} width={250} height={30} />
            </div>
          );
        })}
    </>
  );
};

export default LoadingProducts;
