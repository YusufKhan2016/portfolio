import { defineStore } from "pinia";
import axios from 'axios';
import { userLoginUrl } from "./api";

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      userLoggedIn: false,
      userToken: "",
      authUser: {},
    }
  },

  getters: {
    getGuard: (state) => {
      const guard = localStorage.getItem('guard');
      return guard ? Boolean(guard) : state.userLoggedIn;
    },

    getAuthUser: (state) => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : state.authUser;
    },

    getUserToken: (state) => {
      const token = localStorage.getItem('token');
      return token ? token : state.userToken;
    }
  },

  actions: {
    loginRequest(user: UserType) {

      return new Promise((resolve, reject) => {
        axios.post(userLoginUrl, user)
          .then((res: any) => {
            this.userLoggedIn = true;
            this.userToken    = res.data.token;
            this.authUser     = res.data.user;

            localStorage.setItem('guard', 'true');
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            resolve(res.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },

    logout() {
      localStorage.clear();
      this.userLoggedIn = false;
      this.userToken    = "";
      this.authUser     = {};
    },
  }
});

type UserType = {
  username: string;
  password: string;
};
