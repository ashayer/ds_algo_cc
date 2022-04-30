export const insertionGeneralQuiz = [
  {
    question: "Which of the following is NOT true about Insertion Sort",
    type: 0,
    options: [
      { answer: "Has an average time complexity of n\u00B2", correct: false },
      { answer: "Stable and in-place", correct: false },
      { answer: "Best case of n", correct: false },
      { answer: "Efficient on all datasets", correct: true },
    ],
  },
  {
    question:
      "What would be the result of sorting the tuples by their letter? " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Insertion Sort is in-place but Unstable",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Check all that apply to Insertion Sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Efficient on small datasets", correct: true },
      { answer: "Sorts in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

export const insertionCodeQuiz = [
  {
    question: "Which of the following is true about Insertion Sort?",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop?",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or equal to the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent WHILE loop for the inner loop?",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The ith and jth values are swapped in the algorithm.",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
];

export const selectionGeneralQuiz = [
  {
    question:
      "What would be the output of Selection sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Selection Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Check all that apply to Selection Sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space complexity of O(n\u00B2)", correct: false },
      { answer: "More efficient that Insertion Sort", correct: false },
      { answer: "Will maintain the order of the original list", correct: false },
    ],
  },
  {
    question: "Which of the following is true about Selection Sort",
    type: 0,
    options: [
      { answer: "Has a best case of n\u00B2", correct: true },
      { answer: "Has a best case of n", correct: false },
      { answer: "Is stable and in-place", correct: false },
      { answer: "Swaps the ith and jth indexes", correct: false },
    ],
  },
];

export const selectionCodeQuiz = [
  {
    question: "Which of the following is true about Selection Sort?",
    type: 0,
    options: [
      { answer: "The elements to the right of the ith iterator are untouched", correct: false },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: true },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop?",
    type: 1,
    options: [
      { answer: "J reaches the last element", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "J finds the minimum element", correct: false },
      { answer: "J becomes 0", correct: false },
    ],
  },
  {
    question: "Each swap moves an element into its final position.",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "The ith and jth elements are swapped.",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
];

export const mergeGeneralQuiz = [
  {
    question:
      "What would be the output of Merge sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },

  {
    question: "Merge Sort splits the list into two halves",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Which of the following is true about Merge Sort?",
    type: 0,
    options: [
      {
        answer: "Its space complexity is constant",
        correct: false,
      },
      { answer: "Has a worst time complexity of n\u00B2", correct: false },
      { answer: "It is stable but out-of-place", correct: true },
      { answer: "Its worst case is slower than its best case", correct: false },
    ],
  },
  {
    question: "Check all that apply to Merge sort",
    type: 1,
    options: [
      { answer: "Will maintain the order of the original list", correct: true },
      { answer: "Quadratic", correct: false },
      { answer: "Requires extra space proportional to size of the list", correct: true },
      { answer: "Utilizes divide and conquer", correct: true },
    ],
  },
];

export const mergeCodeQuiz = [
  {
    question: "What condition stops the recursive calls?",
    type: 0,
    options: [
      { answer: "The right index is less than or equal to the left index", correct: true },
      { answer: "The left index is less than the middle index", correct: false },
      { answer: "The left index is less than the right index", correct: false },
      { answer: "The right index is greater than the middle index", correct: false },
    ],
  },
  {
    question: "What are the parameters passed into the MERGE function?",
    type: 1,
    options: [
      { answer: "An array", correct: true },
      { answer: "A left index", correct: true },
      { answer: "A right index", correct: true },
      { answer: "A middle index ", correct: true },
    ],
  },
  {
    question: "In the MERGE function what is i and j initialized to.",
    type: 0,
    options: [
      { answer: "i = 0 j = right index,", correct: false },
      { answer: "i = left j = middle", correct: false },
      { answer: "i = left + 1 j = middle", correct: false },
      { answer: "i = left j = middle + 1", correct: true },
    ],
  },
  {
    question: "The created temp array is updated with values from the parameter array",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
];

export const quickGeneralQuiz = [
  {
    question: "QUIQUICCUQICUQICUQIQC",
    type: 0,
    options: [
      { answer: "Quick sort has a best case of n", correct: false },
      { answer: "Quick sort is stable and in-place", correct: false },
      { answer: "Quick sort has a best case of n\u00B2", correct: true },
      { answer: "Quick sort is efficient on smaller datasets", correct: false },
    ],
  },
  {
    question:
      "What would be the output of Quick sort if we sorted the tuples by their letter. " +
      "(C,1) (B,3) (A,2) (A,1) (B,1)",
    type: 0,
    options: [
      { answer: "(A,1) (A,2) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,2) (A,1) (B,3) (B,1) (C,1)", correct: true },
      { answer: "(A,2) (A,1) (B,1) (B,3) (C,1)", correct: false },
      { answer: "(A,1) (B,1) (C,1) (A,2) (B,3) ", correct: false },
    ],
  },
  {
    question: "Quick Sort is in-place but unstable",
    type: 0,
    options: [
      { answer: "true", correct: false },
      { answer: "false", correct: true },
    ],
  },
  {
    question: "Check all that apply to Quick sort",
    type: 1,
    options: [
      { answer: "Has a space complexity of O(1)", correct: true },
      { answer: "Has a space tune of O(n\u00B2)", correct: true },
      { answer: "Sorts a list in-place", correct: true },
      { answer: "Will maintain the order of the original list", correct: true },
    ],
  },
];

export const quickCodeQuiz = [
  {
    question: "QUIQUICCUQICUQICUQIQC",
    type: 0,
    options: [
      { answer: "The elements to the left of the ith iterator are sorted", correct: true },
      { answer: "The element to the right of the ith iterator are sorted", correct: false },
      { answer: "The inner loop breaks if the entire array is sorted", correct: false },
      { answer: "The outer loop starts at the first element", correct: false },
    ],
  },
  {
    question: "What are the conditions that will end the inner for loop with the J iterator",
    type: 1,
    options: [
      { answer: "J reaches the first element", correct: true },
      { answer: "J becomes 0", correct: true },
      { answer: "The list is sorted", correct: false },
      { answer: "The value at j-1 is less than or greater than the value at j", correct: true },
    ],
  },
  {
    question: "What is the equivalent while loop for the inner j loop of Quick sort",
    type: 0,
    options: [
      { answer: "while(j > 0)", correct: false },
      { answer: "while(j > 1)", correct: false },
      { answer: "while(j < i)", correct: false },
      { answer: "while(j > -1)", correct: true },
    ],
  },
  {
    question: "The jth and jth-1 values are swapped in the algorithm",
    type: 0,
    options: [
      { answer: "true", correct: true },
      { answer: "false", correct: false },
    ],
  },
];
