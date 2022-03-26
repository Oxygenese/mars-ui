import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 查询参数列表
export function listConfig(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysConfigPage'], query)
}

// 查询参数详细
export function getConfig(configId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysConfigById'], { id: configId })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysConfigByKey'], { configKey: configKey })
}

// 新增参数配置
export function addConfig(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateSysConfig'], data)
}

// 修改参数配置
export function updateConfig(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysConfig'], data)
}

// 删除参数配置
export function delConfig(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteSysConfig'], data)
}

export function getSetConfig(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysConfigSet'], query)
}

export function updateSetConfig(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysConfigSet'], data)
}
