function findMedian(arr: number[]): number {
    // Write your code here
    
    // sort the array 
    const sortedArray = [...arr].sort((a, b) => {
        return a - b;
    })
    
    // get the middle number
    const mid = Math.floor(sortedArray.length / 2);
    
    // check if length is even or odd, if even, add both mid values and divide by 2, if odd, return the mid value as it is
    return sortedArray.length % 2 === 0 ? (sortedArray[mid - 1] + sortedArray[mid]) / 2 : sortedArray[mid];
}
