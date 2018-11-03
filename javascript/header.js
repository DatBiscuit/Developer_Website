// function to setup the months to load on the home page
$(function () {
    setupMonthsToLoad();
    loadMonthsUp();
});


//Variables of months and years, needs to be updated with all the months as well as years when they come
var MONTHS = (function () {
    var months = ["Feburary", "January", "December", "November", "October"];
    var years = ["19", "18"];

    return {
        getMonths: function () {
            return months;
        },
        getYears: function () {
            return years;
        }
    };
})();

//Sets the months and years all in the months divider
function setupMonthsToLoad() {
    //Create the variables well use
    var currentYears = MONTHS.getYears();
    var currentMonths = MONTHS.getMonths();
    var monthsParent = document.getElementById("months");

    for(i = 0; i < currentYears.length; i++) {
        for(j = 0; j < currentMonths.length; j++) {
            var monthName = currentMonths[j] + currentYears[i];
            
            //if the month doesnt exist we shouldn't put it in
            var url = checkForHTML('months/' + monthName + '.html');
            if(url != true) {
                continue;
            } 

            //Create and add the div
            addToMonths(monthName, monthsParent);
           
            //Create and add to the links
            addToLinks(currentMonths[j], currentYears[i]);
        }
    }
}


//To Do
function addToLinks(month, year) {
    var parent = document.getElementById('links');
    var newA = document.createElement('A');
    newA.setAttribute('href', '#');
    newA.innerHTML = month + " 20" + year;
    newA.addEventListener('click', function() {
        show(month+year);
    });

    var newItem = document.createElement('li');
    newItem.appendChild(newA);
    parent.appendChild(newItem);
}

// Add to the months divider
function addToMonths(month, parent) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', month);
    newDiv.setAttribute('class', "spacer");
    parent.appendChild(newDiv);
}

function loadMonthsUp() {
    var months = document.getElementById("months");
    var listOfMonths = months.childNodes;
    for(i = 0; i < listOfMonths.length; i++) {
        loadMonth(listOfMonths[i].id);
    }
}

// Check if the html file exists
function checkForHTML(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

// loads the html of a specific month
function loadMonth(monthName) {
    var idMonth = '#' + monthName;
    var htmlMonth = "months/" + monthName + '.html';
    $(idMonth).load(htmlMonth);
}

// Removes all the months and shows only the month that is clicked in the archives column
function show(shown) {
    $('#months').remove();
    var divMonth = document.getElementById("singlemonth").getElementsByTagName("div");
    divMonth[0].id = shown;
    loadMonth(shown);
}
