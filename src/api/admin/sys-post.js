import request from '@/utils/request'
import { sender } from '@/api/api'

// 查询岗位列表
export function listPost(query) {
  return sender('sys', 'querySysPostPage', query)
}

// 查询岗位详细
export function getPost(postId) {
  return request({
    url: '/sys/post/' + postId,
    method: 'get'
  })
}

// 新增岗位
export function addPost(data) {
  return request({
    url: '/sys/post',
    method: 'post',
    data: data
  })
}

// 修改岗位
export function updatePost(data, id) {
  return request({
    url: '/sys/post/' + id,
    method: 'put',
    data: data
  })
}

// 删除岗位
export function delPost(postId) {
  return request({
    url: '/sys/post',
    method: 'delete',
    data: postId
  })
}

