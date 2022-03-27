import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

export function getDeptList(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysDeptPage'], query)
}

// 查询部门详细
export function getDept(deptId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysDeptById'], { id: deptId })
}

// 查询部门下拉树结构
export function treeselect() {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysDeptTree'], {})
}

// 根据角色ID查询部门树结构
export function roleDeptTreeselect(roleId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysDeptTreeRoleSelect'], { roleId: roleId })
}

// 新增部门
export function addDept(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateSysDeptById'], data)
}

// 修改部门
export function updateDept(data, id) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysDept'], data)
}

// 删除部门
export function delDept(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteSysDept'], data)
}
