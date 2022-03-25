import request from '@/utils/request'
import { sender } from '@/api/api'

// 查询角色列表
export function listRole(query) {
  return sender('sys', 'querySysRolePage', query)
}

// 查询角色详细
export function getRole(roleId) {
  return request({
    url: '/sys/role/' + roleId,
    method: 'get'
  })
}

// 新增角色
export function addRole(data) {
  return request({
    url: '/sys/role',
    method: 'post',
    data: data
  })
}

// 修改角色
export function updateRole(data, roleId) {
  return request({
    url: '/sys/role/' + roleId,
    method: 'put',
    data: data
  })
}

// 角色数据权限
export function dataScope(data) {
  return request({
    url: '/sys/role/data/scope',
    method: 'put',
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId, status) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/sys/role/status',
    method: 'put',
    data: data
  })
}

// 删除角色
export function delRole(roleId) {
  return request({
    url: '/sys/role',
    method: 'delete',
    data: roleId
  })
}

export function getListrole(id) {
  return request({
    url: '/sys/menu/role/' + id,
    method: 'get'
  })
}

export function getRoutes() {
  return sender('sys', 'querySysMenuRole', {})
}

// export function getMenuNames() {
//   return request({
//     url: '/api/v1/menuids',
//     method: 'get'
//   })
// }
