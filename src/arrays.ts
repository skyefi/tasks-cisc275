/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //If length is 2 or longer, return an array of the first and last elements
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    //If length is 1, return an array of the first/only element twice
    else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    //If array is empty, return another empty array
    else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //Map array, multiplying each entry by 3
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //For each entry, check if it parses to a string, and return 0 if it doesn't
    return numbers.map((numStr: string): number =>
        isNaN(parseInt(numStr)) ? 0 : parseInt(numStr)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //Define mapping function that properly pases each string to a number
    const strMoneyToNum = (amount: string): number => {
        //If the first char is a $, remove it
        if (amount.charAt(0) === "$") {
            amount = amount.substring(1);
        }

        //Parse string to int
        let num: number = parseInt(amount);

        //If string did not parse properly, return 0
        if (isNaN(num)) {
            num = 0;
        }

        return num;
    };

    //Return a mapped array using the mapping function
    return amounts.map(strMoneyToNum);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //Set all strings ending in "!" to uppercase
    const toUpper: string[] = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );

    //Filter out all strings ending in "?"
    return toUpper.filter((message: string): boolean => !message.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //Filter the array to only include the short words
    const shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4
    );

    //Return the length of the new array
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //Check if every string in the array is included in "red blue green"
    return colors.every((color: string): boolean =>
        "red blue green".includes(color)
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //Check for empty array
    if (addends.length === 0) {
        return "0=0";
    }

    //Calculate sum
    const sum: number = addends.reduce(
        (total: number, add: number): number => total + add
    );

    //Convert sum to string, and use Array.join to append the addends to string
    const strSum = sum.toString() + "=";
    return strSum + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //Check for empty string
    if (values.length < 1) return [0];

    //Calculate sum before negative number, and find negative number index
    let sum = 0;
    let firstNegIdx: number = values.findIndex((num: number): boolean => {
        if (num >= 0) sum += num;
        return num < 0;
    });

    //If there are no negative numbers, treat the last number as the negative number
    //(for splicing location)
    if (firstNegIdx === -1) firstNegIdx = values.length - 1;

    //Create a copy of the values array, and splice in the sum
    const valuesWithSum = [...values];
    valuesWithSum.splice(firstNegIdx + 1, 0, sum);

    return valuesWithSum;
}
