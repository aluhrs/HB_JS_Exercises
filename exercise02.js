/*
## Return a list of fibonacci numbers that go up to but not beyond the maximum number provided
def fibonacci_set(max):
    if max > 1:
        fib_list = [1]
        current_fib = 1
        while current_fib < max:
            fib_list.append(current_fib)
            current_fib = fib_list[-1] + fib_list[-2]

        return fib_list
    else:
        return [1, 1]

## Tell me if a number is even
def even(n):
    return n % 2 == 0

print sum(filter(even,fibonacci_set(4000000)))
*/

function fibonacciSet(max) {
    //start list with 1 and add to list by index of length
    if (max > 1) {
        var fibList = [1];
        var currentFib = 1;
        while (currentFib < max) {
            fibList.push(currentFib);
            currentFib = fibList[fibList.length-1] + fibList[fibList.length-2];
        }
        return fibList;
    } else {
        return [1, 1];
    }
}

function even(n) {
    //return numbers from list only if they are evenly divisible by 2
    return n % 2 === 0;
}

function sum(fibList){
    //sums list by initializing at 0 and iterating through list until the end and 
    // add each element in the list to the total
    var total = 0;
    for (var i = 0; i < fibList.length; i++){
        total += fibList[i];
    }
    return total;
}


function filter(f1, f2){
    // returns a list of elements from a set of iterables
    // from a function when the function returns true
    var evenList = [];
    for (i = 0; i < f2.length; i++){
        if (f1(f2[i]) === true){
            evenList.push(f2[i]);
        }
    }
    return evenList;
}

console.log(sum(filter(even,fibonacciSet(4000000))));