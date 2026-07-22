import { PerformanceAnalyzer } from '../analyzer/performanceAnalyzer';

describe('PerformanceAnalyzer', () => {
  let analyzer: PerformanceAnalyzer;

  beforeEach(() => {
    analyzer = new PerformanceAnalyzer();
  });

  it('should identify nested loops as O(N^2)', () => {
    const code = `
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          console.log(i, j);
        }
      }
    `;

    const result = analyzer.analyze(code);

    expect(result.complexityDetected).toBe('O(N^2)');
    expect(result.performanceScore).toBeLessThan(100);
    expect(result.issues.length).toBeGreaterThan(0);
  });

  it('should flag inefficient lookups in loop body', () => {
    const code = `
      const list = [1, 2, 3];
      for (let i = 0; i < 10; i++) {
        if (list.includes(i)) {
          // action
        }
      }
    `;

    const result = analyzer.analyze(code);

    expect(result.issues.some(i => i.id === 'inefficient-loop-lookup')).toBe(true);
  });
});