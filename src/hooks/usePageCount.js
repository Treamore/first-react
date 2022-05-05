import {useMemo} from "react";

export const usePageCount = (totalPages) => {
    const result=useMemo(() =>{
        let mass=[];
        for (let i=0; i<totalPages;i++){
            mass.push(i+1)
        }
        return mass;
        }, [totalPages]);
return result;
}