/*You are given an integer n indicating there are n specialty retail stores. There are m product types of varying amounts,
which are given as a 0-indexed integer array quantities, where quantities[i] represents the number of products of the ith product type.
You need to distribute all products to the retail stores following these rules:
A store can only be given at most one product type but can be given any amount of it.
After distribution, each store will have been given some number of products (possibly 0). Let x represent the maximum number of
products given to any store. You want x to be as small as possible, i.e., you want to minimize the maximum number of products that are given to any store.
Return the minimum possible x.*/

function minimizedMaximum(n, quantities) {   
    let left = 1;
    let right = Math.max(...quantities);

    
    function canDistribute(x) {
        let requiredStores = 0;
        for (let q of quantities) {
            requiredStores += Math.ceil(q / x); 
        }
        return requiredStores <= n;
    }
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) {
            right = mid; 
        } else {
            left = mid + 1; 
        }
    }
    return left;
}

console.log(minimizedMaximum(6, [11, 6])); 
console.log(minimizedMaximum(7, [15, 10, 10])); 
console.log(minimizedMaximum(1, [100000])); 
