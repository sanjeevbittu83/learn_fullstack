const http= require('http');
const port=8001;
const fs=require('fs');

function requestHandler(request,response){
    console.log(request.url);
    response.writeHead(200,{'content-type':'text/html'})

    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log('error',err);
            return response.end('<h1>ERROR</h1>') ;
        }
        return response.end(data);
    });
}
const server = http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        return;
    }
    console.log("Server on port ", port);
})