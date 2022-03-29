function calculateRatio(value: number, arrLength: number){
    const ratio = (value/arrLength).toFixed(6);
    
    return ratio;
}

function plusMinus(arr: number[]): void {
    // Write your code here
    const arrLength = arr.length;
    
    let negatives: number = 0, positives: number = 0, zeros: number = 0;
    
    arr.forEach(element => {
        if(element === 0) {
            zeros++;
        }else if(element > 0){
            positives++;
        }else if(element < 0){
            negatives++;
        }
    })
    
    console.log(calculateRatio(positives, arrLength));
    console.log(calculateRatio(negatives, arrLength));
    console.log(calculateRatio(zeros, arrLength));
}