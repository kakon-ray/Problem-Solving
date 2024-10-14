var merge = function (nums1, m, nums2, n) {
    const margearray = [...nums1.slice(0,m), ...nums2.slice(0,n)]
    margearray.sort((a,b) => a - b);
    console.log(margearray);
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
let nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
