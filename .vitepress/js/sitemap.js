export const sitemap = {
  hostname: "https://www.lincdn.com",
  transformItems: (items) => {
    // 添加新项目或修改/筛选现有选项
    items.push({
      url: "/extra-page",
      changefreq: "monthly",
      priority: 0.8,
    });
    return items;
  },
};
