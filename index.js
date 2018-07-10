'use strict'

const http = require('http')
const fs = require('fs')
const routes = require('./routes')

const requestExists = (url, method) => {
  let temp
  if ((temp = routes.find(route => (route.url === url && route.method === method))))
    return temp
  return undefined
}

const getFileContent = file => {
  let data
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (e) {
    data = undefined
    console.error(e)
  }
  return data
}

http.createServer((req, res) => {
  const { url, method } = req
  console.log(method, url)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  if (url === '/' && method === 'GET')
    res.write(JSON.stringify({
        message: "Fake JSON API is working.",
        github: "https://github.com/rigwild/fake-json-API",
        routes
    }))
  else {
    let aRoute, data
    if ((aRoute = requestExists(url, method))) {
      res.statusCode = aRoute.httpCode
      data = getFileContent(aRoute.file)
    }
    else data = {message: 'This route is not defined.'}
    res.write(JSON.stringify(data))
  }
  res.end()
}).listen(44687)

console.log('Server is listening on http://127.0.0.1:44687/ ...')