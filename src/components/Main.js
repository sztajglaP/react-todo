import './main.css';

const taskAreas = [
    {
        'name': 'todo',
        'tasks': [
            {
                'name': 'elo',
                'owner': 'Piotr',
                'priority': '3'
            }
        ]
    }
]

const Main = () => {
    return (
        <div className="main">
            <div className="main-container">

                <div className="task-area-box">
                    <h2 className="task-area-title">To Do</h2>
                    <div className="taskArea">

                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Work in progress</h2>
                    <div className="taskArea">
                        
                    </div>
                </div>

                <div className="task-area-box">
                    <h2 className="task-area-title">Done</h2>
                    <div className="taskArea">
                        
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Main;