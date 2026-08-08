"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceAnalyzer = void 0;
class PerformanceAnalyzer {
    analyze(code) {
        const issues = [];
        const recommendations = [];
        let score = 100;
        let complexityDetected = 'O(1)';
        // Check nested loops (indicates potential O(N^2) or O(N^3))
        const nestedLoopPattern = /(for|while)\s*\([^)]*\)\s*\{[^}]*(for|while)\s*\([^)]*\)/g;
        if (nestedLoopPattern.test(code)) {
            complexityDetected = 'O(N^2)';
            score -= 30;
            issues.push({
                id: 'nested-loops',
                line: 1,
                description: 'Nested loops detected, causing potential polynomial time complexity.',
                estimatedComplexity: 'O(N^2)',
                recommendation: 'Use Map/Set hash-based lookups to convert quadratic loops into linear O(N) operations.'
            });
            recommendations.push('Refactor nested loop loops into single-pass map indexing.');
        }
        else if (/(for|while)\s*\([^)]*\)/g.test(code)) {
            complexityDetected = 'O(N)';
        }
        // Inefficient lookup inside loops
        const loopWithIncludesPattern = /(for|while)[^{]*\{[^}]*\.(includes|indexOf)\([^}]*\}/g;
        if (loopWithIncludesPattern.test(code)) {
            score -= 15;
            issues.push({
                id: 'inefficient-loop-lookup',
                line: 1,
                description: 'Array.includes/indexOf used inside a loop body creates implicit O(N^2) work.',
                estimatedComplexity: 'O(N^2)',
                recommendation: 'Convert the target array to a Set object prior to the loop execution.'
            });
            recommendations.push('Replace array lookup in loop with Set.has() O(1) checks.');
        }
        return {
            performanceScore: Math.max(0, score),
            complexityDetected,
            issues,
            recommendations
        };
    }
}
exports.PerformanceAnalyzer = PerformanceAnalyzer;
