import * as lorem from "lorem-ipsum";
import * as generator from "random-seed";

export function Lorem(seed = "1") {
  return new lorem.LoremIpsum({
    random: generator.create(seed).random,
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
}

