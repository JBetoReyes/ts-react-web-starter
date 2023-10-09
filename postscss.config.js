import postcssPresetEnv from 'postcss-preset-env';
import htmlPurge from 'vite-plugin-purgecss'

export default {
    plugins: [
        htmlPurge(),
        postcssPresetEnv({
            stage: 3,
            features: {
                "logical-properties-and-values": false,
                "opacity-percentage": true,
				"text-decoration-shorthand": true
            }
        }),
    ]
};