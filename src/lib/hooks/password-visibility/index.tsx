import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const usePasswordToggle = (): [string, JSX.Element] => {
    const [visible, setVisible] = useState<boolean>(false);
    const inputType = visible ? 'text' : 'password';
    const handleV = () => {
        setVisible(!visible);
    };
    const icon = (
        <div
            role="none"
            className="text-xl"
            onClick={() => {
                handleV();
            }}
        >
            {!visible ? (
                <AiFillEye className="text-primaryColor" />
            ) : (
                <AiFillEyeInvisible className="text-primaryColor" />
            )}
        </div>
    );

    return [inputType, icon];
};

export default usePasswordToggle;
