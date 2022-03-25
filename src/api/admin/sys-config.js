import { sender } from '@/api/api'

// 查询参数列表
export function listConfig(query) {
  return sender('sys', 'querySysConfigPage', query)
}

// 查询参数详细
export function getConfig(configId) {
  return sender('sys', 'querySysConfigById', { id: configId })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return sender('sys', 'querySysConfigByKey', { configKey: configKey })
}

// 新增参数配置
export function addConfig(data) {
  return sender('sys', 'createSysConfig', data)
}

// 修改参数配置
export function updateConfig(data) {
  return sender('sys', 'updateSysConfig', data)
}

// 删除参数配置
export function delConfig(data) {
  return sender('sys', 'deleteSysConfig', data)
}

export function getSetConfig(query) {
  return sender('sys', 'querySysConfigSet', query)
}

export function updateSetConfig(data) {
  return sender('sys', 'updateSysConfigSet', data)
}
