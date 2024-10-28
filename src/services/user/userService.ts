import { IUserDataResponse } from '../../commons/types/interfaces.ts';
import apiService from '../api/apiService.ts';
import { getApiBaseUrl } from '../../config/config.ts';
import { BACKEND_API_PATH } from '../../commons/constants/pathConstant.ts';


async function getUserProfile(userName: string): Promise<IUserDataResponse> {
  return apiService.get(`${getApiBaseUrl()}/${BACKEND_API_PATH.USER}/${userName}`);
}

const userService = {
  getUserProfile,
};

export default userService;
