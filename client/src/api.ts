import axios from "axios";
import { LaunchPadsType } from "./types/launchPadsType";
import { LaunchType } from "./types/launchType";

// SpaceX API instance
const instance = axios.create({
   baseURL: 'https://api.spacexdata.com/v3/'
});

// Loacalhost API instance
const instanceServer = axios.create({
   baseURL: 'http://localhost:5000/api/'
});

// User authentication API
export const authAPI = {
   me(token: string) {
      return instanceServer.post(`/user/me`, {token});
   },
   register(login: string, email: string, password: string) {
      return instanceServer.post(`/user/register`, {login, email, password});
   },
   login(email: string, password: string) {
      return instanceServer.post(`/user/login`, {email, password});
   },
   logout() {
      return instanceServer.delete(`/user/login`);
   }
};

// Last launches API
export const launchesAPI = {
   allLaunches(limit: number) {
      return instance.get<Array<LaunchType>>(`launches/?order=asc&limit=${limit}`);
   },
   launchesDetail(params: string) {
      return instance.get<LaunchType>(`launches/${params}`);
   }
};

// Missions of SpaceX API
export const missionsAPI = {
   missions() {
      return instance.get(`missions`);
   }
};

// Pads of launches API
export const launchPadsAPI = {
   launchPads() {
      return instance.get<Array<LaunchPadsType>>(`launchpads`);
   }
};

// Engines API
export const coresAPI = {
   cores() {
      return instance.get(`cores`);
   }
};

// About of SpaceX API
export const aboutAPI = {
   about() {
      return instance.get(`info`);
   }
};
