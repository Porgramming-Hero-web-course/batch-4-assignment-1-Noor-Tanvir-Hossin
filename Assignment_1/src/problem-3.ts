{
    //
    function countWordOccurrences(sent: string, word: string): number {
        const words = sent.toLowerCase().split(" ");
        const mainWord = word.toLowerCase();
        let count = 0;    
        for (const w of words){
            if (w === mainWord){
                count++;
            }
        }    
        return count;    }
    
    console.log(countWordOccurrences("I love typescript", "typescript"));






    //
}