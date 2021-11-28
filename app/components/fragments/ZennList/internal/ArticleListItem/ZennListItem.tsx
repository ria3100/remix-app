import type {ZennArticle} from '~/utils/articles';
import {FaTags} from 'react-icons/fa';
import dayjs from 'dayjs';

export interface Props {
  article: ZennArticle;
}

export const ZennListItem: React.VFC<Props> = ({article}) => {
  return (
    <div className="ZennListItem">
      <a
        className="title"
        href={`https://zenn.dev/ria/articles/${article.path}`}
      >
        <img src="/zenn.png" />
        {article.title}
      </a>

      <p className="pubDate">{dayjs(article.pubDate).format('YYYY-MM-DD')}</p>

      <p className="description">{article.description}</p>

      <div className="topics">
        <FaTags />
        <ul>
          {article.topics.map(topic => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>

      {/* <p className="pubDate">{dayjs(article.pubDate).format('YYYY/MM/DD')}</p> */}
    </div>
  );
};
