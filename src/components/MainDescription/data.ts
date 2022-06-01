import { QUIZ_CATEGORY } from "./types";

const data = [
  {
    id: QUIZ_CATEGORY[0],
    title: "스피드 객관식 퀴즈 !",
    texts: [
      "내가 어떠한 개념을 모르고 있는 지 궁금한 경우가 있습니다.",
      "테스트 하고 싶은 카테고리만 골라 객관식 문제를 풀어봅시다."
    ],
    image: "/quiz.gif",
    alt: "이미지",
    buttonText: "퀴즈 풀어보기",
    width: "80%"
  },
  {
    id: QUIZ_CATEGORY[1],
    title: "가상 면접",
    texts: [
      "취업 면접 시 나올만한 질문들을 모았습니다.",
      "모르는 내용인 경우 추천 키워드를 통해 공부합시다."
    ],
    image: "/interview.gif",
    alt: "이미지",
    buttonText: "가상 면접보기"
  }
];

export const DescriptionData = new Map();

data.forEach(item => {
  DescriptionData.set(item.id, item);
});
