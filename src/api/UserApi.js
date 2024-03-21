import BaseApi from "./core/BaseApi";

class UserApi {
  getAllUsers = () => {
    return BaseApi.get("/users");
  };
}

const userApi = new UserApi();
export default userApi;
