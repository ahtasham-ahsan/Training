const joi = require("joi");
const express = require("express");
const { indexOf } = require("underscore");
const app = express();

app.use(express.json()); // Add this to parse JSON body
app.use(express.urlencoded({ extended: true })); // Add this for form data

const employee_List = [
  {
    id: 1,
    name: "Noman",
    pos: "SE",
  },
  {
    id: 2,
    name: "Muzammil",
    pos: "ASE",
  },
  {
    id: 3,
    name: "Awais",
    pos: "SE",
  },
  {
    id: 4,
    name: "Farooq",
    pos: "PSE",
  },
  {
    id: 5,
    name: "Rohan",
    pos: "ASE",
  },
];

function validate_Data(data) {
  const schema = joi.object({
    name: joi.string().required(),
    pos: joi.string().required(),
  });
  const obj = schema.validate(data);
  return obj;
}

app.get("/", (req, res) => {
  res.send(employee_List);
});

app.get("/employee/:id", (req, res) => {

  const req_Employee = employee_List.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!req_Employee)
    return res.status(404).send("No Employe with this id exsists");
  res.send(req_Employee);
});
app.post("/employee", (req, res) => {
  const { error } = validate_Data(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const new_Employee = {
    id: employee_List.length + 1,
    name: req.body.name,
    pos: req.body.pos,
  };

  employee_List.push(new_Employee);
  res.send(new_Employee);
});

app.put("/employee/:id", (req, res) => {
  const employee_To_Update = employee_List.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!employee_To_Update)
    return res.status(404).send("No Employee with this id ");

  const { error } = validate_Data(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  employee_To_Update.name = req.body.name;
  employee_To_Update.pos = req.body.pos;
  console.log(employee_To_Update);

  res.status(200).send(employee_To_Update);
});

app.delete("/employee/:id", (req, res) => {
  const employee_To_Delete = employee_List.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!employee_To_Delete)
    return res.status(404).send("No Employee with this id ");

  // const {error} = validate_Data(req.body);
  // if(error) return res.status(400).send(error.details[0].message);

  const index = employee_List.indexOf(employee_To_Delete);
  employee_List.splice(index, 1);

  res.status(200).send(employee_To_Delete);
});

const port = process.env.PORT || 3000;

app.listen(port);
