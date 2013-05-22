if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

        var bin_string = (num >> bit-1).toString(2);

        return parseInt(bin_string[bin_string.length-1],10);
    },

    base10: function(str) {

        return parseInt(str,2);
    },

    convertToBinary: function(num) {

        var bin_string = num.toString(2);

        while( bin_string.length < 8 ) bin_string = "0" + bin_string;

        return bin_string;
    },

    multiply: function(a, b) {

        var 
        a_dp = Math.pow(10,String(a).length - String(a).indexOf('.') - 1), 
        b_dp = Math.pow(10,String(b).length - String(b).indexOf('.') - 1); 

        return (a * a_dp) * (b * b_dp) / (a_dp * b_dp);
    }
  };
});

