import { CodeAnalysisResult } from '../types';
export declare class CodeAnalyzer {
    analyze(code: string): CodeAnalysisResult;
    private calculateComplexity;
}
