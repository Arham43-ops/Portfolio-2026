const stripUnsupportedTheme = () => ({
    postcssPlugin: 'strip-unsupported-theme',
    Once(root) {
        root.walkAtRules('theme', (rule) => {
            if (rule.nodes && rule.nodes.length > 0) {
                rule.nodes.forEach((node) => {
                    rule.parent.insertBefore(rule, node.clone());
                });
            }
            rule.remove();
        });
    },
});

module.exports = {
    plugins: [
        stripUnsupportedTheme(),
        require('tailwindcss')({}),
        require('autoprefixer')({}),
    ],
};
