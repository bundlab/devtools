import { CodeAnalysisResult, CodeIssue } from '../types';

export class CodeAnalyzer {
  public analyze(code: string): CodeAnalysisResult {
    const lines = code.split('\n');
    const issues: CodeIssue[] = [];
    const aiSuggestions: string[] = [];

    let varCount = 0;
    let consoleCount = 0;
    let emptyCatchCount = 0;
    let todoCount = 0;

    lines.forEach((lineText, index) => {
      const lineNum = index + 1;

      // 1. Check for 'var' usage
      if (/\bvar\s+\w+/g.test(lineText)) {
        varCount++;
        issues.push({
          id: `var-use-${lineNum}`,
          line: lineNum,
          message: "Use of 'var' keyword detected. Prefer 'let' or 'const'.",
          severity: 'medium',
          rule: 'no-var',
          aiSuggestion: "Replace 'var' with 'const' if unassigned later, or 'let' for reassignable variables."
        });
      }

      // 2. Check for console.log
      if (/console\.log\s*\(/g.test(lineText)) {
        consoleCount++;
        issues.push({
          id: `console-log-${lineNum}`,
          line: lineNum,
          message: "Leftover 'console.log' statements detected.",
          severity: 'low',
          rule: 'no-console',
          aiSuggestion: "Remove debugging console statements or use a standard logging library."
        });
      }

      // 3. Check for TODO statements
      if (/\/\/\s*TODO/i.test(lineText)) {
        todoCount++;
        issues.push({
          id: `todo-${lineNum}`,
          line: lineNum,
          message: "Pending TODO comment found.",
          severity: 'low',
          rule: 'no-todo',
          aiSuggestion: "Resolve pending technical debt or create a tracked issue."
        });
      }
    });

    // 4. Check for empty catch blocks
    const catchMatches = code.matchAll(/catch\s*\([^)]*\)\s*\{\s*\}/g);
    for (const match of catchMatches) {
      emptyCatchCount++;
      issues.push({
        id: `empty-catch-${match.index}`,
        line: 1,
        message: "Empty catch block swallows errors quietly.",
        severity: 'high',
        rule: 'no-empty-catch',
        aiSuggestion: "Handle errors properly or log them to prevent silent system failures."
      });
    }

    const complexity = this.calculateComplexity(code);
    
    // Scoring Logic
    let score = 100;
    score -= varCount * 5;
    score -= consoleCount * 2;
    score -= emptyCatchCount * 15;
    score -= todoCount * 3;
    if (complexity > 5) {
      score -= (complexity - 5) * 3;
    }

    const maintainabilityScore = Math.max(0, Math.min(100, score));

    if (maintainabilityScore < 70) {
      aiSuggestions.push("Refactor complex structures and remove legacy 'var' patterns to boost readability.");
    }
    if (emptyCatchCount > 0) {
      aiSuggestions.push("Add active error handling mechanisms to all try-catch routines.");
    }

    return {
      maintainabilityScore,
      complexity,
      issues,
      aiSuggestions
    };
  }

  private calculateComplexity(code: string): number {
    let complexity = 1; // Base complexity
    const decisionPatterns = [
      /\bif\b/g,
      /\belse\s+if\b/g,
      /\bfor\b/g,
      /\bwhile\b/g,
      /\bcase\b/g,
      /\bcatch\b/g,
      /\?/g,
      /&&/g,
      /\|\|/g
    ];

    decisionPatterns.forEach((pattern) => {
      const matches = code.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });

    return complexity;
  }
}
