import request from '@/utils/request';

export function getTopFilms(data) {
  return request({
    url: `/films/collections?type=${data.type}&page=${data.page}`,
    method: 'GET',
  });
}

export function getSearchFilms(data) {
  return request({
    url: `/films/search-by-keyword?keyword=${data.search}&page=${data.page}`,
    method: 'GET',
  });
}

export function getMovie(data) {
  return request({
    url: `/films/${data.id}`,
    method: 'GET',
  });
}
