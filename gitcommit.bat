

@SET /P comment=Please enter your commit comment: 
@IF "%comment%"=="" GOTO Error


@D:

cd D:\My_Code\Example\AngularJs\Chbv\praktani

git add .

git commit -m "%comment%"

git push origin master

@GOTO End

:Error
ECHO You did not enter proper comment! Bye bye!!
:End
pause