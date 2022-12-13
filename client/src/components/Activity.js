import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Activity'
import ActivityInfo from './ActivityInfo'

const Activity = ({
  _id,
  activityName,
  activityType,
  description,
  duration,
  createdAt,
}) => {
  const { setEditActivity, deleteActivity } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{activityType.charAt(0)}</div>
        <div className='info'>
          <h5>{activityName}</h5>
          <p>{activityType}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ActivityInfo icon={<FaLocationArrow />} text={activityName} />
          <ActivityInfo icon={<FaCalendarAlt />} text={date} />
          <ActivityInfo icon={<FaBriefcase />} text={activityType} />
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-activity'
              className='btn edit-btn'
              onClick={() => setEditActivity(_id)}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteActivity(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Activity
