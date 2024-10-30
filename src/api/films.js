import request from '@/utils/request';

const BASE_API = process.env.VUE_APP_BASE_API;
const V2 = process.env.VUE_APP_VERSION_2;
const V1 = process.env.VUE_APP_VERSION_1;

export function getTopFilms(data) {
  return request({
    url: `${BASE_API}${V2}/films/collections?type=${data.type}&page=${data.page}`,
    method: 'GET',
  });
}

export function getSearchFilms(data) {
  return request({
    url: `${BASE_API}${V1}/films/search-by-keyword?keyword=${data.search}&page=${data.page}`,
    method: 'GET',
  });
}

export function getMovie(data) {
  return request({
    url: `${BASE_API}${V2}/films/${data.id}`,
    method: 'GET',
  });
}
