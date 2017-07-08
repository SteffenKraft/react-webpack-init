import React from 'react'

const Layout = (props) => (
  <div>
    <div>Header</div>
    {props.children}
    <div>Footer</div>
  </div>
)

export default Layout;
