//TODO: check for the type then length then value
// If we did do this, we would need to do a for loop
// instead of setting this up with a dictionary

function findDupe(myArray) {
    var emptyObject = {};
    var dupesList = [];
    var uniqueKeys = [];
    var item;

    for (i=0; i < myArray.length; i++) {
        item = myArray[i];

        if (emptyObject.hasOwnProperty(item)) {
            emptyObject[item]++;
        } else {
            emptyObject[item] = 1;
        }
    }

    uniqueKeys = Object.getOwnPropertyNames(emptyObject);

    for (i=0; i < uniqueKeys.length; i++) {
        var key = uniqueKeys[i];
        var count = emptyObject[key];

        if (count > 1){

            dupesList.push(uniqueKeys[i]);
        }
    }

    return dupesList;
}



var votesToGoEatCake = [47, 12, 19, 22, 26, 99, 30, 50, 324, 003, 44, 33, 346, 354, 44, 235, 45, 34, 44, 590, 09, 099, 0, 1, 3, 33, 999, 9];
console.log(findDupe(votesToGoEatCake));