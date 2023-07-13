import run from './experiments/shared-var'

console.log('#> Console Log Index TS')

/* Experiment shared-var
  A variable is declared in module-a that has a function to increment it
  The modules B and C have a function that call incrementer function in module A
  The module D has a function that return the variable value
*/
run()
