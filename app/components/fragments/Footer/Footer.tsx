import {FaTwitter, FaGithub} from 'react-icons/fa';

export const Footer: React.VFC = () => {
  return (
    <footer className="Footer">
      <section>
        <div className="photo">
          <img src="/bio.png" />
        </div>
        <div className="bio">
          <div className="name">Ria</div>

          <div className="sentences">
            tricot inc. Web Engineer.
            <br />
            主に TypeScript / React を使ったフロントエンド開発をしています。
          </div>

          <div className="sns">
            <a
              href="https://twitter.com/_ria0130"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/ria3100"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
