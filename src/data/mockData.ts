export const kpis = [
  ['Pending Reviews', '18'], ['New Draft Artifacts', '12'], ['Running Workflows', '5'],
  ['High-Risk Register Fields', '27'], ['Failed Tasks', '2'], ['Approved Reports', '34'],
]

export const activities = [
  'Register consistency report generated for uart_ctrl',
  'Review approved for uart_ctrl block',
  'Regression triage task failed in pcie_phy',
  'New spec imported for clock_mgr',
]

export const riskOverview = [
  ['reset', 8], ['irq', 6], ['lock', 3], ['bist', 4], ['jtag', 2], ['security', 4],
]

export const registerTasks = [
  { id: 'task-uart-01', name: 'uart_ctrl spec-rtl consistency', files: 'uart_ctrl_spec.xlsx, uart_ctrl.sv', mode: 'Full Pipeline', status: 'Needs Review', diff: 12, risk: 5, updated: '2026-03-17 09:42' },
  { id: 'task-gpio-03', name: 'gpio field extraction', files: 'gpio_regs.csv, gpio_top.sv', mode: 'Extract Table', status: 'Draft', diff: 3, risk: 2, updated: '2026-03-17 08:13' },
  { id: 'task-reset-02', name: 'reset_ctrl compare', files: 'reset_ctrl.md, reset_ctrl.sv', mode: 'Compare Spec vs RTL', status: 'Failed', diff: 9, risk: 7, updated: '2026-03-16 22:01' },
]

export const differences = [
  { type: 'reset_value_mismatch', path: 'uart_ctrl.CTRL.EN.reset', spec: '0x0', rtl: '0x1', severity: 'high', ref: 'uart_ctrl.sv:144', decision: 'pending', comment: '' },
  { type: 'access_type_mismatch', path: 'uart_ctrl.STAT.IRQ_STICKY.access', spec: 'RO', rtl: 'RW1C', severity: 'medium', ref: 'uart_ctrl.sv:231', decision: 'pending', comment: '' },
  { type: 'missing_in_rtl', path: 'uart_ctrl.DBG.LOCK_BYPASS', spec: 'exists', rtl: '-', severity: 'high', ref: 'uart_ctrl_spec.xlsx:DBG', decision: 'escalate', comment: 'security related' },
  { type: 'duplicated_field', path: 'uart_ctrl.INT.EN', spec: 'single', rtl: 'duplicated', severity: 'low', ref: 'uart_ctrl.sv:300', decision: 'pending', comment: '' },
]

export const evidenceMap: Record<string, { snippet: string; rules: string[]; reasoning: string; parser: string; confidence: string }> = {
  reset_value_mismatch: {
    snippet: 'always_ff @(posedge clk) if (!rst_n) ctrl_en <= 1\'b1;',
    rules: ['RST-001 strict reset match', 'RST-011 default value consistency'],
    reasoning: 'Spec states reset 0x0 while RTL forces 1, likely warm reset behavior undocumented.',
    parser: 'Spec parser extracted reset as decimal 0. RTL parser extracted binary 1.',
    confidence: '0.95',
  },
  access_type_mismatch: {
    snippet: 'irq_sticky <= irq_sticky & ~wdata[3]; // rw1c behavior',
    rules: ['ACC-003 access normalization', 'IRQ-004 sticky field high risk'],
    reasoning: 'Field behavior implies RW1C but spec marks RO. Review with designer needed.',
    parser: 'Detected write-clear expression pattern.',
    confidence: '0.88',
  },
}

export const highRiskFields = [
  ['uart_ctrl', 'IRQ_STICKY', 'irq', 'IRQ-004', 'Sticky interrupt can mask errors', 'Force dedicated review by verification lead'],
  ['uart_ctrl', 'LOCK_BYPASS', 'security', 'SEC-002', 'Lock bypass can break privilege boundary', 'Require security signoff'],
  ['pcie_phy', 'BIST_EN', 'bist', 'DFT-021', 'BIST enable writable in normal mode', 'Gate with debug fuse'],
]

export const reviewItems = [
  ['UART CTRL reset mismatch', 'Register Agent', 'reset_value_mismatch', 'High', 'Pending', 'alice', '2026-03-17 09:40'],
  ['GPIO irq sticky field warning', 'Register Agent', 'high_risk', 'Medium', 'Pending', 'bob', '2026-03-17 08:00'],
  ['Clock reset domain draft review', 'Workflow Agent', 'draft_report', 'Low', 'In Review', 'carol', '2026-03-16 17:30'],
  ['Regression triage pending decision', 'Triage Agent', 'failure_summary', 'High', 'Escalated', 'dave', '2026-03-16 14:30'],
]

export const assets = [
  ['uart_ctrl_register_consistency_report_v0.1.md', 'Report', 'Register Agent', 'v0.1', 'Draft', '2026-03-17', '/reports/uart_ctrl/'],
  ['high_risk_register_report_uart.json', 'Artifact', 'Register Agent', 'v0.2', 'Approved', '2026-03-17', '/assets/high-risk/'],
  ['register_review_schema_v0.1', 'Schema', 'Platform', 'v0.1', 'Approved', '2026-03-10', '/schemas/'],
  ['default_register_ruleset.yaml', 'Template', 'Register Agent', 'v1.0', 'Approved', '2026-03-01', '/templates/'],
]
