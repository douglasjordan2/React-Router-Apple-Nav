import React from 'react'
import styled, { css } from 'styled-components';

export default function Nav(props) {
  const NavLink = styled.span`
    text-decoration: none;
    color: white;
    border: 0;
  `;

  const { title } = props.link; 
  return (
    <NavLink>
      { title }
    </NavLink>
  )
}
