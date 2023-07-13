import { createContext } from 'react';

const StyleContext = createContext({
  isDark: false,
  changeTheme: () => {},
});

export default StyleContext;
