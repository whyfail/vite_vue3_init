/**
 * 用户相关接口
 */
import http, { BASE_NAME } from './index.js';

/**
 * 登录
 */
export async function userLoginApi(value) {
  try {
    const data = await http.post(`${BASE_NAME}/login`, value);

    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * !测试使用，新建项目后删除掉
 */
export const csGetApiKey = `${BASE_NAME}/rand.qinghua?format=json`;

export async function csGetApi(value) {
  try {
    const data = await http.get(csGetApiKey, { params: value });

    return data;
  } catch (error) {
    console.error(error);
  }
}
