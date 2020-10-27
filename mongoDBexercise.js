db.dropDatabase()

use exercise

db.employees.insertMany ([
{
    "employeeId": "1001",
    "name": "Renee Thomsen",
    "jobTitle": "Java Developer",
    "office": "Raleigh",
    "salary": 100000
},
{
    "employeeId": "1002",
    "name": "Erik Thomsen",
    "jobTitle": "Lead DevOps",
    "office": "Seattle",
    "salary": 200000
},
{
    "employeeId": "1003",
    "name": "Soren Thomsen",
    "jobTitle": "Cute Baby",
    "office": "Youngsville",
    "salary": 500
},
{
    "employeeId": "1004",
    "name": "Carol Thomsen",
    "jobTitle": "Manager",
    "office": "Wake Forest",
    "salary": 25000
},
{
    "employeeId": "1005",
    "name": "Germund Thomsen",
    "jobTitle": "Security Guard",
    "office": "Columbia",
    "salary": 55000
}
])
// Read all the documents from Employees collection
db.employees.find().pretty()


db.locations.insertMany([
{
    "locationId": "1",
    "locationCity": "San Francisco",
    "locationCountry": "US"
},
{
    "locationId": "2",
    "locationCity": "New York",
    "locationCountry": "US"
},
{
    "locationId": "3",
    "locationCity": "Shanghai",
    "locationCountry": "China"
}
])

db.locations.find().pretty()

// Update the city = “San Francisco” to “Dallas” in Location collection
db.locations.update({"locationCity": "San Francisco"}, {
    $set: {"locationCity": "Dallas"}
})

// Update the location collection so all documents have the same country
db.locations.updateMany({},
    {$set: {
        "locationCountry": "US"}
})

// Sort the employees based on their salary in descending order
db.employees.find().sort({"salary": -1}).pretty() 

// Find the top 3 highest paid employees
db.employees.find().sort({"salary": -1}).limit(3).pretty() 

// Delete any one collection and verify it is not present in the database
db.locations.remove()
// Count the number of employees with JobTitle = “Manager”
db.employees.find({"jobTitle": "Manager"}).count()