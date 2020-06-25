import React, { Component } from 'react';
import { Text, Button } from '../../atoms';
import { Link } from 'react-router-dom';

class TaskView extends Component {
    state = {
        
    }
    render(){
        return(
<div>
<Text>Task View</Text>
<Button >            
<Link to="/edit-task" >
    Edit task
</Link>
</Button>
</div>
        )
    }
}

export default TaskView;