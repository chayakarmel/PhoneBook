import { useState } from "react"
import { observer } from 'mobx-react'

import PersonStore from "../../stores/personStore"

const Form = (observer(() => {
    const [newPerson, setNewPerson] = useState('');

    const handleAddPerson = () => {
        PersonStore.addPerson(newPerson);
        setNewPerson('');
    }
    return (
        <>
            <label>
                person name:
                <input value={newPerson} onChange={(e) => setNewPerson(e.target.value)} />
            </label>
            <label>
                person city:
                <input value={newPerson} onChange={(e) => setNewPerson(e.target.value)} />
            </label>
            <label>
                person phone:
                <input value={newPerson} onChange={(e) => setNewPerson(e.target.value)} />
            </label>
            <br />
            <button onClick={handleAddPerson}>add person</button>
        </>
    )
}))

export default Form