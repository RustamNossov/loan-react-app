import { useCallback } from "react";

export const useImgImport = () => {
    // const [process, setProcess] = useState('waiting');

    const importImg = useCallback( async (fileName) => {
        
        try {
            const response = await import(`../assets/img/${fileName}`) // change relative path to suit your needs
            return await response.default
        } catch (err) {
            throw err;
        }
    }, []);

    return importImg;
}