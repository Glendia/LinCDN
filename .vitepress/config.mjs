import { defineConfig } from "vitepress";

//导入外部JS 文件
//import { algolia } from "./js/algolia.js"; //搜索
//import {carbonAds} from './js/carbonAds.js';//广告
import { footer } from "./js/footer.js"; //页脚
import { head } from "./js/head.js"; //页头
import { nav } from "./js/nav.js"; //导航栏
import { sidebar } from "./js/sidebar.js"; //侧边栏
import { socialLinks } from "./js/socialLinks.js"; //社交链接
import { markdown } from "./js/markdown.js"; //markdown配置
import { sitemap } from "./js/sitemap.js"; //站点地图
//import { editLink } from "./js/editLink.js"; //编辑链接

export default defineConfig({
  lang: "zh-CN", //语言
  base: "/", //基础路径
  title: "LinCDN", //标题
  titleTemplate: ":title - LinCDN", //标题
  description: "免费CDN", //描述
  //cleanUrls: true, //链接后面的.html去掉
  outDir: "dist", //输出目录
  assetsDir: "./assets", //静态资源目录
  cacheDir: ".vitepress/cache", //缓存目录
  ignoreDeadLinks: true, //忽略死链接
  metaChunks: true, //压缩js
  appearance: true, //暗黑模式
  markdown: markdown, //markdown配置
  head: head, //浏览器加载头部
  metaChunk: true, //内容提取到单独的js文件中，页面加载更快
  sitemap: sitemap, //站点地图
  themeConfig: {
    logo: { light: "./logo.svg", dark: "./logo-dark.svg", alt: "LinCDN" }, //logo
    siteTitle: false, //隐藏标题
    nav: nav, //导航栏
    socialLinks: socialLinks, //社交链接
    darkModeSwitchLabel: "暗黑模式", //暗黑模式
    lightModeSwitchTitle: "浅色模式", //浅色模式
    darkModeSwitchTitle: "深色模式",
    sidebarMenuLabel: "菜单", //菜单
    returnToTopLabel: "返回顶部", //返回顶部
    langMenuLabel: "语言", //语言
    externalLinkIcon: true, //外部链接图标
    //lastUpdatedText: "最后更新于", //最后更新
    //lastUpdated: true, //最后更新
sidebar: sidebar, //侧边栏
    //algolia: algolia,
    footer: footer, //页脚
    //editLink: editLink, //编辑链接
    //carbonAds: carbonAds, //广告
    outline: {
      level: [2, 3],
      label: "本页目录",
    }, //目录
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    }, //文档页脚
  },
});
