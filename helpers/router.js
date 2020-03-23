export const toRegion = (router, val) => {
  return router.push(
    `/estados?uf=${val.toLowerCase()}`,
    `/estados/${val.toLowerCase()}`,
    {
      shallow: true
    }
  );
};
