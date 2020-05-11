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

// Set up filters //
// -----------------------------------------------//
// get unique values of an array
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
};

// get unique list of states from dataset
var dataStates = data.map(entry => entry.state);
var states = dataStates.filter(onlyUnique);

var stateFormList = d3.select("#InputState");

// get unique list of countries from dataset
var dataCountries = data.map(entry => entry.country);
var countries = dataCountries.filter(onlyUnique);

var countryFormList = d3.select("#InputCountry");

// get unique list of shapes from dataset
var dataShapes = data.map(entry => entry.shape);
var shapes = dataShapes.filter(onlyUnique);

var shapeFormList = d3.select("#InputShape");

// Set up filters
states.forEach(state => {
    stateFormList.append("option").text(state);
});

countries.forEach(country => {
    countryFormList.append("option").text(country);
});

shapes.forEach(shape => {
    shapeFormList.append("option").text(shape);
});
//------------------------------------------------------//

// Filter table based on selections
var button = d3.select(".btn");

button.on("click", filterTable);

function filterDate(entry) {
    return entry.datetime === dateInputValue
};

function filterTable() {

    d3.event.preventDefault();

    d3.select("tbody").remove();
    d3.select(".table").append("tbody");

    var dateInputValue = d3.select("#InputDate").property("value");
    var cityInputValue = d3.select("#InputCity").property("value");
    var stateInputValue = d3.select("#InputState").property("value");
    var countryInputValue = d3.select("#InputCountry").property("value");
    var shapeInputValue = d3.select("#InputShape").property("value");

    // Set up multiple filters for multiple conditions
    function filterDate(entry) {
        if (dateInputValue === ''){
            return true;
        }else{
            return entry.datetime === dateInputValue;
        }
    };

    function filterCity(entry) {
        if (cityInputValue === ''){
            return true;
        }
        else{
            return entry.city === cityInputValue;
        }
    };

    function filterState(entry) {
        if (stateInputValue === 'all'){
            return true;
        }
        else{
            return entry.state === stateInputValue;
        }
    };

    function filterCountry(entry) {
        if (countryInputValue === 'all'){
            return true;
        }
        else{
            return entry.country === countryInputValue;
        }
    };

    function filterShape(entry) {
        if (shapeInputValue === 'all'){
            return true;
        }
        else{
            return entry.shape === shapeInputValue;
        }
    };

    var filteredData = data.filter(filterDate).filter(filterCity).filter(filterState).filter(filterCountry).filter(filterShape);
    
    init(filteredData);  
};


