import { defineStore } from "pinia";
import axios from 'axios';
import { userLoginUrl } from "./api";

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      userLoggedIn: false,
      userToken: "",
      authUser: {},
      message: ""
    }
  },

  getters: {

  },

  actions: {
    loginRequest(user: UserType) {
      localStorage.clear();

      return new Promise((resolve, reject) => {
        axios.post(userLoginUrl, user)
          .then((res) => {
            resolve(res.data);
          })
          .catch((error) => {
            reject(error.response);
          })
      })

    }
  }
})

type UserType = {
  username: string,
  password: string,
}
