import { CodeAnalyzer } from '../analyzer/codeAnalyzer';

describe('CodeAnalyzer', () => {
  let analyzer: CodeAnalyzer;

  beforeEach(() => {
    analyzer = new CodeAnalyzer();
  });

  it('should detect var, console.log, and pending TODOs', () => {
    const code = `
      var x = 10;
      console.log(x);
      // TODO: Refactor this later
    `;

    const result = analyzer.analyze(code);

    expect(result.issues.length).toBe(3);
    expect(result.issues.some(i => i.rule === 'no-var')).toBe(true);
    expect(result.issues.some(i => i.rule === 'no-console')).toBe(true);
    expect(result.issues.some(i => i.rule === 'no-todo')).toBe(true);
    expect(result.maintainabilityScore).toBeLessThan(100);
  });

  it('should detect empty catch blocks', () => {
    const code = `
      try {
        JSON.parse("invalid");
      } catch (e) {}
    `;

    const result = analyzer.analyze(code);

    expect(result.issues.some(i => i.rule === 'no-empty-catch')).toBe(true);
  });
});