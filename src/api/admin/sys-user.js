import request from '@/utils/request'
import { sender } from '@/api/api'

// 查询用户详细
export function getUser(userId) {
  return sender('sys', 'querySysUserById', { id: userId })
}

// 新增用户
export function addUser(data) {
  return sender('sys', 'createSysUser', data)
}

// 修改用户
export function updateUser(data) {
  return sender('sys', 'updateSysUser', data)
}

// 删除用户
export function delUser(data) {
  return sender('sys', 'updateSysUser', data)
}

// 导出用户
export function exportUser(query) {
  return request({
    url: '/sys/user/export',
    method: 'get',
    params: query
  })
}

// 用户密码重置
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password
  }
  return sender('sys', 'resetSysUserPwd', data)
}

// 用户状态修改
export function changeUserStatus(e) {
  const data = {
    userId: e.userId,
    status: e.status
  }
  return sender('sys', 'changeSysUserStatus', data)
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return sender('sys', 'updateSysUserProfile', data)
}

// 下载用户导入模板
export function importTemplate() {
  return sender('sys', 'importTemplate', {})
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return sender('sys', 'updateSysUserPwd', data)
}

// 用户头像上传
export function uploadAvatar(data) {
  return sender('sys', 'uploadAvatar', data)
}

// 查询用户个人信息
export function getUserProfile() {
  return sender('sys', 'querySysUserProfile', {})
}

export function listUser(query) {
  return sender('sys', 'querySysUserPage', query)
}

