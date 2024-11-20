export const vars = {
  $semantic: {
    typography: {
      headline: `
        font-family: Pretendard;
        font-size: 56px;
        font-weight: 700;
        line-height: 72px;
      `,
      bodyPrimary: `
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      `,
      bodySecondary: `
        font-family: Pretendard;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
      `,
    },
    color: {
      text: {
        darkGrey: '#333333',
        lightGrey: '#B9B9B9',
        mediumGrey: '#454545',
        primary: '#2182F3',
        black: '#000000',
        mutedGrey: '#868686',
      },
    },
  },
} as const;
