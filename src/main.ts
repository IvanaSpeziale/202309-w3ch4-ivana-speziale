import { Header } from './components/header';
import { ListPendingSeries } from './components/pendingList';
import { ListWatchedSeries } from './components/watchedList';

import { data } from './data/repo';

const main = () => {
  console.log('Loaded Main ');

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;
  const header = new Header('#app');
  const listPendingSeries = new ListPendingSeries('#app', data);
  const listWatchedSeries = new ListWatchedSeries('#app', data);
};

main();
