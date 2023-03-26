const express = require("express");
const app = express();
const port = 3000;

app.get("/getuserdetail", (req, res) => {
  res.send({
    name: "John Doe",
    age: 25,
    address: "123, ABC Street, XYZ City",
  });
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});
