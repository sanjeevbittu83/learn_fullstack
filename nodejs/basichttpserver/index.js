const http= require('http');
const port=8001;
function requestHandler(request,response){
    console.log(request.url);


    response.end('gotcha!');
}
const server=http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("server is running on port",port);
});