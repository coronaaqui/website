import React, { useRegion } from 'react';
import { useEffect } from 'react';
import { useRouter, withRouter } from 'next/router';
import { Estado } from './index';

// Current URL is '/'
function Page() {
  const router = useRouter();
  const { estado } = router.query;

  return <Estado uf={estado} />;
}

export default Page;
