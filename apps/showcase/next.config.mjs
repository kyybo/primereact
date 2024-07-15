/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    publicRuntimeConfig: {
        appVersion: process.env.npm_package_version || ''
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
};

export default nextConfig;
