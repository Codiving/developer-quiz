import { SpeedQuizCategory } from "./components/SpeedQuiz/common";

export type QuizCount = {
  category: SpeedQuizCategory;
  count: number;
};

const getQuizCountPerCategory = (
  quizArray: QuizCount[],
  _count: number,
  index: number = 0
): QuizCount[] => {
  const newArray = quizArray.map(quiz => ({ ...quiz }));
  const tmpCount = _count / (quizArray.length - index);
  const count = Math.floor(tmpCount);
  const realCount =
    quizArray[index].count < count ? quizArray[index].count : count;
  const newCount = _count - realCount;
  newArray[index].count = realCount;
  index += 1;

  if (quizArray.length > index) {
    return getQuizCountPerCategory(newArray, newCount, index);
  }
  return newArray;
};

export { getQuizCountPerCategory };
