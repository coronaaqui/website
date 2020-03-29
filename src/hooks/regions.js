import React from 'react';

export const RegionContext = React.createContext();

export const RegionProvider = ({ children, region }) => {
  const value = React.useMemo(() => region, [region]);

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
};

export function useRegion() {
  const context = React.useContext(RegionContext);

  return context;
}
