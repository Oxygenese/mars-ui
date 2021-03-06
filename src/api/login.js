import request from '@/utils/request'
import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/auth/captcha',
    method: 'get'
  })
}

// 查询 此接口不在验证数据权限
export function getSetting() {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryAppConfig'], {})
}
