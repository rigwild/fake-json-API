# fake-json-API

Easily test your scripts with JSON files.  No dependencies required. CORS header is set to avoid using proxies like cors-anywhere. 

## Install
Clone the repository :

    $ git clone https://github.com/rigwild/fake-json-API/

There's no dependencies.

Add your routes in the `./config.js` file.
You can specify the URL, the HTTP method, the HTTP code and the call output data file in the `./json/` directory.
You can choose to pretty print the JSON by modifying the value of `JSONprettyPrint`.

Route configuration example :

    const routes = [
      {
        url: '/login',
        method: 'POST',
        file: 'login_POST.json',
        httpCode: 200
      }
    ]

Then simply create the `./json/login_POST.json` file.

    {
      "id": 204,
      "username": "rigwild",
      "message": "Login successful."
    }
  
## Start

    $ npm start
 
The server starts to listen on port 44687.
The configured routes are listed at the root of the API.

## License
[The MIT license](https://github.com/rigwild/fake-json-API/blob/master/LICENSE).
