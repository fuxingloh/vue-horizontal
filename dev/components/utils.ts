import {LoremIpsum} from "lorem-ipsum/src";
import Rand from 'rand-seed';

export function Lorem(seed = "1") {
  const random = new Rand(seed);
  return new LoremIpsum({
    random: () => random.next(),
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

export function loremItems(seed: string, count: number, options = {
  title: 2,
  content: 4,
}) {
  const lorem = Lorem(seed)

  return [...Array(count).keys()].map((i) => {
    return {
      i,
      title: lorem.generateWords(options.title),
      content: lorem.generateWords(options.content),
    };
  })
}
