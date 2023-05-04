import { useState } from 'react';
import './main.css';

const data = [
    {
        'name': 'todo',
        'tasks': [
            {
                'name': 'Piotr',
                'title': 'Odebrac paczkę',
                'id': 0
            }
        ],
    },
    {
        'name': 'workinprogress',
        'tasks': [
            {
                'name': 'Piotr',
                'title': 'asd',
                'id': 0
            }
        ],
    },
    {
        'name': 'done',
        'tasks': [
            {
                'name': 'Hubert',
                'title': 'Odebrac paczkę',
                'id': 0
            }
        ]
    },
]

const createTaskCards = (area) => {
    return (
        area.tasks.map(task => (
            <div className="task-card" key={task.id}>
                <div className="card-user-info">
                    <div className="user-photo"></div>
                    <div className="user-name">{task.name}</div>
                </div>
                <div className="task-short-description">
                    <p className='task-title'>{task.title}</p>
                </div>
            </div>
        ))
    );
}

const fetchData = () => {
    fetch('http://localhost:8000/areas')
        .then(res => res.json())
        .then(data => console.log(data[0]))
}

window.onload = () => fetchData();

const Main = () => {
    const [taskAreas, setTaskAreas] = useState(data);

    return (
        <div className="main">
            <div className="main-container">

                <div className="task-area-box">
                    <h2 className="task-area-title">To Do</h2>
                    <div className="task-area">

                        {taskAreas.map(area => (
                            area.name === 'todo' ?  createTaskCards(area) : console.log('nie')
                        ))}

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Work in progress</h2>
                    <div className="task-area">
                        
                        {taskAreas.map(area => (
                            area.name === 'workinprogress' ?  createTaskCards(area) : console.log('nie')
                        ))}

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Done</h2>
                    <div className="task-area">
                        
                        {taskAreas.map(area => (
                            area.name === 'done' ?  createTaskCards(area) : console.log('nie')
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Main;