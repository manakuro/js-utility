'use strict';

(function(){
    var self = this,
        ut = function() {},
        prototype = Object.prototype,
        toString  = prototype.toString;

    self.ut = ut;

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
    ut.formatDate = function(date, format, _options) {
        var options = _options || {},
            days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

        if (toString.call(date) !== "[object Date]" || date == 'Invalid Date') return "---";

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
    };

    /**
     *  Returns a formatted numbers as money(comma as the thousands separator)
     *  support multiple decimal patterns.
     *
     *  @method number
     *  @param  int || float  $num      (number)
     *  @param  boolean　　　  $decimal  ()
　　　*  @return string        $num      (formatted number)     
     */
    ut.numberFormat = function(num, decimal){
        var splited = [];

        if (num === "" || typeof num === "undefined" || num === null) return num;

        num = (typeof num !== 'string') ? num.toString(10) : num;
        splited = num.split(".");

        if (splited[0].length > 3) {
            splited[0] = splited[0].toString().replace(/([\d]+?)(?=(?:\d{3})+$)/g, "$1,");
        }

        if (splited[1]) {
            splited[1] = ( splited[1].length > decimal ) ? splited[1].slice(0, decimal) : splited[1];
        } else {
            splited[1] = ut.zeroFill(0, decimal);
        }

        return (typeof decimal !== "undefined") ? splited[0] + "." + splited[1] : splited[0];
    };

    /**
     *  Returns pad digits with leading zeros in a string
     *
     *  @method zeroFill
     *  @param  int 　　 $num   ()
     *  @param  int 　　 $digit ()
     *  @return string  $num　　()
     */
    ut.zeroFill = function(num, digit) {
        var i;
        num = ( typeof num !== "string" ) ? num.toString(10): num;

        for (i = 0; i < digit - 1; i++) {
            num = "0" + num;                             
        }

        return num.slice(-digit);
    };

}.call(this));