if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

        return arr.indexOf(item);
    },

    sum : function(arr) {

        for(var i = arr.length, array_sum = 0; i--; array_sum += arr[i]);

        return array_sum;
    },

    remove : function(arr, item) {

        var 
        new_arr = [],
        arr_length = arr.length;

        for(var i = -1; ++i < arr_length;) {
            if( arr[i] !== item ) {
                new_arr.push(arr[i]);
            }
        }

        return new_arr;
    },
    
    removeWithoutCopy : function(arr, item) {

        var i = 0;
        var arr_length = arr.length;

        while( i < arr_length ) {
            if( arr[i] === item ) {
                arr.splice(i,1);
                arr_length--;
            }
            else {
                i++;
            }
        }

        return arr;
    },

    append : function(arr, item) {

        arr.push(item);
        return arr;
    },

    truncate : function(arr) {

        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {

        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {

        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {

        var counter = 0;

        for( var i = arr.length; i--; ) {
            if( arr[i] === item ) {
                counter++;
            }
        }

        return counter;
    },

    duplicates : function(arr) {

        var
        arr_length = arr.length,
        dup_arr = [],
        dup_arr_last_index = -1;

        arr.sort();

        for( var i = 0, last_num = arr[0]; i++ < arr_length; ) {

            if( arr[i] === last_num && arr[i] !== dup_arr[dup_arr_last_index] ) {
                dup_arr.push(arr[i]);
                dup_arr_last_index++;
            }

            last_num = arr[i];
        }

        return dup_arr;
    },

    square : function(arr) {

        var
        arr_length = arr.length,
        square_arr = [];

        arr.forEach( function(num) {
            square_arr.push(num*num);
        });

        return square_arr;
    },

    findAllOccurrences : function(arr, target) {

        var occurences = [];

        for( var i = arr.length; i--; ) {
            if( arr[i] == target ) {
                occurences.push(i);
            }
        }

        return occurences;
    }
  };
});
