import { sender } from '@/api/api'
import protoRoot from '@/proto/api_pb'

// 查询岗位列表
export function listPost(query) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysPostPage'], query)
}

// 查询岗位详细
export function getPost(postId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['QuerySysPostById'], { id: postId })
}

// 新增岗位
export function addPost(data) {
  return sender('sys', protoRoot.lookup('api.Operate').values['CreateSysPost'], data)
}

// 修改岗位
export function updatePost(data, id) {
  return sender('sys', protoRoot.lookup('api.Operate').values['UpdateSysPost'], data)
}

// 删除岗位
export function delPost(postId) {
  return sender('sys', protoRoot.lookup('api.Operate').values['DeleteSysPost'], postId)
}

