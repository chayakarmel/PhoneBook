import { observer } from 'mobx-react'


import Person from "../person/Person"
import PersonStore from "../../stores/personStore"

const PeopleList = (observer(() => {

    return (
        <>
            <h1>PhoneBook:</h1>
            {/* <FormControlLabel control={
                <Switch value={taskStore.viewNotDoneOnly} onChange={taskStore.handleViewToggle} />
            } label="view not done only" /> */}

            {PersonStore.peopleArray.map((_, index) =>
                <Person
                    key={index}
                    index={index}
                />)}

            {/* {taskStore.tasks.map((task, i) =>
                <Task
                    key={i}
                    id={task.id}
                />)} */}
        </>
    )
}))

export default PeopleList