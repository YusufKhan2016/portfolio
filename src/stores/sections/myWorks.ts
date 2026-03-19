import { defineStore } from "pinia";
import axios from 'axios';
import { myWorksUrl } from "../api";

export const useMyWorksStore = defineStore('myWorks', {
  state: () => {
    return {
      works: [],
      loading: false,
    }
  },

  getters: {
    getWorksList: (state) => state.works,
    isLoading: (state) => state.loading,
  },

  actions: {
    fetchWorksList() {
      this.loading = true;

      return new Promise((resolve, reject) => {
        axios.get(myWorksUrl)
          .then((res: any) => {
            // Assuming the data comes back in res.data or res.data.data
            this.works = res.data.data || res.data;
            resolve(res.data);
          })
          .catch((error) => {
            reject(error.response);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },

    addWorkRequest(workData: FormData) {
      this.loading = true;

      return new Promise((resolve, reject) => {
        axios.post(myWorksUrl, workData)
          .then((res: any) => {
            this.fetchWorksList(); // Refresh the list after adding
            resolve(res.data);
          })
          .catch((error) => {
            reject(error.response);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },

    deleteWorkRequest(id: string | number) {
      this.loading = true;

      return new Promise((resolve, reject) => {
        axios.delete(`${myWorksUrl}/${id}`)
          .then((res: any) => {
            this.fetchWorksList(); // Refresh the list
            resolve(res.data);
          })
          .catch((error) => {
            reject(error.response);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    }
  }
});
