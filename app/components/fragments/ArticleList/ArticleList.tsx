import type {Article} from '~/utils/articles';
import {ArticleListItem} from './internal/ArticleListItem';

export interface Props {
  articles: Article[];
}

export const ArticleList: React.VFC<Props> = ({articles}) => {
  return (
    <div className="ArticleList">
      {articles.map(article => (
        <ArticleListItem article={article} key={article.link} />
      ))}
    </div>
  );
};
