import { observer } from 'mobx-react'

import PersonStore from "../../stores/personStore"

const Person = (observer(({ index }) => {

    const thisPerson = PersonStore.peopleArray[index];

    return (
        <>
            <div>
                <label>
                    
                    {thisPerson.name}
                </label>
            </div>
        </>
    )
}))

export default Person