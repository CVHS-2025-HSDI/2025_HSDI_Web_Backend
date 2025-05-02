import { Course } from './models/course.js'
import { User } from './models/user.js'
import {Club} from './models/club.js'
import {Admin} from './models/admin.js'

export async function addCourse(name, description, rating, department, keywords, requirements, grades, agrequirements) {
    await Course.create({
        courseName: name,
        courseDescription: description,
        courseDifficulty: rating,
        courseDepartment: department,
        tags: keywords, 
        prerequisites: requirements,
        gradelevels: grades,
        AthroughGRequirements: agrequirements,

    });
};

export async function addUser(fname, lname, login, pass, mail, temp_S, final_S, curr_S) {
    await User.create({
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

export async function addClub(name, image, info, prez, vicePrez, num, contact, advisor, date, quals, type) {
    await Club.create({
        clubName: name, 
        clubImageLink: image,
        clubDescription: info, 
        president: prez,
        vicePresident: vicePrez,
        roomNumber: num,
        clubContact: contact,
        clubAdvisor: advisor, 
        meetingDate: date,
        qualifications: quals,
        clubType: type
    });
};

export async function addAdmin(first, last, user, pass, mail, class_R){
    await Admin.create({
        firstName: first, 
        lastName: last, 
        username: user, 
        password: pass,
        email: mail, 
        classRequests: class_R
    })
};

