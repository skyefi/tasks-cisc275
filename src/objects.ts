import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    //Returns a Question object with the given arguments and defaults
    return {
        id,
        name,
        body: "",
        type,
        options: [],
        expected: "",
        points: 1,
        published: false
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    //Compares question.expected to answer, both trimmed and set to lowercase
    return (
        question.expected.trim().toLowerCase() === answer.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    //Returns true if question is a short answer type
    if (question.type === "short_answer_question") {
        return true;
    }

    //Returns true if "answer" is in the questions options
    return question.options.includes(answer);
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    //Parses question id to string, adds ": ", then adds the first 10 chars of question.name
    //If question.name.length <= 10, just returns the name. Otherwise, takes substring
    return (
        question.id.toString() +
        ": " +
        (question.name.length > 10
            ? question.name.substring(0, 10)
            : question.name)
    );
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    //Creates qStr string, starting with the #
    let qStr = "# ";

    //Appends the name and body, separated by a newline
    qStr += question.name + "\n" + question.body;

    //If the question has options, adds and formats them each, starting
    //with a newline and "- ", and using the join function to convert each
    //array entry, with a newline and "- " between each
    if (question.options.length > 0) {
        qStr += "\n- " + question.options.join("\n- ");
    }

    return qStr;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    //Copy question with spread operator, updating name
    return { ...question, name: newName };
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    //Copy question with spread operator, setting published to the opposite of the original
    return { ...question, published: !question.published };
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    //Copy oldQuestion using spread operator, modifying fields necesary
    //Also duplicates 'options' array for full deep copy
    return {
        ...oldQuestion,
        id: id,
        name: "Copy of " + oldQuestion.name,
        published: false,
        options: [...oldQuestion.options]
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    //To copy and append the original "options", use the spread operator to create
    //a new array, and add newOption to the end!
    return { ...question, options: [...question.options, newOption] };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    //Copy/spread the content question, modifying id, name, published, and points as needed
    return {
        ...contentQuestion,
        id: id,
        name: name,
        published: false,
        points: points
    };
}
