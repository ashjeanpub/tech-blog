// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'My Site',
    // tagline 사용하지 않음
    // 브라우저 상단의 탭의 설명라인이지만 기본적으로 블로그 및 docs를 랜딩페이지로 사용하므로 표시될 일이 없음
    // tagline: 'Dinosaurs are cool',
    // favicon 사용하지 않음
    // 브라우저 상단의 탭 이미지, 있으면 좋으나 현재는 이미지 없음
    // favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://ashjeanpub.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/tech-blog/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ashjeanpub', // Usually your GitHub org/user name.
    projectName: 'tech-blog', // Usually your repo name.
    // 추가 설정
    trailingSlash: false,
    //

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    // 원본 설정
    // i18n: {
    //   defaultLocale: 'en',
    //   locales: ['en'],
    // },
    // 변경 설정
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko','en'],
    },


    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    routeBasePath: '/', // Serve the docs at the site's root
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // 추가 설정
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // 이미지 사용하지 않음
            // image: 'img/docusaurus-social-card.jpg',
            navbar: {
                // 상단 제목
                // the odds 를 붙여서 이름으로 삼음
                title: 'Theodds',
                // 로고 사용하지 않음
                // logo: {
                //     alt: 'My Site Logo',
                //     src: 'img/logo.svg',
                // },
                items: [

                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        to: '/', label: 'Blog', position: 'left'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'DataSidebar',
                        position: 'left',
                        label: 'Data',
                    },
                     {
                        type: 'docSidebar',
                        sidebarId: 'CSSidebar',
                        position: 'left',
                        label: 'CS',
                    },
                     {
                        type: 'docSidebar',
                        sidebarId: 'ETCSidebar',
                        position: 'left',
                        label: 'ETC',
                    },
                    {
                        href: 'https://github.com/ashjeanpub/tech-blog',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Data',
                                to: '/docs/Data/intro',
                            },
                                                        {
                                label: 'CS',
                                to: '/docs/CS/intro',
                            },
                                                        {
                                label: 'ETC',
                                to: '/docs/ETC/intro',
                            },
                        ],
                    },

                    // Community 바 사용하지 않음
                    // {
                    //     title: 'Community',
                    //     items: [
                    //         {
                    //             label: 'Stack Overflow',
                    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //         },
                    //         {
                    //             label: 'Discord',
                    //             href: 'https://discordapp.com/invite/docusaurus',
                    //         },
                    //         {
                    //             label: 'Twitter',
                    //             href: 'https://twitter.com/docusaurus',
                    //         },
                    //     ],
                    // },
                    // More 바 사용하지 않음
                    // {
                    //     title: 'More',
                    //     items: [
                    //         // {
                    //         //     label: 'Blog',
                    //         //     // to: '/blog',
                    //         //     to: '/',
                    //         // },
                    //         {
                    //             label: 'GitHub',
                    //             href: 'https://github.com/facebook/docusaurus',
                    //         },
                    //     ],
                    // },
                    // Members 바 추가
                    {
                        title: 'Members',
                        items: [
                            // {
                            //     label: 'Blog',
                            //     // to: '/blog',
                            //     to: '/',
                            // },
                            {
                                label: 'Gerome Yoo',
                                href: 'https://github.com/ashjean7805',
                            },
                                                        {
                                label: 'Allonsi',
                                href: 'https://github.com/allonsi',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Theodds Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;





