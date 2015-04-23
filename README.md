# Js-Utility

These are my functional helpers.
You can report bugs and discuss features on issues page.

### formatDate
Returns a optionally string formatted date according to the given format string.
        
    formatDate(new Date(), "YYYY/MM/DD") → "2015/04/01"
    formatDate(new Date(), "YYYY-M-D") → "2015-4-1"
    formatDate(new Date(), "M/D/YY", {weekday: true}) → "4/1/15(sun.)"
