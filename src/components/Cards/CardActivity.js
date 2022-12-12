import * as React from 'react';


const CardActivity = ({activityName,activityType,description,duration,date}) =>{


    return(
        <ul className='card-container'>
            <section>
                <label>Activity</label>
                <input type = 'text' defaultValue={activityName} />
                <label>Type</label>
                <input type = 'text' defaultValue={activityType} />
                <label>description</label>
                <input type = 'text' defaultValue={description} />
                <label>duration</label>
                <input type = 'text' defaultValue={duration} />
                <label>date</label>
                <input type = 'text' defaultValue={date} />
                <div className="button-container">
                    <button>Edit</button>
                    <button>Close</button>
                </div>
            </section>
        </ul>
    )
}

export default CardActivity