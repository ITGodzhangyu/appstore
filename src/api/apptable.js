import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/apptable',
    method: 'get',
    params
  })
}

export function getAppDetail(params) {
  return request({
    url: '/appdetail',
    method: 'get',
    params
  })
}

export function getRecommendedList(params) {
  return request({
    url: '/recommendedList',
    method: 'get',
    params
  })
}