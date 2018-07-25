import request from '@/utils/request'

export function getGroundList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function addGround(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateGround(data) {
  return request({
    url: '/article/update',
    method: 'put',
    data
  })
}

export function withdrawGround(data) {
  return request({
    url: '/article/update',
    method: 'put',
    data
  })
}

export function deleteGround(data) {
  return request({
    url: '/article/update',
    method: 'delete',
    data
  })
}
