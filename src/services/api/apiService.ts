import { HTTP_REQUEST_TYPE } from '../../commons/enums/enum.ts';
import axios, { AxiosRequestConfig } from 'axios';


const getHeaders = (
  requestType: HTTP_REQUEST_TYPE,
): AxiosRequestConfig['headers'] => {
  const headers: AxiosRequestConfig['headers'] = {
    'Content-Type': requestType,
  };
  return headers;
};

export async function get(
  path: string,
  requestType: HTTP_REQUEST_TYPE = HTTP_REQUEST_TYPE.JSON,
): Promise<any> {
  try {
    const res = await axios
      .get(path, { headers: getHeaders(requestType) });
    return res.data;
  } catch (error) {
    const errorMessage = `Error occurred on get request: Error: ${error}, path:${path}, requestType:${requestType}`;
    console.log(errorMessage);
    throw error;
  }
}

const apiService = {
  get,
};

export default apiService;
