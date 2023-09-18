/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
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
    const strMoneyToNum = (amount: string): number => {
        if (amount.charAt(0) === "$") {
            amount = amount.substring(1);
        }

        let num: number = parseInt(amount);

        if (isNaN(num)) {
            num = 0;
        }

        return num;
    };

    return amounts.map(strMoneyToNum);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const toUpper: string[] = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );

    return toUpper.filter((message: string): boolean => !message.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4
    );

    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
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
    if (addends.length === 0) {
        return "0=0";
    }

    const sum: number = addends.reduce(
        (total: number, add: number): number => total + add
    );

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
