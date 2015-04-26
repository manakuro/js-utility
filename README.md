# Js-Utility

These are my functional helpers.
You can report bugs and discuss features on issues page.

### formatDate
Returns a optionally string formatted date according to the given format string.
        
    formatDate(new Date(), "YYYY/MM/DD") → "2015/04/01"
    formatDate(new Date(), "YYYY-M-D") → "2015-4-1"
    formatDate(new Date(), "M/D/YY", {weekday: true}) → "4/1/15(sun.)"

### numberFormat
Returns a formatted numbers as money(comma as the thousands separator).
        
    numberFormat(500000) → "500,000"
    numberFormat(500000, 2) → "500,000.00"
    numberFormat(500000.11) → "500,000"
    numberFormat(500000.11, 2) → "500,000.11"

### zeroFill
Returns pad digits with leading zeros in a string.

    zeroFill(10, 4) → "0010"