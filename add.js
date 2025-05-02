import { Course } from './models/course.js'
import { User } from './models/user.js'
import {Club} from './models/club.js'
import {Admin} from './models/admin.js'

export function addCourse(courseName, description, rating, department, keywords, requirements, grades, agrequirements) {
    Course.create({
        name: courseName,
        coursedescription: description,
        difficulty: rating,
        courseDepartment: department,
        tags: keywords, 
        prerequisites: requirements,
        gradelevels: grades,
        AthroughGRequirements: agrequirements,

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

export function addClub(name, image, info, prez, vicePrez, num, contact, advisor, date) {
    Club.create({
        clubName: name, 
        clubImageLink: image,
        clubDescription: info, 
        president: prez,
        vicePresident: vicePrez,
        roomNumber: num,
        clubContact: contact,
        clubAdvisor: advisor, 
        meetingDate: date,
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

