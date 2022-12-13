const https = require('https');
const fs = require('fs');
const path = require("path");

const options = {
	key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
	cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

const respondResource = function(res, resource, contentType) {
  fs.readFile(resource, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': contentType})
    res.write(data);
    res.end();
  });
};

https
	.createServer(options, (req, res) => {
		let resource;
		switch (req.url) {
			case '/': {
        resource = path.resolve(__dirname, '..', 'dist/index.html');
        contentType = 'text/html';
        break;
      }
      case '/about': {
        resource = path.resolve(__dirname, '..', 'dist/about.html');
        contentType = 'text/html';
        break;
      }
      case '/contact-me': {
        resource = path.resolve(__dirname, '..', 'dist/contact-me.html');
        contentType = 'text/html';
        break;
      }
      case '/src/style.css': {
        resource = path.resolve(__dirname, 'style.css');
        contentType = 'text/css';
        break;
      }
      default: {
        resource = path.resolve(__dirname, '..', 'dist/404.html');
        contentType = 'text/html';
      }
		} 
    respondResource(res, resource, contentType);
	})
	.listen(8080, () => console.log('Server is running. Yes.'));
