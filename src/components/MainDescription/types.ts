export const QUIZ_CATEGORY = ["Speed", "Virtual"] as const;

export type QuizCategory = typeof QUIZ_CATEGORY[number];
