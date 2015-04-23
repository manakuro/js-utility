'use strict';

class Utility {
    
    /**
     *  formatting date
     *
     *  @method formatDate 
     *  @param  obj     $date   (instance of Date class)
     *  @param  string  $format (formatting ex.)YYYY/MM/DD )
     *  @param  obj     $_options {
     *                      bool $weekday (add to weekday)
     *  }
     *  @return string $format (formated date) 
     */
    formatDate (date, format, _options) {
        var options = _options || {},
            days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

        if ( !_.isDate(date) || date == 'Invalid Date' ) return "---";

        format = format || "YYYY-MM-DD";
        format = format.replace(/YYYY/g, date.getFullYear());
        format = format.replace(/YY/g, (date.getFullYear()).toString().slice(-2));
        format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
        format = format.replace(/M/g, (date.getMonth() + 1).toString());
        format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
        format = format.replace(/D/g, (date.getDate()).toString());
        format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
        format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
        format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));

        if ( options.weekday ) {
            format += "(" + days[date.getDay()] + ".)";
        }

        return format;

    }
}