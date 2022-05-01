export const queueGeneralQuiz = [
  {
    question: "Which of the following is NOT true about Queues?",
    type: 0,
    options: [
      { answer: "All methods have a constant run time", correct: true },
      { answer: "The only two pointers are to the front and end of the queue", correct: false },
      { answer: "You can only add elements to end of the queue", correct: false },
      { answer: "You can only remove elements to the front of the queue", correct: false },
    ],
  },
  {
    question: "Why is a queue data structure abstract?",
    type: 0,
    options: [
      { answer: "It only a reference to the behavior of a queue model", correct: true },
      { answer: "An array can only be accessed from two indexes", correct: false },
      { answer: "All data structures are abstract", correct: false },
      { answer: "Its just an idea", correct: false },
    ],
  },
  {
    question: "The most recent element to be inserted will be the last element to be removed.",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Check all that apply to Queues",
    type: 1,
    options: [
      { answer: "Follow a LIFO order", correct: false },
      { answer: "Adding/Deleting an element takes constant time", correct: true },
      { answer: "Any index can be accessed using the queue methods", correct: false },
      { answer: "You can add an element to the middle in-place", correct: false },
    ],
  },
];

export const queueCodeQuiz = [
  {
    question: "What are the values of the front and tail index in an empty queue?",
    type: 0,
    options: [
      { answer: "Front = 0 Tail = 0", correct: false },
      { answer: "Front = -1 Tail = -1", correct: true },
      { answer: "Front = null Tail = null", correct: false },
      { answer: "Front = 0 Tail = -1", correct: false },
    ],
  },
  {
    question:
      "What would the peak method return after the following operations and initial Queue? [7,3,1,8,4] Dequeue() Enqueue(9) Dequeue() Enqueue(3)",
    type: 0,
    options: [
      { answer: "1", correct: true },
      { answer: "3", correct: false },
      { answer: "8", correct: false },
      { answer: "9", correct: false },
    ],
  },
  {
    question: "In a queue of size 8, the front index is at 1 and the rear index is at 8",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "What conditions imply the queue is empty?",
    type: 1,
    options: [
      { answer: "Front index = rear index", correct: false },
      { answer: "Front index < 0", correct: true },
      { answer: "Front index = 0", correct: false },
      { answer: "Rear index = 0", correct: false },
    ],
  },
];

export const stackGeneralQuiz = [
  {
    question: "Which of the following is true about Stacks?",
    type: 0,
    options: [
      { answer: "All methods have a constant run time", correct: false },
      { answer: "You have access to the first element pushed", correct: false },
      { answer: "You can only add elements to the top", correct: true },
      { answer: "The bottommost element can be removed at anytime", correct: false },
    ],
  },
  {
    question: "What does adding too many elements cause?",
    type: 0,
    options: [
      { answer: "Memory Leak", correct: false },
      { answer: "Program Crash", correct: false },
      { answer: "Nothing", correct: false },
      { answer: "Stack Overflow", correct: true },
    ],
  },
  {
    question: "The most recent element to be inserted will be the last element to be removed.",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Check all that apply to Stacks",
    type: 1,
    options: [
      { answer: "Follows a FIFO order", correct: false },
      { answer: "You can add an element to the middle in-place", correct: false },
      { answer: "Has index to all elements", correct: false },
      { answer: "A top index value of -1 means the stack is empty", correct: true },
    ],
  },
];

export const stackCodeQuiz = [
  {
    question: "What are the values of the top index in a full stack?",
    type: 0,
    options: [
      { answer: "Top = -1", correct: false },
      { answer: "Top = 0", correct: false },
      { answer: "Top = number of elements", correct: false },
      { answer: "Top = number of elements - 1", correct: true },
    ],
  },
  {
    question:
      "What would the top element be after the following operations and initial Stack? [7,3,1] Pop() Pop() Push(1) Pop() Push(2) Pop()",
    type: 0,
    options: [
      { answer: "2", correct: false },
      { answer: "3", correct: false },
      { answer: "1", correct: false },
      { answer: "7", correct: true },
    ],
  },
  {
    question: "In a stack of size 11, the top index would have a value of 10",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
  {
    question: "Which set of operations cause a stack overflow on an empty stack of size 3",
    type: 1,
    options: [
      { answer: "Push() Push(1) Pop() Push(6) Pop() Push(5) Pop()", correct: false },
      { answer: "Pop() Pop() Push(9) Push(4) Push(0) Pop()", correct: false },
      { answer: "Pop() Push(8) Push(6) Pop() Push(2) Push(4) Push(1) Pop()", correct: true },
      { answer: "Pop() Push(3) Push(4) Pop() Pop() Push(2)", correct: false },
    ],
  },
];

export const linkedListGeneralQuiz = [
  {
    question: "In order to delete a node in a SLL you need what?",
    type: 0,
    options: [
      { answer: "The pointer to the node you want to delete", correct: false },
      { answer: "Value of the node", correct: false },
      { answer: "Value of the node and the pointer to the node", correct: false },
      {
        answer: "The value and pointers of the prev node and the node itself",
        correct: true,
      },
    ],
  },
  {
    question: "Why is pointing to NULL important?",
    type: 0,
    options: [
      { answer: "It determines the start of the list", correct: false },
      { answer: "It indicates the beginning or starting node", correct: true },
      { answer: "You can only insert into a NULL value", correct: false },
      { answer: "Its not", correct: false },
    ],
  },
  {
    question: "You can traverse backwards in a Singly-Linked-List",
    type: 0,
    options: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    question: "Check all that apply to Linked Lists",
    type: 1,
    options: [
      { answer: "Can immediately access any node in the list", correct: false },
      { answer: "Deleting is constant time if you know the pointer of the node", correct: true },
      { answer: "You have to reconnect all the nodes when you delete", correct: false },
      { answer: "Search is faster than in an array", correct: false },
    ],
  },
];

export const linkedListCodeQuiz = [
  {
    question: "What is the output of the C++ code using the code in the section? std::cout << one;",
    type: 0,
    options: [
      { answer: "1", correct: false },
      { answer: "NULL", correct: false },
      { answer: "The address of the node", correct: true },
      { answer: "one", correct: false },
    ],
  },
  {
    question: "Which of the following are true?",
    type: 1,
    options: [
      { answer: "You only need the pointer of the node to delete in a DLL", correct: true },
      { answer: "You can traverse backwards in a CLL", correct: true },
      { answer: "A CLL is more efficient than a DLL", correct: false },
      { answer: "A node in DLL has 3 pieces of information", correct: true },
    ],
  },
  {
    question: "The first node is indicated by what?",
    type: 0,
    options: [
      { answer: "A prev pointer to NULL", correct: false },
      { answer: "The smallest value in the list", correct: false },
      { answer: "A next pointer of NULL", correct: false },
      { answer: "A value of 0", correct: true },
    ],
  },
  {
    question: "A circular linked list requires 3 pointers",
    type: 0,
    options: [
      { answer: "True", correct: true },
      { answer: "False", correct: false },
    ],
  },
];

export const binaryTreeGeneralQuiz = [
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

export const binaryTreeCodeQuiz = [
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
    question: "What would the following C++ code output.",
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
