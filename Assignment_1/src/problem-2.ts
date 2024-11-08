{
    //
    function removeDuplicates (nums:number[]): number[]{
        const uNumbers: number[]= [];

        nums.forEach(num => {
            if(!uNumbers.find(uNum => uNum === num)){
                uNumbers.push(num)
            }
        })
        return uNumbers;
    }

    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

    //
}