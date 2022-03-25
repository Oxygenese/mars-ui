import request from '@/utils/request'

export function sender(path, operation, data) {
  if (data === undefined) {
    data = {}
  }
  return request({
    url: path,
    method: 'post',
    data: {
      operation: operation,
      data: JSON.stringify(data)
    }
  })
}
