export type IssueSeverity = 'low' | 'medium' | 'high' | 'critical';
export interface CodeIssue {
    id: string;
    line: number;
    message: string;
    severity: IssueSeverity;
    rule: string;
    aiSuggestion?: string;
}
export interface CodeAnalysisResult {
    maintainabilityScore: number;
    complexity: number;
    issues: CodeIssue[];
    aiSuggestions: string[];
}
export interface PerformanceIssue {
    id: string;
    line: number;
    description: string;
    estimatedComplexity: string;
    recommendation: string;
}
export interface PerformanceAnalysisResult {
    performanceScore: number;
    complexityDetected: string;
    issues: PerformanceIssue[];
    recommendations: string[];
}
export interface SecurityVulnerability {
    id: string;
    line: number;
    type: string;
    description: string;
    severity: IssueSeverity;
    remediation: string;
}
export interface SecurityAnalysisResult {
    securityScore: number;
    vulnerabilities: SecurityVulnerability[];
    recommendations: string[];
}
export interface FullAnalysisResult {
    overallScore: number;
    codeAnalysis: CodeAnalysisResult;
    performanceAnalysis: PerformanceAnalysisResult;
    securityAnalysis: SecurityAnalysisResult;
    summary: string;
}
