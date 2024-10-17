var removeDuplicates = function(nums) {

    const duplicatesArry = [...new Set(nums)];
    
    let k = 0;

    for(i=0; i<duplicatesArry.length; i++){
        nums[i] = duplicatesArry[i];
        k++
    }

    for(i=k; i<nums.length; i++){
        nums[i] = '_';
    }

    
    return k
};

const nums = [0,0,1,1,1,2,2,3,3,4];


const k = removeDuplicates(nums)
console.log(k);
console.log(nums)