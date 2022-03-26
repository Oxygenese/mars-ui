import request from '@/utils/request'
import { Base64 } from 'js-base64'
export function sender(path, operate, data) {
  if (data === undefined) {
    data = {}
  }
  return request({
    url: path,
    method: 'post',
    data: {
      operate: operate,
      data: Base64.encode(JSON.stringify(data))
    }
  })
}
