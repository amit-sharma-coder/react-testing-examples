import { SkillProps } from "./skills.types"

export const Skills = (props: SkillProps) => {
    const {skills} = props;

    return (
        <>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </>
    );
};