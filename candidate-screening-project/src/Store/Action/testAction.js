import api from '../api';
import { toast } from 'react-toastify';

const showToast = (message, type = 0, options = {}) => {
    const defaultOptions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    };

    const toastOptions = { ...defaultOptions, ...options };

    if (type == 0) {
        toast.success(message, toastOptions);
    } else {
        toast.error(message, toastOptions);
    }
};

export const get_student = () => {
    return async (dispatch) => {
        try {
            // Gọi API
            const response = await api.get('api/list', {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(123);
            dispatch({ type: 'STUDENT_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'STUDENT_FAILURE', payload: error.message });
        }
    };
};

export const add_student = (full_name, gender, score, admission_date) => {
    return async () => {
        try {
            await api.post('api/create', {
                full_name,
                gender,
                score,
                admission_date
            }, {
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + token,
            });
            return true
        } catch (error) {
            return false
        }
    };
};


export const edit_student = (id, full_name, gender, score, admission_date) => {
    return async () => {
        try {
            await api.put('api/edit/' + id, {
                full_name,
                gender,
                score,
                admission_date
            }, {
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + token,
            });
            return true
        } catch (error) {
            return false
        }
    };
};

export const delete_student = (id) => {
    return async () => {
        try {
            await api.delete('api/delete/' + id, {}, {
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + token,
            });
            return true
        } catch (error) {
            return false
        }
    };
};
