const buildNav = require('./config/shortcodes/buildnav');

module.exports = function(config) {
    // pass through
    config.addPassthroughCopy('css');
    config.addPassthroughCopy('img');
    config.addPassthroughCopy('js');
    config.addPassthroughCopy('lib');

    config.addLayoutAlias('base', 'base.njk');

    config.addShortcode('build_nav', buildNav);

    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'public',
            includes: '_includes'
        }
    }
}