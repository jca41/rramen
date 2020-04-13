import { useEffect } from 'react';

const Admin = ({ enableCMS }) => {
  useEffect(() => {
    if (enableCMS == 'true') {
      import('netlify-cms-app').then((CMS) => {
        CMS.init();
      });
    }
  }, []);

  return null;
};

export async function getStaticProps() {
  return { props: { enableCMS: process.env.ENABLE_CMS } };
}

export default Admin;
