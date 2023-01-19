import {useState} from 'react';
import { SkillProps } from "./skills.types"

export const Skills = (props: SkillProps) => {
    const {skills} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            {isLoggedIn ?
                <button>Start Learning</button> :
                <button onClick={() => setIsLoggedIn(true)}>
                    Login</button>
                }
        </>
    );
};