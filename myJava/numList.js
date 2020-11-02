var getLastName = function(name){
    return name.lastName;
}
d3.select("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getLastName)