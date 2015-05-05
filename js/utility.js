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
     *  @param  {Obj}     $date   (instance of Date class)
     *  @param  {String}  $format (formatting ex.)YYYY/MM/DD )
     *  @param  {Obj}     $_options {
     *                      {Bool} $weekday (add to weekday)
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
     *  @param  {Int} || {Float}  $num      (number)
     *  @param  {Boolean}　　　    $decimal  ()
　　　*  @return {String}          $num      (formatted number)     
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
     *  @param  {Int} 　　 $num   ()
     *  @param  {Int} 　　 $digit ()
     *  @return {String}  $num　　()
     */
    ut.zeroFill = function(num, digit) {
        var i;
        num = ( typeof num !== "string" ) ? num.toString(10): num;

        for (i = 0; i < digit - 1; i++) {
            num = "0" + num;                             
        }

        return num.slice(-digit);
    };

    /**
     *  Returns a number rounded given decimal places
     *
     *  @method roundOff
     *  @param {Int} || {Float}     $num (The number to be rounded)
     *  @param {Int}                $decimal (round place)
     *  @return {Int} || {Float}    $num (A Number)
     */
    ut.roundOff = function(num, decimal) {
        var splited,
        result,
        degit;

        if ( num === "" || typeof num === "undefined") return num;

        decimal = decimal || 2;
        degit = Math.pow(10, decimal);

        return Math.round(num * degit) / degit;
    };

    /**
     * Returns a escaped jQuery selector
     *
     * @method escapeJQuerySelector
     * @param {String} $str (The String to be escaped)
     * @return {String} $str
     */
    ut.escapeJQuerySelector = function(str) {
        if ( typeof str === "undefined" ) return str;
        return str.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, '\\$&');
    };

    /**
     *  Returns a formated time in (minutes : seconds)
     *
     *  @method secToMini 
     *  @param  {Number} time (seconds)
     *  @return {String} minutes : seconds 
     */
    ut.secToMini = function(time, delimitor) {
        var minitues = Math.floor(Math.round(time) / 60),
            seconds = this.zeroFill(Math.floor(time - minitues * 60), 2);
        
        delimitor = delimitor || ":";
        return minitues + delimitor + seconds;
    };

}.call(this));