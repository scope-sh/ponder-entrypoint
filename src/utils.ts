const ponderEntryPointVersion = process.env.PONDER_ENTRYPOINT_VERSION || '0.7';
const isIndexing0_6 =
  ponderEntryPointVersion === '0.6' || ponderEntryPointVersion === 'all';
const isIndexing0_7 =
  ponderEntryPointVersion === '0.7' || ponderEntryPointVersion === 'all';

export { isIndexing0_6, isIndexing0_7 };
