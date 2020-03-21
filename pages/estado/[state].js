import { useRouter } from 'next/router';

const State = () => {
  const router = useRouter();
  const { state } = router.query;

  return <section>Estado: {state}</section>;
};

export default State;
