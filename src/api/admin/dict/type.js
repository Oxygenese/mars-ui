import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 查询字典类型列表
export function listType(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryDictTypePage'], query)
}

// 查询字典类型详细
export function getType(dictId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryDictTypeById'], { id: dictId })
}

// 新增字典类型
export function addType(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateDictType'], data)
}

// 修改字典类型
export function updateType(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateDictType'], data)
}

// 删除字典类型
export function delType(dictId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteDictType'], dictId)
}

// 导出字典类型
export function exportType(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['ExportDictType'], query)
}

// 获取字典选择框列表
export function optionselect() {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryDictTypeOptionSelect'], {})
}
