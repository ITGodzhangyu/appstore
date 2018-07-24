import request from '@/utils/request'

export function fetchKeyList(query) {
  return request({
    url: '',
    method: 'get',
    params: query
  })
}

export function createKey(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

export function updateKey(data) {
  return request({
    url: '',
    method: 'put',
    data
  })
}

export function deleteKey(data) {
  return request({
    url: '',
    method: 'delete',
    data
  })
}
