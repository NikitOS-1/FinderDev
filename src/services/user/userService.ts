import { IUserDataResponse } from '../../commons/types/interfaces';
import apiService from '../api/apiService';
import { getApiBaseUrl } from '../../config/config';
import { BACKEND_API_PATH } from '../../commons/constants/pathConstant';


async function getUserProfile(userName: string): Promise<IUserDataResponse> {
  return apiService.get(`${getApiBaseUrl()}/${BACKEND_API_PATH.USERS}/${userName}`);
}

const userService = {
  getUserProfile,
};

export default userService;
