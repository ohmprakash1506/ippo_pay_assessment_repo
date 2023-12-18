/* eslint-disable import/no-anonymous-default-export */
import httpService from "../common/httpService";

class UserDataService {
    getAll() {
      return httpService.get("/user/all");
    }
  
    get(id) {
      return httpService.get(`/user/${id}`);
    }
  
    create(data) {
      console.log(`data:`,data)
      return httpService.post("/user/create", data);
    }
  
    update(id, data) {
      return httpService.put(`/update/${id}`, data);
    }
  
    delete(id) {
      return httpService.delete(`/delete/${id}`);
    }
  }
  
  export default new UserDataService();