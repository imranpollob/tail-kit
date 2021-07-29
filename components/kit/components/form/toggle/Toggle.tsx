import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

interface Props {
    onChange: (checked) => void;
    check?: boolean;
    label?: string;
}

const Toggle = (props: Props) => {
    const [id] = useState(_uniqueId('prefix-'));
    return (
        <div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                    type="checkbox"
                    name="toggle"
                    id={id}
                    checked={props.check}
                    onChange={(e) => props.onChange(e.target.checked)}
                    className="right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white checked:bg-gray-600 border-4 border-gray-200 checked:border-gray-900 appearance-none cursor-pointer"
                />
                <label htmlFor={id} className="block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer" />
            </div>
            {props.label && <span className="text-gray-400 font-medium">{props.label}</span>}
        </div>
    );
};
export default Toggle;
