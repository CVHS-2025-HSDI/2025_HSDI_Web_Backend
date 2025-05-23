import {User, sequelize} from './models/user.js'
import { Course } from './models/course.js'
import { Club } from './models/club.js'
import {Admin} from './models/admin.js'
import {addUser, addCourse, addClub, addAdmin} from './add.js'

Course.sync({force:true})