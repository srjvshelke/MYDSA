function binarysearch(array, target,start,end) {
    var mid = Math.floor((start + end) / 2);

    if (array[mid] == target) {
        return mid;
    } else if (array[mid] < target) {
        start = mid + 1;
       return  binarysearch(array,target,start,end);
    } else {
        end = mid - 1;
       return  binarysearch(array,target,start,end);

    }
}

let array= [1,4,6,7,78];

var ans = binarysearch(array,7,0,array.length-1);
console.log(ans);
