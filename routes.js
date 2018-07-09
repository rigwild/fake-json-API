'use strict'

const jsonFilesDir = './json/'
const routes = [
  {
    url: '/login',
    method: 'POST',
    file: 'login_POST.json'
  },
  {
    url: '/profile',
    method: 'GET',
    file: 'profile_GET.json'
  },
  {
    url: '/profile/1337',
    method: 'GET',
    file: 'profile_id_GET.json'
  },
  {
    url: '/profile',
    method: 'PATCH',
    file: 'profile_PATCH.json'
  }
]
.map(route => {
  route.file = jsonFilesDir + route.file
  return route
})

module.exports = routes