
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

// Filter dataset
var button = d3.select(".btn");

button.on("click", filterTable)

function filterTable() {

    d3.event.preventDefault();

    d3.select("tbody").remove();
    d3.select(".table").append("tbody");

    var inputElement = d3.select("#InputDate");
    var inputValue = inputElement.property("value");

    var filteredData = data.filter(entry => {
        if (inputValue === ''){
            return true;
        }else{
        return entry.datetime === inputValue;
        }
    });

    init(filteredData);
};


