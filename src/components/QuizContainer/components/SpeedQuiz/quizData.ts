import { SpeedQuizCategory, SPEED_QUIZ_CATEGORY } from "./common";
import { v4 as uuid } from "uuid";

const WEB_KEYWORDS = ["DNS", "Domain Name"] as const;

const JS_KEYWORDS = [
  "JavaScript Primitive Types",
  "JavaScript 원시타입",
  "JavaScript slice",
  "JavaScript splice",
  "JavaScript IIFE",
  "JavaScript 즉시실행함수",
  "JavaScript push",
  "JavaScript var",
  "JavaScript let",
  "JavaScript const",
  "JavaScript 호이스팅",
  "JavaScript hoisting",
  "JavaScript TDZ",
  "JavaScript Temporal Dead Zone"
] as const;

const TS_KEYWORDS = [] as const;

const REACT_KEYWORDS = [] as const;

const KEYWORDS = [
  ...WEB_KEYWORDS,
  ...JS_KEYWORDS,
  ...TS_KEYWORDS,
  ...REACT_KEYWORDS
];

type Keywords = typeof KEYWORDS[number];

export interface SpeedQuizData {
  id: string;
  type: SpeedQuizCategory;
  question: string[];
  contents?: string[];
  candidates: string[];
  answer: string;
  keywords: Keywords[];
  messages: string[];
  code?: string;
  timer?: number;
}

export const Web: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.Web,
    question: [
      "DNS 서버",
      "A 사이트의 DNS 서버가 다운되었다.",
      "그런데 길동이는 A 사이트에 접속을 하였다.",
      "이러한 일이 일어날 수 있는가?"
    ],
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["DNS", "Domain Name"],
    messages: [
      "DNS와 Domain Name의 차이를 구분하셔야 합니다.",
      "DNS 서버가 다운되어도 서버가 IP 직접 접근을 막지 않은 경우 IP로 접근이 가능합니다."
    ],
    timer: 5
  }
];

export const JavaScript: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["JavaScript의 원시 값은 아래와 같습니다."],
    contents: ["Boolean", "Null", "Undefined", "Number", "String", "Symbol"],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["JavaScript Primitive Types", "JavaScript 원시타입"],
    messages: ["BigInt가 추가되었습니다."],
    timer: 5
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["123456", "123", "12", "3456"],
    answer: "123456",
    keywords: ["JavaScript slice"],
    messages: ["slice 함수는 원본을 변형시키지 않습니다."],
    code: `
const str = "123456";
str.slice(0, 2);

console.log(str);
`,
    timer: 5
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1, 2, 3]", "[3, 4, 5]", "[3, 4]", "[1, 2]"],
    answer: "[3, 4, 5]",
    keywords: ["JavaScript splice"],
    messages: ["splice 함수는 원본을 변형시킵니다."],
    code: `
const arr = [1, 2, 3, 4, 5];
const spliceArr = arr.splice(0, 2);
    
console.log(arr);
`,
    timer: 3
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1, 2, 3]", "[3, 4, 5]", "[3, 4]", "[1, 2]"],
    answer: "[3, 4, 5]",
    keywords: ["JavaScript splice"],
    messages: ["새로운 배열을 반환합니다."],
    code: `
const arr = [1, 2, 3, 4, 5];
const spliceArr = arr.splice(0, 2);
    
console.log(spliceArr);
`,
    timer: 5
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["1 2 3", "1 3", "1 2", "1 3 2"],
    answer: "1 3",
    keywords: ["JavaScript IIFE", "JavaScript 즉시실행함수"],
    messages: ["IIFE는 실행을 하지 않으면 생성되고 사라집니다."],
    code: `
    console.log(1);

    () => {
      console.log(2);
    };
    
    console.log(3);
`,
    timer: 7
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1 2 3]", "[1 2 3 4]", "[4]", "4"],
    answer: "4",
    keywords: ["JavaScript push"],
    messages: ["push 함수의 동작과 반환 값을 구분 하셔야합니다."],
    code: `
const arr = [1, 2, 3];
const pushedArr = arr.push(4);

console.log(pushedArr);
`,
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1 2 3]", "[4]", "[1, 2, 3, 4]", "[1, 2, 3]"],
    answer: "[1, 2, 3, 4]",
    keywords: ["JavaScript push"],
    messages: ["push 함수의 동작과 반환 값을 구분 하셔야합니다."],
    code: `
const arr = [1, 2, 3];
arr.push(4);

console.log(arr);
`,
    timer: 8
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["1 2 1", "1 2 2"],
    answer: "1 2 1",
    keywords: ["JavaScript let"],
    messages: ["let 변수는 block scope 입니다."],
    code: `
    let a = 1;
    console.log(a);
    
    (() => {
      let a = 2;
      console.log(a);
    })();
    
    console.log(a);
`,
    timer: 7
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["2 2 2 2", "2 2 에러"],
    answer: "2 2 에러",
    keywords: [
      "JavaScript var",
      "JavaScript let",
      "JavaScript 호이스팅",
      "JavaScript hoisting",
      "JavaScript TDZ",
      "JavaScript Temporal Dead Zone"
    ],
    messages: ["let도 호이스팅이 되지만 TDZ에 의해 참조 에러가 발생합니다."],
    code: `
    console.log(a);
    var a = 2;
    console.log(a);
    
    console.log(b);
    let b = 2;
    console.log(b);
`,
    timer: 15
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: [
      "아래 설명은 맞는 것인가요?",
      "var : function scope",
      "let, const : block scope"
    ],
    candidates: ["O", "X"],
    answer: "O",
    keywords: [
      "JavaScript var",
      "JavaScript let",
      "JavaScript const",
      "JavaScript 호이스팅",
      "JavaScript hoisting",
      "JavaScript TDZ",
      "JavaScript Temporal Dead Zone"
    ],
    messages: [],
    timer: 12
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: [
      "아래 설명은 맞는 것인가요?",
      "let, const는 호이스팅을 하지 않습니다."
    ],
    candidates: ["O", "X"],
    answer: "X",
    keywords: [
      "JavaScript let",
      "JavaScript const",
      "JavaScript 호이스팅",
      "JavaScript hoisting"
    ],
    messages: [],
    timer: 5
  }
];

export const TypeScript: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.TypeScript,
    question: ["DNS 서버가 다운되면 해당 도메인에 접근할 수 없다."],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다."],
    timer: 5
  }
];

export const React: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: ["아래 코드는 불변성을 지키지 못 하였는가?"],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다."],
    timer: 5
  }
];

export const TotalQuiz = [
  ...Web,
  ...JavaScript,
  ...TypeScript,
  ...React
] as SpeedQuizData[];
