"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityAnalyzer = exports.PerformanceAnalyzer = exports.CodeAnalyzer = exports.AIDevTools = void 0;
const codeAnalyzer_1 = require("./analyzer/codeAnalyzer");
Object.defineProperty(exports, "CodeAnalyzer", { enumerable: true, get: function () { return codeAnalyzer_1.CodeAnalyzer; } });
const performanceAnalyzer_1 = require("./analyzer/performanceAnalyzer");
Object.defineProperty(exports, "PerformanceAnalyzer", { enumerable: true, get: function () { return performanceAnalyzer_1.PerformanceAnalyzer; } });
const securityAnalyzer_1 = require("./analyzer/securityAnalyzer");
Object.defineProperty(exports, "SecurityAnalyzer", { enumerable: true, get: function () { return securityAnalyzer_1.SecurityAnalyzer; } });
class AIDevTools {
    codeAnalyzer;
    performanceAnalyzer;
    securityAnalyzer;
    constructor() {
        this.codeAnalyzer = new codeAnalyzer_1.CodeAnalyzer();
        this.performanceAnalyzer = new performanceAnalyzer_1.PerformanceAnalyzer();
        this.securityAnalyzer = new securityAnalyzer_1.SecurityAnalyzer();
    }
    analyze(code) {
        const codeAnalysis = this.codeAnalyzer.analyze(code);
        const performanceAnalysis = this.performanceAnalyzer.analyze(code);
        const securityAnalysis = this.securityAnalyzer.analyze(code);
        // Calculate aggregated overall score
        const overallScore = Math.round(codeAnalysis.maintainabilityScore * 0.3 +
            performanceAnalysis.performanceScore * 0.3 +
            securityAnalysis.securityScore * 0.4);
        let summary = `Overall Quality Score: ${overallScore}/100. `;
        if (overallScore >= 85) {
            summary += 'Code health is optimal with low risk profiles.';
        }
        else if (overallScore >= 60) {
            summary += 'Code health is moderate. Address security alerts and maintainability issues.';
        }
        else {
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
exports.AIDevTools = AIDevTools;
__exportStar(require("./types"), exports);
