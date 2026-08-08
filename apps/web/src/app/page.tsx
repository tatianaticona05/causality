import { createHealthStatus } from '@causality/shared';

export default function Page() {
  const health = createHealthStatus('web');

  return (
    <main>
      <h1>Causality</h1>
      <p>Web app placeholder. Status: {health.status}</p>
    </main>
  );
}
