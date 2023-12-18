/* eslint-disable import/no-anonymous-default-export */
import httpService from "../common/httpService";

class UserDataService {
    getAll() {
      return httpService.get("/user/all");
    }
  
    get(id) {
      return httpService.get(`/tutorials/${id}`);
    }
  
    create(data) {
      console.log(`data:`,data)
      return httpService.post("/user/create", data);
    }
  
    update(id, data) {
      return httpService.put(`/tutorials/${id}`, data);
    }
  
    delete(id) {
      return httpService.delete(`/tutorials/${id}`);
    }
  
    deleteAll() {
      return httpService.delete(`/tutorials`);
    }
  
    findByUser(title) {
      return httpService.get(`/tutorials?title=${title}`);
    }
  }
  
  export default new UserDataService();