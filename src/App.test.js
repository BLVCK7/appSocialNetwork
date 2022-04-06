import SocialApp from "./App";
import React from "react";
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
