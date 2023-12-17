import httpService from "../common/httpService";

class UserDataService {
    getAll() {
      return httpService.get("/tutorials");
    }
  
    get(id) {
      return httpService.get(`/tutorials/${id}`);
    }
  
    create(data) {
      return httpService.post("/tutorials", data);
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
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default new UserDataService();