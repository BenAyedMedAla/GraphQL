import { Cv } from "src/cv/entities/cv.entity";
import { Role } from "src/enums/user-role.enum";
import { Skill } from "src/skill/entities/skill.entity";
import { User } from "src/user/entities/user.entity";

export const users: User[] = [
    { id: '1', name: 'aymen', email: 'aymen@gmail.com', role: Role.ADMIN },
    { id: '2', name: 'salma', email: 'salma@gmail.com', role: Role.USER },
  ];
const getUser = (id: string) => {
    const user = users.find(u => u.id === id);
    if (!user) throw new Error(`User with id ${id} not found`);
    return user;
  };

  
  export const skills: Skill[] = [
    { id: 's1', designation: 'NestJS' },
    { id: 's2', designation: 'GraphQL' },
    { id: 's3', designation: 'React' },
  ];
  
  export const cvs: Cv[] = [
    {
      id: 'cv1',
      name: 'CV Fullstack',
      age: 30,
      job: 'Freelancer',
      user: getUser('1'),
      skills: [
        skills.find(s => s.id === 's1'),
        skills.find(s => s.id === 's2'),
      ].filter(Boolean) as Skill[],
    },
    {
      id: 'cv2',
      name: 'CV Front',
      age: 25,
      job: 'Frontend Dev',
      user: getUser('2'),
      skills: [
        skills.find(s => s.id === 's2'),
        skills.find(s => s.id === 's3'),
      ].filter(Boolean) as Skill[],
    },
  ];
  
  // table de liaison many-to-many CV <-> Skill
  export const cvSkills = [
    { cvId: 'cv1', skillId: 's1' },
    { cvId: 'cv1', skillId: 's2' },
    { cvId: 'cv2', skillId: 's2' },
    { cvId: 'cv2', skillId: 's3' },
  ];
  