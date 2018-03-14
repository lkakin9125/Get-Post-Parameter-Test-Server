# Get Post Parameter Test Server

To test what client have send to server. Whatever client send to server by POST body or GET query, server will return the the 
```
{
    "ok": true,
    "response": ${POST body or GET query}
}
```

## How to use

### Environment Setup

1. install Node.js if not installed
2. use cmd or Terminal to the project root direcotry
3. use below command to install required package
```
npm install
```

### Run the Server

1. finish the enironment setup if not finished
2. use cmd or Terminal to the project root direcotry
3. use below command to start the server
```
npm start
```