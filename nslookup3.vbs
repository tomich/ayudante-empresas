

Public objFSO
Public objshell
Dim dom
Dim ruta
Dim strargum
dim comandd
Set objArgs = WScript.Arguments
Set objshell = CreateObject("Wscript.shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

If (objArgs.Count > 0) Then
For Each strArg In objArgs
    strargum = strArg
Next
End If
 
 
If (objArgs.Count = 0) Then
    dom = Trim(InputBox("Escriba Dominio y pulse aceptar. Los datos se guardan en un archivo de texto en C:\NSLookup_logs\", "Nslookup", "jazztel.es"))
                If dom = "" or dom = " " or dom = "/" Then
                MsgBox "Dominio no valido", 16, "Dominio no valido"
				WScript.quit
                End If
ElseIf (objArgs.Count > 1) Then
        MsgBox "Demasiados Argumentos", 16, "Deasiados Argumentos, por favor solo incluir un dominio o IP"
        WScript.quit

ElseIf strargum = " " or strargum = "/" or  strargum = "" Then
MsgBox "Dominio no valido", 16, "Dominio no valido"
WScript.quit
Else
dom = strargum
End If
Call GeneratePath("C:\NSLookup_logs")
Call nsl(dom)


 objshell.run ("C:\NSLookup_logs\" & dom & ".txt")
 
 WScript.quit
 
 
 
 Function nsl(dom)
 comandd="nslookup -q=mx " & dom & " >C:\NSLookup_logs\" & dom & ".txt"
 objshell.run ("cmd")
 WScript.sleep 350
 objshell.SendKeys comandd
 objshell.SendKeys "{ENTER}"
 WScript.sleep 1200
 objshell.SendKeys "exit"
 objshell.SendKeys "{ENTER}"
 End Function
 
 

Function GeneratePath(pFolderPath)
GeneratePath = False
If Not objFSO.FolderExists(pFolderPath) Then
If GeneratePath(objFSO.GetParentFolderName(pFolderPath)) Then
GeneratePath = True
Call objFSO.CreateFolder(pFolderPath)
End If
Else
GeneratePath = True
End If
End Function