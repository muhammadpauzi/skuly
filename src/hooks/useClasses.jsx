import axios from '../utils/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function useClasses() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const createClass = async ({ setErrors, ...props }) => {
        setErrors([]);
        setIsLoading(true);

        axios
            .post('/classes', props)
            .then((res) => {
                navigate('/');
                toast.success(res.data.message);
            })
            .catch((error) => {
                if (![422].includes(error.response.status)) throw error;
                if (error.response.status == 422)
                    setErrors(
                        Object.values(error.response.data.errors)
                            .map((err) => err.message)
                            .flat()
                    );
            })
            .finally(() => setIsLoading(false));
    };

    return { isLoading, createClass };
}
