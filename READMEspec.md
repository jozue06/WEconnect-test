## The Problem

- [x] We want you to create a command-line application that will calculate the
ranking table for a soccer league.

### Input/output

- [x] The input and output will be text. 

##### Function test

- [x] The function looks at a given file, and copies it to new file

- [x] Your solution should parse the provided
sample-input.txt file via stdin (pipe or redirect) or by parsing a file passed
by name on the command line. Your solution should output the correct result via
stdout to the console.
- [x] The input contains results of games, one per line. See sample-input.txt for
details. The output should be ordered from most to least points, following the
format specified in expected-output.txt.

- [x] You can expect that the input will be well-formed. There is no need to add
special handling for malformed input files.

### The rules

- [x] In this league, a draw (tie) is worth 1 point and a win is worth 3 points. 
- [x] A loss is worth 0 points. 
- [x] If two or more teams have the same number of points,
they should have the same rank and be printed in alphabetical order (as in the tie for 3rd place in the sample data).

### Guidelines

* This should be implemented in a language with which you are familiar. We would
prefer that you use elixir, ruby, javascript, python, objective-c or java , if
you are comfortable doing so. If none of these are comfortable, please choose a
language that is both comfortable for you and suited to the task.

* Your solution should be able to be run (and if applicable, built) from the
command line. Please include appropriate scripts and instructions for
running your application and your tests.

* If you use other libraries installed by a common package manager
(rubygems/bundler, npm, pip, gradle), it is not necessary to commit the
installed packages.

- [x] We write automated tests and we would like you to do so as well.

- [x] We appreciate well factored, object-oriented or functional designs.

- [x] Please document any steps necessary to run your solution and your tests.

### Platform support

- [x] This will be run in a unix-ish environment (OS X). If you choose to use a
compiled language, please keep this in mind. (Dependency on Xcode is acceptable
for objective-c solutions) Please use platform-agnostic constructs where
possible (line-endings and file-path-separators are two problematic areas).

