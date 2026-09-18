import { request } from "@/shared/api/http";
import { API_BASE_NAME } from "@/shared/config/appConfig";

export interface UserLoginParams {
  username: string;
  password: string;
  remember?: boolean;
}

export interface UserLoginResponse {
  token: string;
}

export function userLoginApi(value: UserLoginParams) {
  return request<UserLoginResponse>({
    method: "POST",
    url: `${API_BASE_NAME}/login`,
    data: value,
  });
}
