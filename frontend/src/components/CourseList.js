import { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [filters, setFilters] = useState({ department:'', tag:'', gradeLevels:[] });

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
                updatedGrades = filters.gradeLevels.filter((i) => i != value);
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
            <div>
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

                <input type="text" placeholder="Filter by tag" onChange={e => setFilters({...filters, tag: e.target.value })}/>

                <div>
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

            <div>
                {courses.map(course => (
                    <div key={course.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                        <h2>{course.name}</h2>
                        <p>{course.coursedescription}</p>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">View Course</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseList;