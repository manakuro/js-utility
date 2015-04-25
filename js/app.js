var body = document.querySelector("body");

(function(){

    // formatDate
    var date = new Date(),
        format = "YYYY/MM/DD";
        result = ut.formatDate(date, format);

    output(result, "formatDate :");

    // numberFormat
    var num = 500000.12;

    // if you can use modern browser, try this.
    if (typeof Intl === "object") {
        if (typeof Intl.NumberFormat === "function") {
            var formatter = new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
            });
            formatter.format(num);
        }
    }
    result = ut.numberFormat(num, 2);
    output(result, "numberFormat :");

    function output(data, title) {
        var html = document.createElement("p");
        html.innerHTML = title + data;
        body.appendChild(html);
        console.log(title, data);
    }

}());