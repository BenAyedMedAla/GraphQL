import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

registerEnumType(Role, {
  name: 'Role', // this name will appear in the GraphQL schema
});
