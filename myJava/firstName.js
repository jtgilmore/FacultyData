var getFirstName = function(firstName)
{
    return firstName.firstName;
}

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getFirstName);