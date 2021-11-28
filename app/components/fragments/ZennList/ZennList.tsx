import type {ZennArticle} from '~/utils/articles';
import {ZennListItem} from './internal/ArticleListItem';

export interface Props {
  articles: ZennArticle[];
}

export const ZennList: React.VFC<Props> = ({articles}) => {
  return (
    <div className="ZennList">
      {articles.map(article => (
        <ZennListItem article={article} key={article.path} />
      ))}
    </div>
  );
};
