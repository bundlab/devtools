import { CodeAnalyzer } from './analyzer/codeAnalyzer';
import { PerformanceAnalyzer } from './analyzer/performanceAnalyzer';
import { SecurityAnalyzer } from './analyzer/securityAnalyzer';
import { FullAnalysisResult } from './types';

export class AIDevTools {
  private codeAnalyzer: CodeAnalyzer;
  private performanceAnalyzer: PerformanceAnalyzer;
  private securityAnalyzer: SecurityAnalyzer;

  constructor() {
    this.codeAnalyzer = new CodeAnalyzer();
    this.performanceAnalyzer = new PerformanceAnalyzer();
    this.securityAnalyzer = new SecurityAnalyzer();
  }

  public analyze(code: string): FullAnalysisResult {
    const codeAnalysis = this.codeAnalyzer.analyze(code);
    const performanceAnalysis = this.performanceAnalyzer.analyze(code);
    const securityAnalysis = this.securityAnalyzer.analyze(code);

    // Calculate aggregated overall score
    const overallScore = Math.round(
      codeAnalysis.maintainabilityScore * 0.3 +
      performanceAnalysis.performanceScore * 0.3 +
      securityAnalysis.securityScore * 0.4
    );

    let summary = `Overall Quality Score: ${overallScore}/100. `;
    if (overallScore >= 85) {
      summary += 'Code health is optimal with low risk profiles.';
    } else if (overallScore >= 60) {
      summary += 'Code health is moderate. Address security alerts and maintainability issues.';
    } else {
      summary += 'Code requires immediate refactoring. Critical security/performance gaps detected.';
    }

    return {
      overallScore,
      codeAnalysis,
      performanceAnalysis,
      securityAnalysis,
      summary
    };
  }
}

export * from './types';
export { CodeAnalyzer, PerformanceAnalyzer, SecurityAnalyzer };