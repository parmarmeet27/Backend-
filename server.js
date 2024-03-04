const http = require('http');

const url = require('url');
const fs=require('fs');
const path = require('path');
const { unescape } = require('querystring');

const mimeType = {
    'html': 'text/html',
    'js':'text/javascipt',
    'css':'text/css',
    'png':'image/png',
    'jpeg':'image/jpeg',
    'jpg': 'image/jpg',
}

 const server = http.createServer((req,res)=>{
     var myuri = url.parse(req.url).pathname
      var filename = path.join(process.cwd(),unescape(myuri))
      console.log('File you are loooking for is:'+ filename);
      var loadFile;

    try{
        loadFile = fs.lstatSync(filename);
    }
    catch(error){

    }

})