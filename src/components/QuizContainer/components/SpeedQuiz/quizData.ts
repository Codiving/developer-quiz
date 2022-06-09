import jsQuiz1 from "public/quiz/js/jsQuiz1.png";
import jsQuiz2 from "public/quiz/js/jsQuiz2.png";
import jsQuiz3 from "public/quiz/js/jsQuiz3.png";
import jsQuiz4 from "public/quiz/js/jsQuiz4.png";
import jsQuiz5 from "public/quiz/js/jsQuiz5.png";
import jsQuiz6 from "public/quiz/js/jsQuiz6.png";
import jsQuiz7 from "public/quiz/js/jsQuiz7.png";
import jsQuiz8 from "public/quiz/js/jsQuiz8.png";
import reactQuiz1 from "public/quiz/react/reactQuiz1.png";
import reactQuiz2 from "public/quiz/react/reactQuiz2.png";
import reactQuiz3 from "public/quiz/react/reactQuiz3.png";
import reactQuiz4 from "public/quiz/react/reactQuiz4.png";
import reactQuiz5 from "public/quiz/react/reactQuiz5.png";
import reactQuiz6 from "public/quiz/react/reactQuiz6.png";
import reactQuiz7 from "public/quiz/react/reactQuiz7.png";

import { v4 as uuid } from "uuid";
import { SpeedQuizCategory, SPEED_QUIZ_CATEGORY } from "./common";

const WEB_KEYWORDS = ["DNS", "Domain Name"] as const;

const JS_KEYWORDS = [
  "Primitive Types",
  "원시타입",
  "slice",
  "splice",
  "IIFE",
  "즉시실행함수",
  "push",
  "var",
  "let",
  "const",
  "호이스팅",
  "hoisting",
  "TDZ",
  "Temporal Dead Zone"
] as const;

const TS_KEYWORDS = [] as const;

const REACT_KEYWORDS = [
  "Fragment",
  "useState",
  "setState",
  "state",
  "ref",
  "useRef"
] as const;

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
  candidates: string[];
  answer: string;
  keywords: Keywords[];
  messages: string[];
  code?: any;
  timer?: number;
}

export const Web: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.Web,
    question: [
      "A 사이트의 DNS 서버가 다운된 경우",
      "A 사이트에 접속할 수 없는가?"
    ],
    candidates: ["O", "X", "a", "b"],
    answer: "O",
    keywords: ["DNS", "Domain Name"],
    messages: [
      "DNS 서버가 다운되어도 서버가 IP 직접 접근을 막지 않은 경우 IP로 접근이 가능합니다."
    ],
    timer: 5
  }
  // {
  //   type: "Web",
  //   question: ["Browser 렌더링 과정에서 reflow는 repaint 다음으로 이루어진다."],
  //   candidates: ["O", "X"],
  //   answer: "X",
  //   keywords: ["브라우저 렌더링", "Reflow", "Repaint"],
  //   messages: ["Reflow 과정을 거친 후 Repaint가 일어납니다."],
  //   link: ["https://codiving.kr/144"]
  // },
  // {
  //   type: "Web",
  //   question: ["display:none; 은 렌더 트리에 포함되지 않는다."],
  //   candidates: ["O", "X"],
  //   answer: "O",
  //   keywords: ["렌더 트리", "Render Tree"],
  //   messages: ["화면에 보이지 않으므로 렌더 트리에 포함되지 않습니다."],
  //   link: ["https://codiving.kr/144"]
  // },
  // {
  //   type: "Web",
  //   question: ["visibility:hidden; 은 렌더 트리에 포함되지 않는다."],
  //   candidates: ["O", "X"],
  //   answer: "X",
  //   keywords: ["렌더 트리", "Render Tree"],
  //   messages: ["화면에 영역이 포시되므로 렌더 트리에 포함됩니다."],
  //   link: ["https://codiving.kr/144"]
  // },
  // {
  //   type: "Web",
  //   question: ["쿠키는 서버에서 관리하는 정보이다."],
  //   candidates: ["O", "X"],
  //   answer: "X",
  //   keywords: ["쿠키", "세션"],
  //   messages: ["쿠키는 브라우저에서 관리합니다."],
  //   link: ["https://codiving.kr/145"]
  // },
  // {
  //   type: "Web",
  //   question: ["세션으로 로그인 유지 기능을 구현할 수 있다."],
  //   candidates: ["O", "X"],
  //   answer: "O",
  //   keywords: ["쿠키", "세션"],
  //   messages: [],
  //   link: ["https://codiving.kr/145"]
  // },
  // {
  //   type: "Web",
  //   question: ["jwt를 사용하면 세션보다 서버에 부담이 덜하다."],
  //   candidates: ["O", "X"],
  //   answer: "O",
  //   keywords: ["쿠키", "세션", "jwt"],
  //   messages: [],
  //   link: ["https://codiving.kr/145"]
  // },
  // {
  //   type: "Web",
  //   question: ["jwt를 사용하면 강제 로그아웃 기능을 구현할 수 있다."],
  //   candidates: ["O", "X"],
  //   answer: "X",
  //   keywords: ["쿠키", "세션", "jwt"],
  //   messages: ["jwt만을 이용해서는 강제 로그아웃 기능을 구현하기 힘듭니다."],
  //   link: ["https://codiving.kr/145"]
  // },
  // {
  //   type: "Web",
  //   question: ["쿠키보다 세션이 보안에 더 좋다."],
  //   candidates: ["O", "X"],
  //   answer: "O",
  //   keywords: ["쿠키", "세션"],
  //   messages: [
  //     "쿠키는 브라우저 세션은 서버에서 관리합니다.",
  //     "따라서 세션이 보안이 더 뛰어납니다."
  //   ],
  //   link: ["https://codiving.kr/145"]
  // },
  // {
  //   type: "Web",
  //   question: ["CORS는 서버에서 띄우는 에러이다."],
  //   candidates: ["O", "X"],
  //   answer: "X",
  //   keywords: ["CORS"],
  //   messages: ["CORS 에러는 브라우저에서 띄웁니다."],
  //   link: ["https://codiving.kr/146"]
  // }
];

export const JavaScript: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: [
      "JavaScript의 원시 값은 아래와 같습니다.",
      "Boolean",
      "Null",
      "Undefined",
      "Number",
      "String",
      "Symbol"
    ],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["Primitive Types", "원시타입"],
    messages: ["BigInt가 추가되었습니다."],
    timer: 5
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["123456", "123", "12", "3456"],
    answer: "123456",
    keywords: ["slice"],
    messages: ["slice 함수는 원본을 변형시키지 않습니다."],
    code: { src: jsQuiz2.src },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1, 2, 3]", "[3, 4, 5]", "[3, 4]", "[1, 2]"],
    answer: "[3, 4, 5]",
    keywords: ["splice"],
    messages: ["splice 함수는 원본을 변형시킵니다."],
    code: {
      src: jsQuiz3.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1, 2, 3]", "[3, 4, 5]", "[3, 4]", "[1, 2]"],
    answer: "[3, 4, 5]",
    keywords: ["splice"],
    messages: ["새로운 배열을 반환합니다."],
    code: {
      src: jsQuiz4.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["1 2 3", "1 3", "1 2", "1 3 2"],
    answer: "1 3",
    keywords: ["IIFE", "즉시실행함수"],
    messages: ["IIFE는 실행을 하지 않으면 생성되고 사라집니다."],
    code: {
      src: jsQuiz5.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1 2 3]", "[1 2 3 4]", "[4]", "4"],
    answer: "4",
    keywords: ["push"],
    messages: ["push 함수의 동작과 반환 값을 구분 하셔야합니다."],
    code: {
      src: jsQuiz6.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["[1 2 3]", "[4]", "[1, 2, 3, 4]", "[1, 2, 3]"],
    answer: "[1, 2, 3, 4]",
    keywords: ["push"],
    messages: ["push 함수의 동작과 반환 값을 구분 하셔야합니다."],
    code: { src: jsQuiz7.src },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["1 2 1", "1 2 2"],
    answer: "1 2 1",
    keywords: ["let"],
    messages: ["let 변수는 block scope 입니다."],
    code: {
      src: jsQuiz1.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["아래 코드의 결과는 ?"],
    candidates: ["2 2 2 2", "2 2 에러"],
    answer: "2 2 에러",
    keywords: [
      "var",
      "let",
      "호이스팅",
      "hoisting",
      "TDZ",
      "Temporal Dead Zone"
    ],
    messages: ["let도 호이스팅이 되지만 TDZ에 의해 참조 에러가 발생합니다."],
    code: {
      src: jsQuiz8.src
    },
    timer: 10
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
      "var",
      "let",
      "const",
      "호이스팅",
      "hoisting",
      "TDZ",
      "Temporal Dead Zone"
    ],
    messages: [],
    timer: 10
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
    keywords: ["let", "const", "호이스팅", "hoisting"],
    messages: [],
    timer: 10
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
    question: ["App 컴포넌트는 정상적인 컴포넌트이다."],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["Fragment"],
    messages: ["React 컴포넌트는 최상위 태그가 1개 있어야 합니다."],
    code: {
      src: reactQuiz1.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: ["useState의 setState는 동기로 동작한다."],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["useState", "setState"],
    messages: ["setState는 비동기로 동작합니다."],
    timer: 5
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: [
      "아래 코드에서 버튼을 3번 클릭하면 생기는 일",
      "1. 렌더링 횟수",
      "2. 콘솔창 출력 값",
      "3. 문제가 있다면 문제점"
    ],
    candidates: [
      "0 / 없음 / setCount로 state를 변경하지 않음",
      "3 / 1 2 3 / 문제점 없음"
    ],
    answer: "0 / 없음 / setCount로 state를 변경하지 않음",
    keywords: ["useState", "setState"],
    messages: ["setState로 state를 변경해야지 렌더링이 발생합니다."],
    code: {
      src: reactQuiz2.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: [
      "아래 코드에서 버튼을 클릭하면 생기는 일",
      "1. 콘솔창 출력 값",
      "2. 렌더링 횟수"
    ],
    candidates: [
      "0 1 2 3 -1 1 2 3 -1 / 4번",
      "0 1 2 3 -1 -1 / 4번",
      "0 1 2 3 -1 1 2 3 -1 / 1번",
      "0 1 2 3 -1 -1 / 1번",
      "0 -1 / 1번",
      "1 -1 / 1번"
    ],
    answer: "1 -1 / 1번",
    keywords: ["useState", "setState"],
    messages: ["setState는 batch로 동작합니다."],
    code: {
      src: reactQuiz3.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: ["아래 코드에서 버튼을 클릭하면 생기는 일", "1. 콘솔창 출력"],
    candidates: ["0 1 2 3 3", "0 1 2 3 0", "0 0 0 0 3", "0 0 0 0 6"],
    answer: "0 0 0 0 3",
    keywords: ["useState", "setState"],
    messages: ["setState는 batch로 동작합니다."],
    code: {
      src: reactQuiz4.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: [
      "아래 코드에서 버튼을 3번 클릭하면 생기는 일",
      "1. 콘솔창 출력",
      "2. 렌더링 횟수",
      "3. 문제점이 있다면 문제점"
    ],
    candidates: [
      "[0] [0, 1] [0, 1, 2] / 3번 / 없음",
      "[0] [0, 0] [0, 0, 0] / 3번 / 없음",
      "없음 / 0번 / 주소값 변경해주어야 함."
    ],
    answer: "없음 / 0번 / 주소값 변경해주어야 함.",
    keywords: ["useState", "setState"],
    messages: ["object type state를 변경 시 주소값 변경이 필요합니다."],
    code: {
      src: reactQuiz5.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: [
      "아래 코드를 실행하면",
      "1. 콘솔창 출력",
      "2. 렌더링 횟수",
      "input 창 abcd 입력"
    ],
    candidates: ["a ab abcd abcd / 4번", "abcd / 1번"],
    answer: "a ab abcd abcd / 4번",
    keywords: ["useState", "setState"],
    messages: [],
    code: {
      src: reactQuiz6.src
    },
    timer: 10
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: [
      "아래 코드를 실행하면",
      "1. 콘솔창 출력",
      "2. 렌더링 횟수",
      "input 창 abcd 입력"
    ],
    candidates: ["a ab abcd abcd / 4번", "abcd / 1번", "없음 / 0번"],
    answer: "a ab abcd abcd / 4번",
    keywords: ["useRef", "ref"],
    messages: ["ref는 값이 변하여도 렌더링 되지 않습니다."],
    code: {
      src: reactQuiz7.src
    },
    timer: 10
  }
];

export const TotalQuiz = [
  ...Web,
  ...JavaScript,
  ...TypeScript,
  ...React
] as SpeedQuizData[];
