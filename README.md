# Bookmark API UI

A Frontend application for the [Bookmark API](https://github.com/DCI-fbw11/bookmark-api)

This setup use CRA, Sass, Bootstrap and a proxy

## Requirements & Setup

First, setup the [Bookmark API](https://github.com/DCI-fbw11/bookmark-api#getting-started)   

 - clone the repository and install the dependencies
 - run mongod
 - run the dev environment with   
 ```npm run dev```

The Bookmark API (***Backend***) will run on http://localhost:4000  

You can now setup the React App
 - clone this repository and install the dependencies
 - run the dev environment with   
 ```npm start```

This React App (***Frontend***) will run on http://localhost:3000

## Proxy settings

The frontend application use a proxy to avoids *CORS* issues.  
In [package.json](package.json) we use
```
"proxy": "http://localhost:4000"
```

This way, when you fetch('/api/bookmarks') in development, the development server will recognize that it’s not a static asset, and will proxy your request to http://localhost:4000/api/bookmarks as a fallback. 


More info about the [proxying API requests in Development](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)


## Request examples

### Registration

```
fetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify({
            "registerData" : {
                "username": "demo",
                "password": "123456789"
            }
        }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(data=>console.log(data))

```


### Authentication, receive a token

```
  fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
            "loginData" : {
                "username": "demo",
                "password": "123456789"
            }
        }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(data=>console.log(data))

```

### Retrieve all bookmarks for the current logged user

```
  fetch('/api/bookmarks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlM2ZlZWY5ZjVjZDA5NTc3NTQ3OGRmIiwiaWF0IjoxNTU4NDQ2Mjg3LCJleHAiOjE1NTg0NDk4ODd9.vHUIgkPrMcgzgu55GJV3LgufAgpAnWbMHGjcWc_guMU'
    }
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
 ``` 
  
  ### Edit a Bookmark 
  
  ```
  fetch('/api/bookmarks/5ce401549f5cd095775478e0', {
    method: 'PUT',
    body: JSON.stringify(
        {
            "shortDescription": "new bookmark - edited",
            "url": "http://theinternet.web"
        }
    ),
    headers: {
      'Content-Type': 'application/json',
	  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlM2ZlZWY5ZjVjZDA5NTc3NTQ3OGRmIiwiaWF0IjoxNTU4NDQ2Mjg3LCJleHAiOjE1NTg0NDk4ODd9.vHUIgkPrMcgzgu55GJV3LgufAgpAnWbMHGjcWc_guMU'
    }
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  ```