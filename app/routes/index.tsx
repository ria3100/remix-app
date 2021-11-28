import type {MetaFunction, LoaderFunction, LinksFunction} from 'remix';
import {useLoaderData, json} from 'remix';
import type {ZennArticle, NoteArticle} from '~/utils/articles';
import {fetchZennArticles, fetchNoteArticles} from '~/utils/articles';
import {FirstView} from '~/components/fragments/FirstView';
import {ZennList} from '~/components/fragments/ZennList';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap',
      rel: 'stylesheet',
    },
    // {
    //   rel: 'stylesheet',
    //   href: darkStylesUrl,
    //   media: '(prefers-color-scheme: dark)',
    // },
  ];
};

interface IndexData {
  noteArticles: NoteArticle[];
  zennArticles: ZennArticle[];
}

export const loader: LoaderFunction = async () => {
  const noteArticles = await fetchNoteArticles();
  const zennArticles = await fetchZennArticles();

  const data: IndexData = {zennArticles, noteArticles};

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

      <section className="Container">
        <ZennList articles={data.zennArticles} />
      </section>
    </main>
  );
}
