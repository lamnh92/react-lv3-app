import React, { useCallback, useEffect, useState } from "react";
import userApi from "../api/UserApi";
import AutoFilterInput from "../components/input/AutoFilterInput";

const Exercise3 = () => {
  const [users, setUsers] = useState([]);

  const handleChangeValue = useCallback((option) => {
    console.log("option:", option);
  }, []);

  const getAllUsers = async () => {
    const data = await userApi.getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <h1> Exercise 3</h1>
      {users.length > 0 && (
        <div className="d-grid m-2 gap-3">
          <div className="d-flex gap-2">
            <h5>Username:</h5>
            <AutoFilterInput
              data={users}
              placeHolder="Select username"
              name={"username"}
              onChangeValue={handleChangeValue}
            />
          </div>

          <div className="d-flex gap-2">
            <h5>Company name:</h5>
            <AutoFilterInput
              data={users}
              placeHolder="Select company name"
              name={"company.name"}
              onChangeValue={handleChangeValue}
            />
          </div>

          <div className="d-flex gap-2">
            <h5>Zipcode:</h5>
            <AutoFilterInput
              data={users}
              placeHolder="Select zipcode"
              name={"address.zipcode"}
              onChangeValue={handleChangeValue}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Exercise3;
