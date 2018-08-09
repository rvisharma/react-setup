import { join, split } from 'ramda';

export default function() {
  return split('..', join('', [1, 2]));
}
