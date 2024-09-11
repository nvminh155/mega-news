import axios, { AxiosError, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});

// type MoreRecord<TData> = {
//   data: TData;
// };

// type TPaginationRes<TData> = {
//   success: true;
//   count: number;
// } & Record<keyof MoreRecord<TData>, TData[]>;

// type TSingleRes<TData> = {
//   success: true;
// } & Record<keyof MoreRecord<TData>, TData>;

// type TData = TSingleRes<TData>;
// type TResponseList<TData> = TPaginationRes<TData>;

const handleError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const axiosApi = {
  get: async <TData = unknown>(url: string, config?: AxiosRequestConfig) => {
    return await instance
      .get<TData>(url, config)
      .then((res) => ({
        success: true,
        data: res.data,
      }))
      .catch(handleError);
  },

  getList: async <TData = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    return await instance
      .get<TData>(url, config)
      .then((res) => ({
        success: true,
        data: res.data,
      }))
      .catch(handleError);
  },

  post: async <TData = unknown>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig
  ) => {
    return await instance
      .post<TData>(url, data, config)
      .then((res) => ({
        success: true,
        data: res.data,
      }))
      .catch(handleError);
  },

  put: async <TData = unknown>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ) => {
    return await instance
      .put<TData>(url, data, config)
      .then((res) => ({
        success: true,
        data: res.data,
      }))
      .catch(handleError);
  },

  delete: async <TData = unknown>(url: string, config?: AxiosRequestConfig) => {
    return await instance
      .delete<TData>(url, config)
      .then((res) => res.data)
      .catch(handleError);
  },
};
