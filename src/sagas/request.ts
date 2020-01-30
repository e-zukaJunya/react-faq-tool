import axios from "axios";
import { URLS } from "../resources/configs";

const axiosInstance = axios.create({
  baseURL: URLS.BASE
});

export const getByAxios = async (url: string, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .get(url, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};

export const postByAxios = async (url: string, body: object, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .post(url, body, { headers, params })
    .then((res: any) => {
      return { res };
    })
    .catch((err: any) => {
      return { err };
    });
};

export const putByAxios = async (url: string, body: object, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .put(url, body, { headers, params })
    .then((res: any) => {
      return { res };
    })
    .catch((err: any) => {
      return { err };
    });
};

export const patchByAxios = async (url: string, body: object, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .patch(url, body, { headers, params })
    .then((res: any) => {
      return { res };
    })
    .catch((err: any) => {
      return { err };
    });
};

export const deleteByAxios = async (url: string, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .delete(url, { headers, params })
    .then((res: any) => {
      return { res };
    })
    .catch((err: any) => {
      return { err };
    });
};
