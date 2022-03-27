import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 查询用户详细
export function getUser(userId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysUserById'], { id: userId })
}

// 新增用户
export function addUser(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateSysUser'], data)
}

// 修改用户
export function updateUser(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysUser'], data)
}

// 删除用户
export function delUser(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteSysUser'], data)
}

// 导出用户
export function exportUser(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['ExportSysUser'], query)
}

// 用户密码重置
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password
  }
  return sender('sys', protoRoot.lookup('api.Operate').values['ResetSysUserPwd'], data)
}

// 用户状态修改
export function changeUserStatus(e) {
  const data = {
    userId: e.userId,
    status: e.status
  }
  return sender('sys', protoRoot.lookup('api.Operate').values['ChangeSysUserStatus'], data)
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysUserProfile'], data)
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
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysUserPwd'], data)
}

// 用户头像上传
export function uploadAvatar(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UploadAvatar'], data)
}

// 查询用户个人信息
export function getUserProfile() {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysUserProfile'], {})
}

export function listUser(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysUserPage'], query)
}

