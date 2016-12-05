#Node.js Exercises

You will write two versions of each of the following programs: a synchronous version and an asynchronous version. For the synchronous versions you will use the methods fs.readFileSync and fs.writeFileSync while for the asynchronous versions you will use fs.readFile and fs.writeFile. Make sure you error handling for both of the versions as well.

##Read a file

Write a program to take a file name as a command line argument, read in the contents of the file, convert the text to all caps, and print it out.

Assuming the file file1.txt contains the text: Hello, I am file 1.. Example output:

$ node print_file.js file1.txt
HELLO, I AM FILE 1.
Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and it should display something like:

$ node print_file.js blah.txt
ENOENT: no such file or directory, open 'blah.txt'

##Read and write

Write a program to take two file names as command line arguments, the first file will be the input and the second file will be the output. The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.

Example:

$ node convert_file.js file1.txt output.txt
As a result, output.txt should now contain the text HELLO, I AM FILE 1.

Trigger an error by running the program with an non-existing input file, ensure that the error is properly displayed. Trigger an error by running the program with an output file in a non-existant directory, such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

##2-in-1

Write a program to take two input file names and one output file name. The program will read in the two input files, break the text of each file into arrays of lines, an intersperse them, then write the results to the output file. Example:

haiku1.txt has the content:

old pond
a frog leaps in
water's sound
haiku2.txt has the content:

the first cold shower
even the monkey seems to want
a little coat of straw
If you run the program:

$ node intersperse.js haiku1.txt haiku2.txt output.txt
output.txt will contain:

old pond
the first cold shower
a frog leaps in
even the monkey seems to want
water's sound
a little coat of straw
