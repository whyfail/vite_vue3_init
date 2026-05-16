/**
 * 用户相关接口
 */
import http, { BASE_NAME } from './index';

export interface LoginParams {
  account: string
  password: string
}

export interface ApiResponse<T = unknown> {
  content?: T
  msg?: string
  [key: string]: unknown
}

/**
 * 登录
 */
export async function userLoginApi(value: LoginParams) {
  try {
    const response = await http.post<ApiResponse<string>>(`${BASE_NAME}/login`, value);

    return response.data as ApiResponse<string>;
  } catch (error) {
    console.error(error);

    return { content: '' } as ApiResponse<string>;
  }
}

/**
 * !测试使用，新建项目后删除掉
 */
export const csGetApiKey = `${BASE_NAME}/rand.qinghua?format=json`;

export async function csGetApi(value: Record<string, unknown>) {
  try {
    const response = await http.get<ApiResponse<string>>(csGetApiKey, { params: value });

    return response.data as ApiResponse<string>;
  } catch (error) {
    console.error(error);

    return { content: '' } as ApiResponse<string>;
  }
}
