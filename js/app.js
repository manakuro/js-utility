(function(){

    var utility = new Utility();

    // formatDate
    var date = new Date(),
        format = "YYYY/MM/DD",
        result = utility.formatDate(date, format);

    document.querySelector("body").appendChild(document.createTextNode("formatDate: " + result));
    console.log("formatDate:", result);

}());


