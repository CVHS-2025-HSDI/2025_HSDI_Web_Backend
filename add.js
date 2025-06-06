import { Course } from './models/course.js'
import { User } from './models/user.js'
import {Club} from './models/club.js'
import {Admin} from './models/admin.js'

export function addCourse(courseID, courseName, courseDescription, courseDifficulty,  courseDepartment, courseTags, courseGradeLevels) {
    Course.create({
        id: courseID,
        name: courseName,
        coursedescription: courseDescription,
        difficulty: courseDifficulty,
        department: courseDepartment,
        tags: courseTags,
        difficulty: courseDifficulty,
        gradeLevels: courseGradeLevels
    });
};

export function addUser(fname, lname, login, pass, mail, temp_S, final_S, curr_S) {
    User.create({
        firstName: fname,
        lastName: lname, 
        username: login, 
        password: pass, 
        email: mail, 
        finalSchedule: final_S, 
        tempSchedule: temp_S, 
        currentSchedule: curr_S 
    });
};

export function addClub(name, id, image, info, members, num, contact) {
    Club.create({
        clubName: name, 
        clubID: id, 
        clubImageLink: image,
        clubInfo: info, 
        clubMembers: members,
        roomNumber: num,
        clubContact: contact
    });
};

export function addAdmin(first, last, user, pass, mail, class_R){
    Admin.create({
        firstName: first, 
        lastName: last, 
        username: user, 
        password: pass,
        email: mail, 
        classRequests: class_R
    })
};

