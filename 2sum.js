/* 
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        const pair = target - curNum;
        if (map[pair] !== undefined) {
            return [map[pair], i];
        }
        pair[curNum] = i;
    }

    return [];
}