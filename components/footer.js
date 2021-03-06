import { Layout, Divider } from 'antd';
import { AUTHOR_URL, REPO_URL } from '../constants';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className={'footer'}>
      <div>
        <span>
          Made by{' '}
          <a target={'_blank'} href={AUTHOR_URL} rel="noopener noreferrer">
            jca41
          </a>
        </span>

        <Divider type={'vertical'} />

        <a href={REPO_URL} target={'_blank'} rel="noopener noreferrer">
          {'Github repository'}
        </a>
      </div>
      <div>
        <span style={{ fontSize: '12px' }}>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">
            Flat Icons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </span>
      </div>
    </AntFooter>
  );
};

export default Footer;
