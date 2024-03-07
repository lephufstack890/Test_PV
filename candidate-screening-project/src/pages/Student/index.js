import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_student, delete_student, edit_student, get_student } from '~/Store/Action/testAction';

function Student() {
    const [full_name, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [score, setScore] = useState('');
    const [admission_date, setAdmissionDate] = useState('');

    const dispatch = useDispatch()

    const list = useSelector((state) => state?.test?.list?.data)

    useEffect(() => {
        dispatch(get_student());
    }, [dispatch])

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleScoreChange = (event) => {
        setScore(event.target.value);
    };

    const handleAdmissionDateChange = (event) => {
        setAdmissionDate(event.target.value);
    };

    const handleAddStudent = async () => {
        try {
            let success = await dispatch(add_student(full_name, gender, score, admission_date));
            if (success) {
                dispatch(get_student());
                setFullName('');
                setGender('');
                setScore('');
                setAdmissionDate('');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteStudent = async (id) => {
        try {
            let success = await dispatch(delete_student(id));
            if (success) {
                dispatch(get_student());
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditStudent = async (id, newFullName, newGender, newScore, newAdmissionDate) => {
        try {
            let success = await dispatch(edit_student(id, newFullName, newGender, newScore, newAdmissionDate));
            if (success) {
                dispatch(get_student());
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Chuyển đổi ngày từ định dạng ISO thành định dạng dd-mm-yyyy
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    };

    return (
        <div>
            <div>
                <h2>Student List</h2>
                <input
                    type="text"
                    value={full_name}
                    onChange={handleNameChange}
                    placeholder="Full Name"
                />
                <select value={gender} onChange={handleGenderChange}>
                    <option value="">Chọn giới tính</option>
                    <option value="name">Nam</option>
                    <option value="nữ">Nữ</option>
                </select>
                <input
                    type="number"
                    value={score}
                    onChange={handleScoreChange}
                    placeholder="Score"
                />
                <input
                    type="date"
                    value={admission_date}
                    onChange={handleAdmissionDateChange}
                    placeholder="Admission Date"
                />
                <button onClick={handleAddStudent}>Add Student</button>
                <ul>
                    {list?.map(student => (
                        <li key={student._id}>
                            <span>{student.full_name} - {student.gender} - {student.score} - {formatDate(student.admission_date)}</span>
                            <button onClick={() => handleEditStudent(student._id, prompt('Edit student:', student.full_name, student.gender, student.score, student.admission_date))}>
                                Edit
                            </button>
                            <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Student;
