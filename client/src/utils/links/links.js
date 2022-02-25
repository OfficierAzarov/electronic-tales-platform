export const buildLink = (article) => {
  if (article.link != null) {
    return article.link;
  } else {
    return {
      path: `${article.world}/articles/${article.slug}`,
      openInNewTab: false,
    };
  }
};
