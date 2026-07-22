import { SecurityAnalyzer } from '../analyzer/securityAnalyzer';

describe('SecurityAnalyzer', () => {
  let analyzer: SecurityAnalyzer;

  beforeEach(() => {
    analyzer = new SecurityAnalyzer();
  });

  it('should flag critical vulnerability patterns', () => {
    const code = `
      const key = "api_key = 'sk_test_1234567890123'";
      eval("console.log(key)");
      element.innerHTML = req.body.data;
      const sql = "SELECT * FROM users WHERE name = '" + req.body.name + "'";
    `;

    const result = analyzer.analyze(code);

    expect(result.vulnerabilities.some(v => v.type === 'Code Execution')).toBe(true);
    expect(result.vulnerabilities.some(v => v.type === 'Cross-Site Scripting (XSS)')).toBe(true);
    expect(result.vulnerabilities.some(v => v.type === 'Hardcoded Secrets')).toBe(true);
    expect(result.vulnerabilities.some(v => v.type === 'SQL Injection')).toBe(true);
    expect(result.securityScore).toBeLessThan(50);
  });
});