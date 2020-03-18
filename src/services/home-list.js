import request from '../utils/request'

export async function UserLogin(params) {
  return request('/user/user/login', {
    method: 'POST',
    data: params,
  });
}
