import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'
// 查询字典数据列表
export function listData(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryDictDataPage'], query)
}

// 查询字典数据详细
export function getData(id) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryDictDataByCode'], { id: id })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QueryDictDataSelect'], { dictType: dictType })
}

// 新增字典数据
export function addData(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateDictData'], data)
}

// 修改字典数据
export function updateData(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateDictData'], data)
}

// 删除字典数据
export function delData(dictCode) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteDictData'], dictCode)
}

// 导出字典数据
export function exportData(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['ExportDictData'], query)
}
