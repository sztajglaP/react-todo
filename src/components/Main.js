import useFetch from '../useFetch';
import './main.css';



// const data = [
//     {
//         'name': 'todo',
//         'tasks': [
//             {
//                 'name': 'Piotr',
//                 'title': 'Odebrac paczkę',
//                 'id': 0
//             }
//         ],
//     },
//     {
//         'name': 'workinprogress',
//         'tasks': [
//             {
//                 'name': 'Piotr',
//                 'title': 'asd',
//                 'id': 0
//             }
//         ],
//     },
//     {
//         'name': 'done',
//         'tasks': [
//             {
//                 'name': 'Piotr',
//                 'title': 'Odebrac paczkę',
//                 'id': 0
//             }
//         ]
//     },
// ]

// const createTaskCards = (area) => {
//     return (
//         area.tasks.map(task => (
//             <div className="task-card" key={task.id}>
//                 <div className="card-user-info">
//                     <div className="user-photo"></div>
//                     <div className="user-name">{task.name}</div>
//                 </div>
//                 <div className="task-short-description">
//                     <p className='task-title'>{task.title}</p>
//                 </div>
//             </div>
//         ))
//     );
// }

const Main = () => {
    const data = useFetch('http://localhost:8000/areas');

    return (
        <div className="main">
            <div className="main-container">

                <div className="task-area-box">
                    <h2 className="task-area-title">To Do</h2>
                    <div className="task-area">

                        {
                            data && data.map(el => (console.log(el)))
                        }

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Work in progress</h2>
                    <div className="task-area">
                        
                        {/* {taskAreas.map(area => (
                            area.name === 'workinprogress' && createTaskCards(area)
                        ))} */}

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Done</h2>
                    <div className="task-area">
                        
                        {/* {taskAreas.map(area => (
                            area.name === 'done' && createTaskCards(area)
                        ))} */}

                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Main;