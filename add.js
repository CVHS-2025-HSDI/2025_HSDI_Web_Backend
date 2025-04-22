import { Course } from './models/course.js'
import { User } from './models/user.js'
import {Club} from './models/club.js'


export function addCourse(name, id, image) {
    Course.create({courseName: 'name', courseID: 'id', courseImageLink: 'image'});
}


export function addUser(first, last) {
    User.create({firstName: 'first', lastName: 'last'});
}

export function addClub(name, id, image) {
    Club.create({clubName: 'first', clubID: 'last', clubImageLink: 'image'});
}

