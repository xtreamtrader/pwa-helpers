/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import * as r from 'redux';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface CounterActionIncrement extends r.Action<'INCREMENT'> {};
export interface CounterActionDecrement extends r.Action<'DECREMENT'> {};
export type CounterAction = CounterActionIncrement | CounterActionDecrement;

export const increment = () => {
  const action: CounterActionIncrement = {
    type: INCREMENT
  };

  return action
};

export const decrement = () => {
  const action: CounterActionDecrement = {
    type: DECREMENT
  };

  return action;
};