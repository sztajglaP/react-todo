import useFetch from '../useFetch';
import './main.css';
import './cardInfo.css';
import { useState } from 'react';

const Main = () => {
    const data = useFetch('http://localhost:8000/areas');
    const [popup, setPopup] = useState('inactive');
    const [task, setTask] = useState(null);

    const createTaskCards = (task) => {
        return (
            <div className="task-card" key={task.id} onClick={() => {
                setTask(task);
                setPopup('active')
            }}>
                <div className="card-info-box">
                    <div className='card-user-info'>
                        <div className="user-photo"></div>
                        <div className="user-name">{task.name}</div>
                    </div>
                    <div className="date">{task.date}</div>
                </div>
                <div className="task-short-description">
                    <p className='task-title'>{task.title}</p>
                </div>  
            </div> 
        );
    }

    return (
        <div className="main">

            {
                <div className={`card-info-popup ${popup}`}>
                    <div className="popup-content">
                        <button className="popup-close-btn" onClick={() => setPopup('inactive')}>X</button>
                        <div className="popup-info-box">
                            <div className="popup-user-info">
                                <div className="popup-user-image"></div>
                                {task && <div className="popup-user-name">{task.name}</div>}
                            </div>
                            {task && <div className="popup-date">{task.date}</div>}
                        </div>
                        {task && <p className="popup-title">{task.title}</p>}
                        <hr />
                        {task && <ul className="popup-comments">
                            {task.comments.map(comment => (
                                <li key={comment.id}>
                                    {comment.date}
                                    <span>{comment.text}</span>
                                </li> 
                            ))}          
                        </ul>}
                        <p>Dodaj komentarz</p>
                        <input type="text" className='comment-input'/>
                        <button className="popup-add-comment">Dodaj komentarz</button>
                    </div>
                </div>
            }

            <div className="main-container">    

                <div className="task-area-box">
                    <h2 className="task-area-title">To Do</h2>
                    <div className="task-area">

                        {
                            data && data[0].tasks.map(task => createTaskCards(task))
                        }

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Work in progress</h2>
                    <div className="task-area">
                        
                        {
                            data && data[1].tasks.map(task => createTaskCards(task))
                        }

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Done</h2>
                    <div className="task-area">
                        
                        {
                            data && data[2].tasks.map(task => createTaskCards(task))
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Main;