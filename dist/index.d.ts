import { CodeAnalyzer } from './analyzer/codeAnalyzer';
import { PerformanceAnalyzer } from './analyzer/performanceAnalyzer';
import { SecurityAnalyzer } from './analyzer/securityAnalyzer';
import { FullAnalysisResult } from './types';
export declare class AIDevTools {
    private codeAnalyzer;
    private performanceAnalyzer;
    private securityAnalyzer;
    constructor();
    analyze(code: string): FullAnalysisResult;
}
export * from './types';
export { CodeAnalyzer, PerformanceAnalyzer, SecurityAnalyzer };
