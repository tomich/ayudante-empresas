

 
dim objshell
dim command

 Set objArgs = WScript.Arguments
 Set objshell = createobject("Wscript.shell")


If (objArgs.Count = 0) Then
 command=trim(InputBox("Ejecutar","Ejecutar","cmd"))
else
 For Each strArg In objArgs
    command = strArg & " " & command
Next
end if

 if command = "" or command=" " then 
  msgbox "Escriba comando",16,"Error"
  wscript.quit 
end if
 
 objshell.run(command)
 
 wscript.quit 