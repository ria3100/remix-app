import type {MetaFunction, LoaderFunction, LinksFunction} from 'remix';
import {useLoaderData, json} from 'remix';
import {fetchArticles, Article} from '~/utils/articles';
import {FirstView} from '~/components/fragments/FirstView';
import {ArticleList} from '~/components/fragments/ArticleList';

import firstViewStylesUrl from '~/styles/fragments/firstView.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css',
    },
    {rel: 'stylesheet', href: firstViewStylesUrl},
    // {
    //   rel: 'stylesheet',
    //   href: darkStylesUrl,
    //   media: '(prefers-color-scheme: dark)',
    // },
  ];
};

interface IndexData {
  articles: Article[];
}

export const loader: LoaderFunction = async () => {
  const articles = await fetchArticles();

  const data: IndexData = {articles};

  return json(data);
};

export const meta: MetaFunction = () => {
  return {
    title: 'Ria',
    description: '',
  };
};

export default function Index(): JSX.Element {
  const data = useLoaderData<IndexData>();

  return (
    <main>
      <FirstView />
      <ArticleList articles={data.articles} />
    </main>
  );
}
