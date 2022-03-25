import request from '@/utils/request'
import { sender } from '@/api/api'

// 查询字典数据列表
export function listData(query) {
  return request({
    url: '/sys/dict/data/page',
    method: 'get',
    params: query
  })
}

// 查询字典数据详细
export function getData(dictCode) {
  return request({
    url: '/sys/dict/data/' + dictCode,
    method: 'get'
  })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return sender('sys', 'queryDictDataSelect', { dictType: dictType })
}

// 新增字典数据
export function addData(data) {
  return request({
    url: '/sys/dict/data',
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function updateData(data) {
  return request({
    url: '/sys/dict/data/' + data.dictCode,
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delData(dictCode) {
  return request({
    url: '/sys/dict/data',
    method: 'delete',
    data: dictCode
  })
}

// 导出字典数据
export function exportData(query) {
  return request({
    url: '/sys/dict/data/export',
    method: 'get',
    params: query
  })
}
