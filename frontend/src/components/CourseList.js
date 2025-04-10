import { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [filters, setFilters] = useState({ department:'', tag:'', name:'', gradeLevels:[] });

    useEffect(() => {
        axios.get("http://localhost:4000/courses", { params: filters })
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));
    }, [filters]);

    const addGrade = (e) => {
        const { value, checked } = e.target;

        setFilters((filters) => {
            // let updatedGrades = checked ? filters.gradeLevels.filter((i) => i != value) : [...filters.gradeLevels, value];
            // console.log(checked);
            let updatedGrades;
            if (checked) {
                updatedGrades = [...filters.gradeLevels, parseInt(value)];
            } else {
                updatedGrades = filters.gradeLevels.filter((i) => i !== parseInt(value));
            }
            return {
                ...filters,
                gradeLevels: updatedGrades,
            };
        });
    }

    return (
        <div>
            <h1>Courses</h1>
            <div id="content">
                <div id="filters">
                    <h2>Search By</h2>

                    <input class="filter" type="text" placeholder="Filter by name" onChange={e => setFilters({...filters, name: e.target.value })}/>

                    <input class="filter" type="text" placeholder="Filter by tag" onChange={e => setFilters({...filters, tag: e.target.value })}/>

                    <div class="filter">
                        <label>Filter by department</label>
                        <select onChange={e => setFilters({...filters, department: e.target.value })}>
                            <option value="">All Departments</option>
                            <option value="CTE">CTE</option>
                            <option value="VAPA">VAPA</option>
                            <option value="LOTE">World Languages</option>
                            <option value="English">English & ELD</option>
                            <option value="Social Science">Social Science</option>
                            <option value="Physical Education">Physical Education</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>

                    <div class="filter">
                        <input type="checkbox" value="9" onChange={addGrade}/>
                        <label>9</label>
                        <input type="checkbox" value="10" onChange={addGrade}/>
                        <label>10</label>
                        <input type="checkbox" value="11" onChange={addGrade}/>
                        <label>11</label>
                        <input type="checkbox" value="12" onChange={addGrade}/>
                        <label>12</label>
                    </div>
                </div>

                <div id="cards">
                    {courses.map(course => (
                        <div class="card" key={course.id}>
                            <a href=""><h2>{course.name}</h2></a>
                            <p>Description: {course.coursedescription}</p>
                            <p>Difficulty: {course.difficulty} / 5</p>
                            {/* <a href={course.link} target="_blank" rel="noopener noreferrer">View Course</a> */}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default CourseList;