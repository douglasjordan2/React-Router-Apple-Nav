import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import links from './data';
import { FaSearch } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

import Nav from './Nav';


const Container = styled.div`
    width: 100vw;
    height: 50px;
    background: #333333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

export default class NavWrapper extends Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <img src={ require('../img/logo.png') } style = {{ height: '25px', filter: 'invert(100%)' }} />
        </Link>
        { links.map(link => (
          <Link to = { `/${ link.id }` }>
            <Nav  
              link = { link }
            />
          </Link>
        ))}
        <Link to="/">
          <Nav link = {{ title: 'Support' }} />
        </Link>
        <Link to="/">
        <Nav link = {{ title: <FaSearch/> }} />
        </Link>
        <Link to="/">
        <Nav link ={{ title: <FiShoppingBag /> }} />
        </Link>
      </Container>
    )
  }
}