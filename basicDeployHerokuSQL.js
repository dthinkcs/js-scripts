const express = require("express");
const app = express();
const mysql = require("mysql");

//const sqlite3 = require('sqlite3');
//const db = new sqlite3.Database('db/users.db');

//
// const db = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "b6e59b9e154e17rishabh",
//   password: "7c2ade43rishabh",
//   database: "heroku_bfb3f26938270darishabh"
// });
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("MySQL Connected...");
// });

const db_config = {
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b6e59b9e154e17rishabh",
  password: "7c2ade43rishabh",
  database: "heroku_bfb3f26938270darishabhfromconfigvariablesonheroku"
};
var db;
function handleDisconnect() {
  db = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  db.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }
    else {
      console.log('MySQL Connected.')
    }                                 // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  db.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}
handleDisconnect();



const PORT = process.env.PORT || 5000;

app.get("/", function(req, res) {
  res.send("<h1>It means Rise. (No Story).</h1>")
});

app.get("/hack", function(req, res) {
  db.query("SELECT * from users", function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      //console.log(typeof(rows[0].username))
      //console.log(typeof([1, 2, 3]))
      console.log(rows);
      res.send(rows);
    }
  })
})

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`)
});
