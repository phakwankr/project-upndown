import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Activity from './Activity';
import Wrapper from '../assets/wrappers/ActivityContainer';
import PageBtnContainer from './PageBtnContainer';

const ActivityContainer = () => {
  const {
    getActivity,
    activity,
    page,
    totalActivity,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getActivity();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (activity.length === 0) {
    return (
      <Wrapper>
        <h2>No activity to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalActivity} job{activity.length > 1 && 's'} found
      </h5>
      <div className='activity'>
        {activity.map((activity) => {
          return <Activity key={activity._id} {...activity} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default ActivityContainer;
