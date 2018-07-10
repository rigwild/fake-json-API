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

const getFileContent = file =>
  new Promise((resolve, reject) => {
    try { fs.readFile(file, 'utf8', (err, data) => resolve(JSON.parse(data))) }
    catch (e) { reject(e) }
  })

const sendDefaultMessage = (res, routes) => {
  res.statusCode = 200
  res.write(JSON.stringify({
    message: "Fake JSON API is working.",
    github: "https://github.com/rigwild/fake-json-API",
    routes
  }))
  res.end()
}

const sendError = res => {
  res.statusCode = 200
  res.write(JSON.stringify({ message: 'This route is not defined.' }))
  res.end()
}

http.createServer((req, res) => {
  const { url, method } = req
  console.log(method, url)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  if (url === '/' && method === 'GET') sendDefaultMessage(res, routes)
  else {
    let aRoute
    if ((aRoute = requestExists(url, method))) {
      getFileContent(aRoute.file)
        .then(result => JSON.stringify(result))
        .then(result => {
          res.statusCode = aRoute.httpCode
          res.write(result)
          res.end()
        })
        .catch(err => {
          console.error(err)
          sendError(res)
        })
    }
    else sendError(res)
  }
}).listen(44687)

console.log('Server is listening on http://127.0.0.1:44687/ ...')