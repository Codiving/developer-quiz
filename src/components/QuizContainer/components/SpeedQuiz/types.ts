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
}
