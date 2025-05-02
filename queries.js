import {User, sequelize} from './models/user.js'
import { Course } from './models/course.js'
import { Club } from './models/club.js'
import {Admin} from './models/admin.js'
import {addUser, addCourse, addClub, addAdmin} from './add.js'

addCourse("super ap", 'very fun class', 2, 'cte', ['coding'], [1], [10,11,12], 'a')