import { Course } from './models/course'
import { User } from './models/user.js'


function addCourse(name, id, image) {
    Course.create({courseName: 'name', courseID: 'id', courseImageLink: 'image'});
}


function addUser(first, last) {
    Course.create({firstName: 'first', lastName: 'last'});
}

function addClub(name, id, image) {
    Course.create({clubName: 'first', clubID: 'last', clubImageLink: 'image'});
}
export default {addUser, addCourse, addClub};
