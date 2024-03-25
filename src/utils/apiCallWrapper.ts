import Axios from './Axios'

export const makeApiCall = async <T>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  route: string,
  data?: any
) => {
  try {
    const response = await Axios[method](route, data)
    return response.data.data
  } catch (error: any) {
    if (error?.response?.data?.error) {
      throw { success: false, message: error.response.data.error?.msg }
    }
    if (error?.code === 'ERR_NETWORK') {
      throw error
    }
    throw error.response.data as any
  }
}
