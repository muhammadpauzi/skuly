import axios from '../utils/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function useWorks() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const createWork = async ({ setErrors, classId, ...props }) => {
        setErrors([]);
        setIsLoading(true);

        axios
            .post(`/works?classId=${classId}`, props)
            .then((res) => {
                const work = res.data.data;
                navigate(`/works/${work._id}`);
                toast.success(res.data.message);
            })
            .catch((error) => {
                if (![401, 422, 409].includes(error.response.status))
                    throw error;
                if ([401, 409].includes(error.response.status))
                    setErrors(error.response.data.message);
                if (error.response.status == 422)
                    setErrors(
                        Object.values(error.response.data.errors)
                            .map((err) => err.message)
                            .flat()
                    );
            })
            .finally(() => setIsLoading(false));
    };

    return { isLoading, createWork };
}
