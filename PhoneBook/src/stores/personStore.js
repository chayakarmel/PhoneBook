import { makeObservable, observable, action ,computed} from 'mobx';

class PersonStore {
   People = [];
    // viewNotDoneOnly = false;
    constructor() {
        makeObservable(this, {
            people: observable,
            SelectedCity: observable,
            // phone:observable,
            addPerson: action,//הוספת איש קשר
            deletePerson: action,//מחיקת איש קשר
            getTheCityPeople: action,//שליפה מעיר מסוימת
            peopleArray: computed,///coputedמערך האנשים
        })
    };

    addPerson = (name,city,phone) => {
        this.people = [...this.people, { id: this.people.length, name: name, city:city, phone:phone }]
    }

    // handleDoneToggle = (id) => {
    //     const tempTasks = [...this.tasks];
    //     tempTasks[id].isDone = !tempTasks[id].isDone;
    //     this.tasks = tempTasks;
    // }

    // handleViewToggle = () => {
    //     this.viewNotDoneOnly = !this.viewNotDoneOnly;
    // }
    deletePerson=(id)=>{
        let place=this.people.find((x)=>x.id=id)
        this.people.splice(place,1);
    }

    getTheCityPeople=(city)=>{
        const tempPeople = [...this.people];
        //     tempTasks[id].isDone = !tempTasks[id].isDone;
        //     this.tasks = tempTasks;
    }


    get peopleArray() {
        return  this.people.filter(t => t.city);
    }
}

export default new PersonStore()//singletone