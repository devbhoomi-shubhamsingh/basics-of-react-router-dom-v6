import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
//   console.log("params", params);
  return (
    <>
      <h1>This is {params.name}'s Page</h1>
    </>
  );
};

export default User;
