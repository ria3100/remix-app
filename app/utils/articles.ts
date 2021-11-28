import Parser, {Item} from 'rss-parser';
import {CONFIG} from '~/config/common';

export interface ZennArticle {
  path: string;
  title: string;
  description: string;
  emoji: string;
  topics: string[];
  pubDate: string;
}

export const fetchZennArticles = async (): Promise<any> => {
  const res = await fetch('https://ria3100.github.io/zenn-contents/v1.json');
  const data = (await res.json()) as {items: ZennArticle[]};

  return data.items;
};

export type NoteArticle = Item;

export const fetchNoteArticles = async (): Promise<NoteArticle[]> => {
  const parser = new Parser();
  const note = parser
    .parseURL(`https://note.com/${CONFIG.NOTE_USER_ID}/rss`)
    .then(res => res.items);

  return note;
};
