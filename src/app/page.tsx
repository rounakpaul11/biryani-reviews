import { BiryaniDashboard } from '@/components/BiryaniDashboard';
import { biryaniRestaurants } from '@/data/biryaniData';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <BiryaniDashboard initialRestaurants={biryaniRestaurants} />
    </main>
  );
}
