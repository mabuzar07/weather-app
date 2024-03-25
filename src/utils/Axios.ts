import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = ''
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error: AxiosError) => {
    console.log('Error calling==>', JSON.stringify(error))
    return Promise.reject(error);
  }
)

export default instance
