import type {Article} from '~/utils/articles';

export interface Props {
  article: Article;
}

export const ArticleListItem: React.VFC<Props> = ({article}) => {
  return (
    <div className="ArticleListItem">
      <p>{article.title}</p>
      <p>{article.pubDate}</p>
    </div>
  );
};
