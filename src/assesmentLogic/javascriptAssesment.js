import React, { useEffect } from "react";

export default function JavascriptAssesment() {
    useEffect(() => {
        findDuplicateArray(); // calling function
        findLongestChain();
    });

    // 1. find duplicates and same values in two array
    const findDuplicateArray = () => {
        var fullWordList = ["1", "2", "3", "4", "5"];
        var wordsToRemove = ["1", "2", "3"];
        const res = wordsToRemove.filter((x) => fullWordList.includes(x)); // filtering the same values from array
        console.log(res);
    };

    // 2.longest chain of word in
    const findLongestChain = () => {
        const word = "00000111110101001111100001001";

        let lettersArr = word.split("");
        let currentSequence = [];
        let maxSequence = [];
        //For loop
        for (let index = 0; index < lettersArr.length; index++) {
            let element = lettersArr[index];
            currentSequence = [element];

            for (let i = index + 1; i < lettersArr.length; i++) {
                if (lettersArr[index] == lettersArr[i]) {
                    //pushing array if matched
                    currentSequence.push(lettersArr[index]);
                } else {
                    break;
                }
            }
            //comparing arrays 
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
        }
        let newWord = maxSequence.join("");
        console.log(newWord, newWord.length);
    };

    // logic for below code 
    // 3.
    let obj1 = { "greeting": "hello" }; // create new object with property 'greeting' and set to the value "hello". object is stored in memory
    let obj2 = obj1; //here obj1 and obj2 and reference to thew same object in memory
    obj1["greeting"] = "Bye"; // changed property value to "Bye" 
    console.log(obj1);
    console.log(obj2); // as object to is pointing to same object its value is "Bye" 

    // 4.
    console.log("7" > 7) //  in javascript when we compare two values using greater than operator , string is converted to integer , so while comapring '7' with 7 result will be false
    console.log("2" > "21")// here both values are string , hence javacript compares both string by unicode values . intially it will compare "2" with "2", then it will move forward to "1" and "2 ", as 2 is greater than 1 result will be true
    console.log("KL" > "S")// here as both are string it will comapre unicode value. "K" has greater unicode value than "s",so comaprison will be false.

    //5.
    function average(a, b) {
        return a + b / 2;
    }
    console.log(average(2, 1));
    // 2+1/2 
    // division before addition
    // 2+0.5
    // output will be 2.5
    return <div>javascriptAssesment</div>;
}
