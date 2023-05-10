/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from '@iot-alarm-app/api';
import { ApiError } from '@iot-alarm-app/errors';
import Axios, { AxiosError } from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:3333',
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<ApiResponse<never>>) => {
    if (error.response?.data.error) {
      const e = error.response.data.error as ApiError;
      return Promise.reject(new ApiError(e, e.errorCode, e.message));
    }

    return Promise.reject(new ApiError(error, 1000, null));
  }
);
