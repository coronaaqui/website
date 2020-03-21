import { useRouter } from 'next/router';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';

const State = () => {
  const router = useRouter();
  const { state } = router.query;

  return (
    <section>
      <Banner />
      Estado: {state}
      <Footer />
    </section>
  );
};

export default State;
