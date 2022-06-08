import { SpeedQuizCategory, SpeedQuizCount } from "./common";
import { SpeedQuizData } from "./quizData";

export interface SpeedQuizGeneratorContainerProps {
  onlyBookmarked: boolean;
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  count: SpeedQuizCount;
  onChangeCount: (count: SpeedQuizCount) => void;
  onResetCategories: () => void;
  onChangeQuizList: (quizList: SpeedQuizData[]) => void;
  isQuizPage: boolean;
  onChangeIsQuizPage: () => void;
}

export interface SpeedQuizCateogoryProps {
  onlyBookmarked: boolean;
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  count: SpeedQuizCount;
  onChangeCount: (count: SpeedQuizCount) => void;
  onResetCategories: () => void;
  onChangeQuizList: (quizList: SpeedQuizData[]) => void;
}

export interface SpeedQuizGeneratorProps {
  onlyBookmarked: boolean;
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  count: SpeedQuizCount;
  onChangeCount: (count: SpeedQuizCount) => void;
  onResetCategories: () => void;
  onChangeQuizList: (quizList: SpeedQuizData[]) => void;
  onChangeIsQuizPage: () => void;
}

export interface SpeedQuizListProps {
  isQuizPage: boolean;
  onChangeIsQuizPage: () => void;
  quizList: SpeedQuizData[];
  answers: string[];
  onChangeAnswers: (answer: string) => void;
}

export interface SpeedQuizItemProps extends SpeedQuizData {
  onChangeIndex: () => void;
  currentCount: number;
  totalCount: number;
  answers: string[];
  onChangeAnswers: (answer: string) => void;
}
