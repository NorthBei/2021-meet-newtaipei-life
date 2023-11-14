export enum ContentType {
  Idea = 'idea',
  Events = 'events'
}

export const FORM_CONTENT = {
  [ContentType.Idea]: {
    title: '新新生活點子',
    placeholder:
      '用簡短的一句話，分享你想到可以在家裡附近發起的行動、有意義的小改變、有趣好玩的活動、想要解決的問題...等。'
  },
  [ContentType.Events]: {
    title: '新新生活趣事',
    placeholder:
      '用簡短一句話，分享家裡附近有什麼有趣的文化現象、值得挖掘的故事、很『新北』的生活樣貌、不為人知的暖心故事...等。'
  }
};
