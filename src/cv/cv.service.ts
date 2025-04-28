import { Injectable } from '@nestjs/common';
import { Cv } from './entities/cv.entity';
import { cvs, cvSkills, skills, users } from 'src/fake-data/db';
import { CreateCvInput } from './dto/create-cv.input';
import { UpdateCvInput } from './dto/update-cv.input';

@Injectable()
export class CvService {
    findAll():Cv[]{
        return cvs;
      }
      findById(id: string): Cv | undefined {
        return cvs.find(cv => cv.id === id);
      }
      create(createCvInput: CreateCvInput): Cv {
        const user = users.find(u => u.id === createCvInput.userId);
        if (!user) {
          throw new Error(`User with id ${createCvInput.userId} not found`);
        }
        const theSkills = skills.filter(s => createCvInput.skillIds.includes(s.id));
        if (theSkills.length !== createCvInput.skillIds.length) {
          throw new Error(`One or more skills not found`);
        }
        const newCv: Cv = {
          id: Math.random().toString(36).substring(2, 9),
          name: createCvInput.name,
          age: createCvInput.age,
          job: createCvInput.job,
          user,
          skills: theSkills,
        };
      
        cvs.push(newCv);
        return newCv;
      }
      
      update(id: string, input: UpdateCvInput): Cv {
        const idx = cvs.findIndex(cv => cv.id === id);
        if (idx === -1) {
          throw new Error(`CV with id ${id} not found`);
        }
    
        const cv = cvs[idx];
    
        // 1) Mise à jour de l'user, si besoin
        if (input.userId !== undefined) {
          const user = users.find(u => u.id === input.userId);
          if (!user) {
            throw new Error(`User with id ${input.userId} not found`);
          }
          cv.user = user;
        }
    
        // 2) Mise à jour des skills, si besoin
        if (input.skillIds !== undefined) {
          const newSkills = skills.filter(s => (input.skillIds ?? []).includes(s.id));
          if (newSkills.length !== input.skillIds.length) {
            throw new Error(`One or more skills not found`);
          }
          cv.skills = newSkills;
        }
    
        // 3) Mise à jour des autres champs
        if (input.name !== undefined) cv.name = input.name;
        if (input.age  !== undefined) cv.age  = input.age;
        if (input.job  !== undefined) cv.job  = input.job;
    
        // Le tableau cvs est déjà muté, on renvoie l'objet mis à jour :
        return cv;
      }
      
      delete(id: string): boolean {
        const idx = cvs.findIndex(cv => cv.id === id);
        if (idx === -1) {
          throw new Error(`Cv with id ${id} not found`);
        }
    
        // 1) Supprimer le CV de la liste
        cvs.splice(idx, 1);
    
        // 2) Supprimer toutes les liaisons dans cvSkills
        for (let i = cvSkills.length - 1; i >= 0; i--) {
          if (cvSkills[i].cvId === id) {
            cvSkills.splice(i, 1);
          }
        }
    
        return true;
      }

}
