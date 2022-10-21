import user from '../incomingData/user.json';
import data from '../incomingData/data.json'
import {Profile} from 'components/Profile/Profile'
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>   
    <Profile username={user.username} 
            tag={user.tag} 
            location={user.location} 
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}/>

    <Statistics title="Upload stats"  stats={data}/>
    <Statistics stats={data}/>
    </>

  );
};
