import { SpeedQuizCategory, SpeedQuizCount } from "./common";

export interface SpeedQuizGeneratorContainerProps {
  onlyBookmarked: boolean;
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  count: SpeedQuizCount;
  onChangeCount: (count: SpeedQuizCount) => void;
  onResetCategories: () => void;
}

export interface SpeedQuizCateogoryProps {
  onlyBookmarked: boolean;
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  count: SpeedQuizCount;
  onChangeCount: (count: SpeedQuizCount) => void;
  onResetCategories: () => void;
}

export interface SpeedQuizGeneratorProps {
  onlyBookmarked: boolean;
  onChangeOnlyBookmarked: () => void;
  categories: SpeedQuizCategory[];
  onChangeCategories: (category: SpeedQuizCategory) => void;
  count: SpeedQuizCount;
  onChangeCount: (count: SpeedQuizCount) => void;
  onResetCategories: () => void;
}
