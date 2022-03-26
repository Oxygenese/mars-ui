import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 查询菜单列表
export function listMenu(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysMenuPage'], query)
}

// 查询菜单详细
export function getMenu(menuId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysMenuById'], { id: menuId })
}

// 查询菜单下拉树结构
// export function treeselect() {
//   return request({
//     url: '/api/v1/menuTreeselect',
//     method: 'get'
//   })
// }

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysMenuTreeSelect'], { roleId: roleId })
}

// 新增菜单
export function addMenu(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateSysMenu'], data)
}

// 修改菜单
export function updateMenu(data, id) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysMenu'], data)
}

// 删除菜单
export function delMenu(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteSysMenu'], data)
}
