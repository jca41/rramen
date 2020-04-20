import { Typography } from 'antd';

const Banner = ({ children }) => (
  <div className={'banner'}>
    <Typography className={'banner__content'}>{children}</Typography>
  </div>
);

export default Banner;
