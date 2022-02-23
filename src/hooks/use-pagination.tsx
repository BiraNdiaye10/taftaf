import { useEffect } from 'react';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePagination = (data: any[]) => {
    const dataPerView = 5;

    const [currentData, setCurrentData] = useState([]);

    const [currentDataLength, setCurrentDataLength] = useState(0);

    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
    const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);

    useEffect(() => {
        if (data?.length) {
            setCurrentData(data.slice(0, dataPerView));
        }

        if (data?.length <= dataPerView) setIsNextButtonDisabled(true);
    }, [data]);

    const next = () => {
        let newCurrentData = [...currentData];
        // 1. Take current data last element
        const lastElement = newCurrentData.slice(-1)[0];

        // 2. Find the index of the last element of the current data
        const index = data.findIndex((data) => data.id === lastElement.id);

        // 3. cut data based on the last element of the current element
        const nextIndex = index + 1;

        newCurrentData = data.slice(nextIndex, dataPerView + nextIndex);

        setCurrentData(newCurrentData);
        setCurrentDataLength(newCurrentData.length);
        setIsNextButtonDisabled(data?.length - nextIndex <= dataPerView);
        setIsPrevButtonDisabled(false);
    };

    const prev = () => {
        let newCurrentData = [...currentData];

        // 1. Take current data last element
        const firstElement = newCurrentData.slice(0, 1)[0];

        // 2. Find the index of the last element of the current data
        const index = data.findIndex((data) => data.id === firstElement.id);

        // 3. cut data based on the last element of the current element
        const nextIndex = index;

        newCurrentData = data.slice(nextIndex - dataPerView, nextIndex);

        console.log({ nextIndex });

        // setIsNextButtonDisabled(data?.length > nextIndex);
        setCurrentData(newCurrentData);
        setCurrentDataLength(currentData.length);
        setIsPrevButtonDisabled(nextIndex - dataPerView < dataPerView);
        setIsNextButtonDisabled(false);

        console.log({ dataPerView, nextIndex });
    };

    return {
        currentData,
        currentDataLength,
        isNextButtonDisabled,
        isPrevButtonDisabled,
        next,
        prev,
    };
};
