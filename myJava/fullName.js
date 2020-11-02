var getFullName = function(name){
    return name.firstName + " " + name.lastName
}
d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getFullName)