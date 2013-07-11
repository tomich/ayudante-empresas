
 
dim objshell
dim Telt
dim ip
 
 Set objArgs = WScript.Arguments
 Set objshell = createobject("Wscript.shell")
 
 If (objArgs.Count =1) Then
 For Each strArg In objArgs
    ip = strArg
Next
elseif (objArgs.Count =0) then
 ip=trim(InputBox("Escriba ip del router","Cliente Telnet","0.0.0.0"))
else
 msgbox "IP no valida",16,"Ip no valida"
  wscript.quit 
  end if 
  
 
 if ip = "" or ip= "0.0.0.0" then 
  msgbox "IP no valida",16,"Ip no valida"
  wscript.quit
 else
 
 objshell.run("telnet")
 Wscript.sleep 500 
 Objshell.sendkeys "O 10.0.24.13"
 Wscript.sleep 200
 Objshell.sendkeys "{ENTER}"
 Wscript.sleep 3000
 objshell.sendkeys "catplat"
 Wscript.sleep 500
 Objshell.sendkeys "{ENTER}"
 Wscript.sleep 500 
 Objshell.sendkeys "ambiceleste"
 Wscript.sleep 700
 Objshell.sendkeys "{ENTER}"
 Wscript.sleep 2000
 Objshell.sendkeys "telnet " & ip
 Wscript.sleep 1000
 Objshell.sendkeys "{ENTER}"
 Wscript.sleep 2300
 objshell.sendkeys "admin"
 Wscript.sleep 500
 Objshell.sendkeys "{ENTER}"
 Wscript.sleep 1000
 Objshell.sendkeys "1234"
 Wscript.sleep 700
 Objshell.sendkeys "{ENTER}"
 Wscript.sleep 1000
 Objshell.sendkeys "ping www.google.com"
 Wscript.sleep 500
 Objshell.sendkeys "{ENTER}"
 end if
 
 wscript.quit 