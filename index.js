{
  // const person = require('./person')
  // console.log(person)
  // console.log(person.name)
  // console.log(person.age)
  // console.log(person('ali',23))
  // console.log(person('hamza',23))
  // console.log(person('umer',23))
}

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     // if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // }
  // if (req.url === "/about") {
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //     // if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "ali", age: 10 },
  //     { name: "ali2", age: 11 },
  //     { name: "ali3", age: 12 },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  //Build File path
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension of file
  let extension = path.extname(filepath);

  //initial content type
  let contentType = "text/html";

  //check extension and set content type
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;

    case ".css":
      contentType = "text/css";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case ".jpg":
      contentType = "image/jpg";
      break;

    default:
      break;
  }

  //Read file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end("Server Error: ", err.code);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType});
      res.end(content, "utf-8"); 
    }
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("server running on port", { port });
});
