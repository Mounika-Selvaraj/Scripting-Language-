/*Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.*/

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};

let nums1 = JSON.parse('[null, {}, 3]');
console.log(nums1.last()); 
let nums2 = JSON.parse('[]');
console.log(nums2.last());  

 
