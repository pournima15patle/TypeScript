module.exports = {
    writeFile: function (fileName, data) {
        var fs = require('fs');
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            //console.log("The file is saved!");
        });
    },
    insertionSortInt: function (arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = parseInt(arr[i]);
            var j = i - 1;
            while (j >= 0 && parseInt(arr[j]) > key) {
                arr[j + 1] = parseInt(arr[j]);
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    },
    dayOfWeek: function (day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;
    },
    checkLeapYear: function (year1) {
        if (year1 % 400 == 0 || year1 % 4 == 0 && year1 % 100 !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
};
