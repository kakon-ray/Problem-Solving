var removeElement = function(nums, val) {
    let k = 0;
    for(i=0; i<nums.length; i++){
       if(nums[i] !== val){
        nums[k] = nums[i];
        k++
       }
    }
    
    for(j=k; j<nums.length; j++){
        nums[j] = '_';
    }

    return k;
};

nums = [3,2,2,3], val = 3

const k = removeElement(nums,val);

console.log(k);
console.log(nums);
