export type Result = {
  /** The big number / headline stat — e.g. "7.1x", "100+", "£24M" */
  stat: string;
  /** The smaller line of context below the stat */
  label: string;
};

// Edit this list freely. Three entries fits the layout best;
// four also works (becomes a 2x2 grid on tablet).
export const results: Result[] = [
  { stat: '7.1x', label: 'ROI on tri-partner campaigns in HPC market' },
  { stat: '9+', label: 'Years as B2B enterprise technology marketing leader' },
  { stat: '100+', label: 'Marketing campaigns delivered globally' },
];
