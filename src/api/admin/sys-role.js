import request from '@/utils/request'
import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 查询角色列表
export function listRole(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysRolePage'], query)
}

// 查询角色详细
export function getRole(roleId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysRoleById'], { id: roleId })
}

// 新增角色
export function addRole(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateSysRole'], data)
}

// 修改角色
export function updateRole(data, roleId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysRole'], data)
}

// 角色数据权限
export function dataScope(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysRoleDataScope'], data)
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return sender('sys', protoRoot.lookup('api.Operate').values['ChangeSysRoleStatus'], data)
}

// 删除角色
export function delRole(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteSysRole'], data)
}

export function getListrole(id) {
  return request({
    url: '/sys/menu/role/' + id,
    method: 'get'
  })
}

export function getRoutes() {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysMenuRole'], {})
}

// export function getMenuNames() {
//   return request({
//     url: '/api/v1/menuids',
//     method: 'get'
//   })
// }
