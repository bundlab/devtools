"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityAnalyzer = void 0;
class SecurityAnalyzer {
    analyze(code) {
        const vulnerabilities = [];
        const recommendations = [];
        let score = 100;
        const lines = code.split('\n');
        lines.forEach((line, idx) => {
            const lineNum = idx + 1;
            // Rule 1: Eval Usage
            if (/\beval\s*\(/g.test(line)) {
                score -= 30;
                vulnerabilities.push({
                    id: `sec-eval-${lineNum}`,
                    line: lineNum,
                    type: 'Code Execution',
                    description: 'Use of eval() detected, presenting arbitrary code execution risks.',
                    severity: 'critical',
                    remediation: 'Avoid eval() entirely. Use strict JSON parsing or standard function maps.'
                });
            }
            // Rule 2: Potential XSS via innerHTML
            if (/\.innerHTML\s*=/g.test(line)) {
                score -= 20;
                vulnerabilities.push({
                    id: `sec-xss-${lineNum}`,
                    line: lineNum,
                    type: 'Cross-Site Scripting (XSS)',
                    description: 'Direct assignment to innerHTML can enable DOM XSS attacks.',
                    severity: 'high',
                    remediation: 'Use textContent, innerText, or standard sanitized DOM APIs.'
                });
            }
            // Rule 3: Hardcoded Credentials
            if (/(api_key|password|secret|private_key)\s*=\s*['"][A-Za-z0-9_\-]{8,}['"]/i.test(line)) {
                score -= 25;
                vulnerabilities.push({
                    id: `sec-cred-${lineNum}`,
                    line: lineNum,
                    type: 'Hardcoded Secrets',
                    description: 'Potential secret or credentials detected directly in source code.',
                    severity: 'high',
                    remediation: 'Migrate keys out of source code into environment variables or key vaults.'
                });
            }
            // Rule 4: SQL Injection Patterns
            if (/(SELECT|INSERT|UPDATE|DELETE).*\+.*(req\.body|req\.query|params)/i.test(line)) {
                score -= 30;
                vulnerabilities.push({
                    id: `sec-sqli-${lineNum}`,
                    line: lineNum,
                    type: 'SQL Injection',
                    description: 'Concatenated strings in database query construction.',
                    severity: 'critical',
                    remediation: 'Use parameterized queries, prepared statements, or an ORM.'
                });
            }
            // Rule 5: Permissive CORS Setup
            if (/'Access-Control-Allow-Origin'\s*,\s*'\*'/i.test(line) || /cors\(\s*\{\s*origin:\s*'\*'\s*\}\s*\)/i.test(line)) {
                score -= 15;
                vulnerabilities.push({
                    id: `sec-cors-${lineNum}`,
                    line: lineNum,
                    type: 'Insecure CORS Policy',
                    description: 'Wildcard CORS header configured allowing any external origin.',
                    severity: 'medium',
                    remediation: 'Specify strict domain allowlists in CORS configuration.'
                });
            }
        });
        if (vulnerabilities.length > 0) {
            recommendations.push('Run security auditing pipelines in CI/CD step before production deployments.');
        }
        return {
            securityScore: Math.max(0, score),
            vulnerabilities,
            recommendations
        };
    }
}
exports.SecurityAnalyzer = SecurityAnalyzer;
