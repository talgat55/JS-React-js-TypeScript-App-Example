import http from '../utils/http';
import ITutorialData from "../types/ITutorialData";

class TutorialDataService {
    getAll() {
        return http.get("/tutorials");
    }

    get(id: string) {
        return http.get(`/tutorials/${id}`);
    }

    create(data: ITutorialData) {
        return http.post("/tutorials", data);
    }

    update(data: ITutorialData, id: any) {
        return http.post(`/tutorials/${id}`, data);
    }

    delete(id: any) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title: string) {
        return http.get(`/tutorials?title=${title}`);
    }
}

export default  new TutorialDataService();
