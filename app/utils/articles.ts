import Parser, {Item} from 'rss-parser';
import {CONFIG} from '~/config/common';

const parser = new Parser();

export type Article = Item;

export const fetchArticles = async (): Promise<Article[]> => {
  const [zenn, note] = await Promise.all([
    parser
      .parseURL(`https://zenn.dev/${CONFIG.ZENN_USER_ID}/feed`)
      .then(res => res.items),
    parser
      .parseURL(`https://note.com/${CONFIG.NOTE_USER_ID}/rss`)
      .then(res => res.items),
  ]);

  const items = [...zenn, ...note].sort(
    (a, b) => Date.parse(b.pubDate ?? '') - Date.parse(a.pubDate ?? '')
  );

  return items;
};
