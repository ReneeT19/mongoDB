db.dropDatabase()

use practice

db.mycollection.insert({
         "key": "value",
         "greeting": "Hello World",
         "number": 42,
         "true": true
     })

db.mycollection.find()
db.mycollection.find().pretty()

db.mycollection.insert({
         "Hello": "World"
     })

db.mycollection.find().pretty()

db.othercollection.insert({
    "objectIds": ["5f9839d2b2c3cf9c0b8f42d6"]
})

db.mycollection.insertMany([
    {"record":1},
    {"record":2},
    {"record":3}
])

db.mycollection.insertOne({
    "record":4
})

db.mycollection.insertOne({
    "record":4
})


// Run this command to set up the test database
db.test.insertMany([
   {
       "name":"",
       "description":"",
       "relational": true,
       "tags":[""],
       "users":0
   },
   {
       "name":"MySQL",
       "description":"MySQL is an open-source relational database management system.",
       "relational": true,
       "tags":["mysql", "relational","open-source", "free"],
       "gui":"MySQL Workbench",
       "users":137
   },
   {
       "name":"PostgreSQL",
       "description":"PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
       "relational": true,
       "tags":["postgresql","object-relational", "open-source", "free"],
       "users":109
   },
   {
       "name":"Microsoft SQL Server",
       "description":"Microsoft SQL Server is a relational database management system developed by Microsoft.",
       "relational": true,
       "tags":["sql server", "relational", "microsoft", "free"],
       "users":113
   },
   {
       "name":"Apache Cassandra",
       "description":"Apache Cassandra is a free and open-source, distributed, wide column store, NoSQL database management system",
       "relational": false,
       "tags":["cassandra", "non-relational", "columnar", "apache", "open-source", "free"],
       "type":"columnar",
       "users":82
   },
   {
       "name":"Neo4j",
       "description":"Neo4j is a graph database management system developed by Neo4j, Inc.",
       "relational": false,
       "tags":["neo4j", "non-relational","graph database", "open-source", "free"],
       "type":"graph",
       "language":"GraphQL",
       "users":94
   }
])

db.test.find().pretty()

// Further practice
db.test.insertOne({
    "name": "MongoDB",
    "description":"MongoDB is a cross-platform document-oriented database program.",
    "relational": false,
    "tags":["mongodb", "non-relational", "document-database", "open-source", "free"],
    "type":"document",
    "history":{
        "developer":"MongoDB Inc.",
        "release":"2009"
    },
    "users":11
})

db.test.find({"name": "MongoDB"}).pretty()
db.test.find({"relational": true}).pretty()

db.test.update({"name": "MongoDB"}, {
    "age": 12
})

db.test.update({"age":12}, {
    $set: {
    "name": "MongoDB",
    "description":"MongoDB is a cross-platform document-oriented database program.",
    "relational": false}
})

db.test.updateOne ({"name": "MongoDB"},{
    $set: {
        "age": "16",
        "gui": "Compass"}
})

db.test.find({"_id":ObjectId("5f9840e9b2c3cf9c0b8f42e3")}).pretty()


db.test.updateOne({"_id": ObjectId("5f9840e9b2c3cf9c0b8f42e3")}, {
    $push:{
        "tags": "NoSQL"
    }
})

db.test.updateOne({"_id": ObjectId("5f9840e9b2c3cf9c0b8f42e3")}, {
    $set:{
        "tags.$": "NoSQL"
    }
})

db.test.find({"relational": false}, {
    "_id": 0, 
    "name":1,
"description":1
}).pretty()

db.test.find({"relational": false}, {
    "name":1,
"description":1
}).pretty()

//Booleans
db.test.find({
    $and: [
    {"relational": true},
    {"name":"MySQL"}
    ]
}).pretty()

// find users where json greater than 100
db.test.find({"users": {$gt: 100}}).pretty()
// find tags where json document that has matching values in an array
db.test.find({"tags": {$in: ["free"]}}).pretty()

db.test.find().skip(3).pretty()
db.test.find().sort({"name": 1}).pretty() //1 ascending; -1 descending
db.test.find({}) //you can pass in an empty object to find
db.test.find({}).count()
