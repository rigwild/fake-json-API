'use strict'

const jsonFilesDir = './json/'
const JSONprettyPrint = true
const routes = [
  {
    url: '/login',
    method: 'POST',
    file: 'login_POST.json',
    httpCode: 200
  },
  {
    url: '/profile',
    method: 'GET',
    file: 'profile_GET.json',
    httpCode: 200
  },
  {
    url: '/profile/1337',
    method: 'GET',
    file: 'profile_id_GET.json',
    httpCode: 200
  },
  {
    url: '/profile',
    method: 'PATCH',
    file: 'profile_PATCH.json',
    httpCode: 200
  }
]
.map(route => Object.assign(route, { file: jsonFilesDir + route.file }))

module.exports = {JSONprettyPrint, routes}