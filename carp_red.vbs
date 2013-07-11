
 
msgbox "Comenzando agregado de carpetas de Red (By TomCaram), se le avisara cuando el proceso termine ",16,"Carpetas de Red"

Const NETHOOD = &H13&
 
Set objWSHShell = CreateObject("Wscript.Shell")
Set objShell = CreateObject("Shell.Application")
 
Set objFolder = objShell.Namespace(NETHOOD)
Set objFolderItem = objFolder.Self
strNetHood = objFolderItem.Path
 
strShortcutName = "Clientes Datagrama"
strShortcutPath = "\\172.16.166.30\comun\Datagrama\Networking\BackUP configuraciones equipos clientes\Routers Clientes"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

strShortcutName = "Grandes Cuentas"
strShortcutPath = "\\pnaspom2\SAC$\CSC\Centro de Servicios\ACCESO DIRECTO\QoS\Documentacion\Procedimientos\GGCC"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save


strShortcutName = "Visios"
strShortcutPath = "\\pnaspom2\Red$\provisioning\Customers"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save


strShortcutName = "Clientes Madrid"
strShortcutPath = "\\pnaspom2\SAC$\CSC\Centro de Servicios\ACCESO DIRECTO\Clientes"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

strShortcutName = "Clientes Barcelona"
strShortcutPath = "\\pnaspom2\Delegaciones$\Barcelona\Provision-BCN\clientes"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

strShortcutName = "Clientes PTA"
strShortcutPath = "\\pnaspom2\SAC$\CSC\Centro de Servicios\ACCESO DIRECTO\Clientes\PTA (Parque Tecnológico Andalucía)\Clientes"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

strShortcutName = "Clientes SONAE"
strShortcutPath = "\\pnaspom2\SAC$\CSC\Centro de Servicios\ACCESO DIRECTO\Clientes\Sonae (Centro Comercial_Malaga)"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

strShortcutName = "Proyectos Especiales"
strShortcutPath = "\\pnaspom2\SAC$\CSC\Centro de Servicios\ACCESO DIRECTO\CAT\Viabilidades"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

strShortcutName = "Gestiones Reiteradas"
strShortcutPath = "\\pnaspom2\SAC$\CSC\Centro de Servicios\ACCESO DIRECTO\QoS\Tools"
 
Set objShortcut = objWSHShell.CreateShortcut _
    (strNetHood & "\" & strShortcutName & ".lnk")
objShortcut.TargetPath = strShortcutPath
objShortcut.Save

msgbox "FINALIZADO el agregado de carpetas de Red (By TomCaram). Pueden encontrarlas en Mis Sitios de Red",16,"Carpetas de Red"

  Set objshell = createobject("Wscript.shell")
 objshell.run ("explorer.exe %USERPROFILE%\Entorno de red") 
 
 wscript.quit 