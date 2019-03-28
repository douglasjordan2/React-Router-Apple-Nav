import React, { Component } from 'react';
import links from './data';
import styled, { css } from 'styled-components';

const SubNav = props => {
  const Container = styled.div`
    max-width: 100vw;
    padding: 0 5%;
    height: 100px
    display: flex;
    justify-content: space-around;
    background: #2d2d2d;
  `;

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    text-align: center;
  `;

  const New = styled.span`
    color: #ee5600;
  `;

  const Old = styled(New)`
    color: #2d2d2d;
  `;

  const id = props.match.params.id;
  const link = links.find(link => {
    return link.id === id;
  })
  const content = link.subContent;
  
  return (
    <Container>
      { content.map(content => (
        <Card>
          { content.img }
          <span>{ content.title }</span>
          { content.new ? <New>New</New> : <Old>old</Old> }
        </Card>
      )) }
    </Container>
  );
}

export default SubNav;