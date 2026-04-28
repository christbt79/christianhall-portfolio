export type Client = {
  name: string;
  /** Path under /public — e.g. "/clients/aws.svg" for a file at public/clients/aws.svg */
  logo: string;
  /** Optional homepage link */
  href?: string;
};

// Drop your logo files into `public/clients/` and reference them here.
// SVGs work best (sharp at any size). PNGs with transparent backgrounds also fine.
// If your logos look too dark on the dark theme, see the comment in `Clients.astro`
// about the `monochrome` option.
export const clients: Client[] = [
  { name: 'AWS', logo: '/clients/aws.svg' },
  { name: 'NVIDIA', logo: '/clients/nvidia.svg' },
  { name: 'AMD', logo: '/clients/amd.svg' },
  { name: 'Google Cloud', logo: '/clients/google-cloud.svg' },
  { name: 'Intel', logo: '/clients/intel.svg' },
  { name: 'IBM', logo: '/clients/ibm.svg' },
  { name: 'HPE', logo: '/clients/hpe.svg' },
  { name: 'Rescale', logo: '/clients/rescale.svg' },
  { name: 'Bulk', logo: '/clients/bulk.svg' },
  { name: 'AtNorth', logo: '/clients/atnorth.svg' },
];
