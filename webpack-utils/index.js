export const getDefaultStats = (NODE_ENV) => ({
    colors: true, hash: true, version: true, timings: true, assets: NODE_ENV === 'production',
    chunks: false, modules: false, reasons: false, children: false, source: false,
    errors: true, errorDetails: true, warnings: true, publicPath: false
});