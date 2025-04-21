import { Injectable } from '@nestjs/common';
import { Skill } from './entities/skill.entity';
import { cvSkills, skills } from 'src/fake-data/db';

@Injectable()
export class SkillService {
    findByCvId(cvId: string): Skill[] {
        // Cherche tous les liens pour ce CV, puis mappe sur skills[]
        const links = cvSkills.filter(link => link.cvId === cvId);
        return links
          .map(l => skills.find(s => s.id === l.skillId))
          .filter((s): s is Skill => !!s);
      }
}
