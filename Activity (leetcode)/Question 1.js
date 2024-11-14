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
