import React, {memo} from 'react';

import {Block, Container} from './components';

const HomePage = ({global: {plugins}, history: {push}}) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>欢迎来到胡克的博客</Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
