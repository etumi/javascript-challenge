
// Populate table with data
function init(inputData) {
    inputData.forEach(entry => {
        var row = d3.select("tbody").append("tr");
        Object.values(entry).forEach(value => {
            var dataEntry = row.append("td");
            dataEntry.text(value);
        });
    });
};

init(data);

// Filter
// var form = d3.select("#InputDate");
var button = d3.select(".btn");

button.on("click", filterTable)

function filterTable() {

    d3.event.preventDefault();

    d3.select("tbody").remove();

    d3.select(".table").append("tbody");

    var inputElement = d3.select("#InputDate");
    var inputValue = inputElement.property("value");
    console.log('hello');
    console.log(inputValue);

    console.log(data);
    var filteredData = data.filter(entry => entry.datetime === inputValue);
    console.log(filteredData);
    init(filteredData);
    
};


