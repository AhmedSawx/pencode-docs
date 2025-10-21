import type {Prism} from 'prism-react-renderer';

export default function prismIncludeLanguages(prism: typeof Prism): void {
  prism.languages.pencode = {
    'comment': {
      pattern: /\/\/.*/,
      greedy: true,
    },
    'string': {
      pattern: /(['"])(?:\\(?:\r\n|[\s\S])|(?![\S\s])[^\\\r\n])*\1/,
      greedy: true,
    },
    'keyword': {
        pattern: /\b(?:AS|CHILD TO|SET)\b/i,
        greedy: true,
    },
    'class-name': /\b(?:Rectangle|Line|Layer|Custom|Brush|Field|Spline|Circle|Triangle)(?=\s*\()/,

    'function': /![a-zA-Z_][a-zA-Z0-9_]*/,
    'property': {
        pattern: /(\w+)(?=:)/,
        greedy: true,
    },
    'number': {
        pattern: /\b-?[0-9]+(?:\.[0-9]+)?\b/,
        greedy: true,
    },
    'punctuation': {
        pattern: /[(),:]/,
        greedy: true,
    },
    'operator': {
        pattern: /!/,
        greedy: true,
    }
  };
}
