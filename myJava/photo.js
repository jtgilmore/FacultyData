d3.select("body")
.selectAll("div")
.data(employees)
.enter()
.append("img")
.attr("src", function(pictures){
    return pictures.photo;
})