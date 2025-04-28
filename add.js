import { Course } from './models/course.js'
import { User } from './models/user.js'
import {Club} from './models/club.js'


export function addCourse(name, id, image) {
    Course.create({courseName: 'name', courseID: 'id', courseImageLink: 'image'});
}


export function addUser(first, last, usrname, passwd, useremail, temp_Schedule, final_Schedule, current_Schedule) {
    User.create({firstName: first, lastName: last, username: usrname, password: passwd, email: useremail, finalSchedule: final_Schedule, tempSchedule: temp_Schedule, currentSchedule: current_Schedule });
}

export function addClub(name, id, image) {
    Club.create({clubName: 'first', clubID: 'last', clubImageLink: 'image'});
}

