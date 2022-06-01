import { SpeedQuizCategory, SPEED_QUIZ_CATEGORY } from "./common";
import { v4 as uuid } from "uuid";

export interface SpeedQuizData {
  id: string;
  type: SpeedQuizCategory;
  question: string[];
  candidates: string[];
  answer: string;
  keywords: string[];
  messages: string[];
  code?: string;
  timer?: number;
}

export const Web: SpeedQuizData[] = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.Web,
    question: ["DNS 서버가 다운되면 해당 도메인에 접근할 수 없다. 11111"],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다. 1111"],
    timer: 5
  },
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.Web,
    question: ["DNS 서버가 다운되면 해당 도메인에 접근할 수 없다. 2222"],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다. 2222"],
    timer: 5
  }
];

export const JavaScript = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.JavaScript,
    question: ["DNS 서버가 다운되면 해당 도메인에 접근할 수 없다."],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다."],
    timer: 5
  }
];

export const TypeScript = [
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

export const React = [
  {
    id: uuid(),
    type: SPEED_QUIZ_CATEGORY.React,
    question: ["DNS 서버가 다운되면 해당 도메인에 접근할 수 없다."],
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다."],
    timer: 5
  }
];
