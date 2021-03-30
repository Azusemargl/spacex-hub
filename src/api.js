import axios from "axios";

const instance = axios.create({
   baseURL: 'https://api.spacexdata.com/v3/'
});

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
