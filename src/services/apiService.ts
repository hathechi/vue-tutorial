import axios from "axios";
const API_BASE_URL = 'https://ric.zone/graphql'
const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getApi = ({url}: any) => {
  return instance({
    method: 'get',
    url
  })
}

export const postApi = ({url, data}: any) => {
  return instance({
    method: 'post',
    url,
    data
  })
}

export const putApi = ({url, data}: any) => {
  return instance({
    method: 'put',
    url,
    data
  })
}

export const deleteApi = ({url}: any) => {
  return instance({
    method: 'delete',
    url
  })
}