import axios from "axios";

const instance = axios.create({
   baseURL: 'https://api.spacexdata.com/v3/'
});

const instanceServer = axios.create({
   baseURL: 'http://localhost:5000/api/'
});

export const authAPI = {
   register(data) {
      return instanceServer.post(`register`, {data});
   },
   login(data) {
      return instanceServer.post(`login`, {data});
   },
   logout() {
      return instanceServer.remove(`logout`);
   }
};

export const launchesAPI = {
   allLaunches(limit) {
      return instance.get(`launches/?order=asc&limit=${limit}`);
   },
   launchesDetail(params) {
      return instance.get(`launches/${params}`);
   }
};

export const missionsAPI = {
   missions() {
      return instance.get(`missions`);
   }
};

export const launchPadsAPI = {
   launchPads() {
      return instance.get(`launchpads`);
   }
};

export const coresAPI = {
   cores() {
      return instance.get(`cores`);
   }
};

export const aboutAPI = {
   about() {
      return instance.get(`info`);
   }
};
