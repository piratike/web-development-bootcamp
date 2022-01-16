/* Function that returns if a given year is leap or not */

function isLeap(year) {
    
    /**************Don't change the code above****************/    
    
    if(year % 4 !== 0) {
        return 'Not leap year.';
    }

    else if(year % 100 !== 0) {
        return 'Leap year.';
    }

    else if(year % 400 !== 0) {
        return 'Not leap year';
    }

    else {
        return 'Leap year';
    }
    
    /**************Don't change the code below****************/    
    
    }
