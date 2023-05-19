/**
 * 用户相关接口
 */
import http, { BASE_NAME } from './index';

/**
 * 登录
 */
export const userLoginApi = async (value) => {
  try {
    const data = await http.post(`${BASE_NAME}/login`, value);

    return data;
  } catch (error) {
    console.error(error);

    return;
  }
};

/**
 * !测试使用，新建项目后删除掉
 */
export const csGetApiKey = '/PROXY/api/api-wenan-anwei/index.php';

export const csGetApi = async (value) => {
  try {
    const data = await http.get(csGetApiKey, { params: value });

    return data;
  } catch (error) {
    console.error(error);

    return;
  }
};
