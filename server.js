const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname, port=Number(process.env.PORT)||4173;
const assets={'/':'index.html','/index.html':'index.html','/app.js':'app.js','/style.css':'style.css','/icon.svg':'icon.svg','/manifest.webmanifest':'manifest.webmanifest','/sw.js':'sw.js'};
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webmanifest':'application/manifest+json','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{let url;try{url=new URL(req.url,'http://localhost')}catch{return res.writeHead(400).end()};if(url.pathname==='/health'){res.writeHead(200,{'Content-Type':'text/plain'});return res.end('ok')};const asset=assets[url.pathname];if(!Object.hasOwn(assets,url.pathname)||!asset){res.writeHead(404);return res.end('Introuvable')};fs.readFile(path.join(root,asset),(err,data)=>{if(err){res.writeHead(404);return res.end('Introuvable')};res.writeHead(200,{'Content-Type':types[path.extname(asset)],'X-Content-Type-Options':'nosniff'});res.end(data)})});
if(require.main===module)server.listen(port,'127.0.0.1',()=>console.log(`http://127.0.0.1:${port}`));
module.exports=server;
