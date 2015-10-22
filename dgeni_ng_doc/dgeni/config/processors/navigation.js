'use strict';

var _ = require('lodash');

module.exports = function generateNavigationProcessor(log) {
    var debug = log.debug;

    var AREA_NAMES = {
        api: 'API',
        guide: 'Guide'
    };

    var mappers = {
        api: function(pages, key) {
            var res = [];
            _(pages)
                .filter('module')
                .groupBy('module')
                .forEach(function(components, moduleName) {
                    debug(moduleName);
                    var navGroup = {
                        name: moduleName,
                        type: 'groups',
                        href: 'api/' + moduleName,
                        navItems: []
                    };
                    _(components)
                        .filter(function(it) {
                            return it.docType !== 'module';
                        })
                        .groupBy('docType')
                        .forEach(function(categories, typeName) {
                            navGroup.navItems.push({
                                name: typeName,
                                type: 'section',
                                href: 'api/' + moduleName + '/' + typeName
                            });
                            _(categories)
                                .forEach(function(it) {
                                    if (it.docType !== 'module') {
                                        navGroup.navItems.push({
                                            name: it.name,
                                            type: it.docType,
                                            href: it.path
                                        });
                                    }
                                })
                                .value();
                        })
                        .value();
                    res.push(navGroup);
                })
                .value();
            debug(res);
            return res;
        },
        guide: function(pages, key) {
            var res = {
                name: 'Guide',
                type: 'groups',
                href: 'guide',
                navItems: []
            };
            _(pages)
                .forEach(function(page) {
                    res.navItems.push({
                        name: page.name,
                        type: '',
                        href: page.path.replace('\\', '/')
                    });
                })
                .value();
            return [res];
        }
    };

    return {
        $process: function(docs) {
            var pages, areas, areaIds;
            pages = _(docs).filter(function(it) {
                return it.area;
            }).value();
            areas = {};
            areaIds = [];

            _(pages).groupBy('area').forEach(function(pages, key) {
                debug('start process area:', key);
                if (mappers[key]) {
                    areas[key] = {
                        id: key,
                        name: AREA_NAMES[key] || key,
                        navGroups: mappers[key](pages, key)
                    };
                    areaIds.push(key);
                }
            }).value();

            docs.push({
                docType: 'nav-data',
                id: 'nav-data',
                template: 'nav-data.template.js',
                outputPath: 'components/data/nav-data.service.js',
                areas: areas
            });
            docs.push({
                template: 'area-data.template.js',
                outputPath: 'components/data/area-data.service.js',
                areaIds: areaIds
            });
        },
        $runAfter: ['paths-computed'],
        $runBefore: ['rendering-docs']
    };
};
