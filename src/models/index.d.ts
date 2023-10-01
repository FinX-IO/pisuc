import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PisucMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerPisuc = {
  readonly id: string;
  readonly pisuc: string;
  readonly currency: string;
  readonly country: string;
  readonly instrumentClass: string;
  readonly instrumentType: string;
  readonly instrumentDates: string;
  readonly instrumentProps: string;
  readonly createDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPisuc = {
  readonly id: string;
  readonly pisuc: string;
  readonly currency: string;
  readonly country: string;
  readonly instrumentClass: string;
  readonly instrumentType: string;
  readonly instrumentDates: string;
  readonly instrumentProps: string;
  readonly createDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pisuc = LazyLoading extends LazyLoadingDisabled ? EagerPisuc : LazyPisuc

export declare const Pisuc: (new (init: ModelInit<Pisuc, PisucMetaData>) => Pisuc) & {
  copyOf(source: Pisuc, mutator: (draft: MutableModel<Pisuc, PisucMetaData>) => MutableModel<Pisuc, PisucMetaData> | void): Pisuc;
}