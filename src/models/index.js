// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo } = initSchema(schema);
const { Pisuc } = initSchema(schema);

export {
  Todo, Pisuc
};