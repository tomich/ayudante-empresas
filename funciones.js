


//Mostrar ocultar por TomCaram


function MostrarOcultar (objetoVisualizar) {
if (document.all[objetoVisualizar].style.display=='none') {
document.all[objetoVisualizar].style.display='block';
} else {
document.all[objetoVisualizar].style.display='none';
}
}

//solo mostrar
function mostrarTom (objetoVisualizar) {

document.all[objetoVisualizar].style.display='block';
document.all['borrarip'].value="Ocultar";
}
//solo ocultar
function ocultarTom(objetoVisualizar) {
document.all[objetoVisualizar].style.display='none';
document.all['borrarip'].value="Borrar";
}



//Funciones de busqueda y test by Tom

		function fnTestear(){
         
        			var o=document.getElementById("Test").value;        
         			var n=document.getElementById("telefono").value;
				var ubica = document.location.pathname;
ubica = ubica.replace(/%20/gi, " ");
ubica = ubica.substr(0,ubica.lastIndexOf("/")+1);
ubica = ubica.substring(1); 
ubica = ubica.replace(/\//gi,'\\');
ubica= "\"" + ubica;
	
	if (o=="RES")  
window.open('https://autogestion.jazztel.com/PAS_FE/InitAdmin.jazztel?telefono='+n+'&acceso=admin','mywindow','width=400,heigth=200,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes')           	
		if (o=="TYD_TEL")              
		{confirm("Debes estar previamente Logueado en TyD")
		window.open('http://10.0.24.43:8089/activator/NewQueryTyD.do?numeroAdministrativo='+n)
		}
  else if (o=="SGO_SGIC")              window.open('autologSGO.html') 
		else if(o=="CRM_TEL")
{
if (validacionNumerico(n))
{
if(confirm("Seguro que sesion en CRM ya esta INICIADA y continua ACTIVA?"))
{var url9 = 'http://172.18.101.52/moduloclientes/BuscarFichaClienteA.do?accion=buscar&telefonoDeServicio='+n;
window.open(url9, "blank");}
} else
alert("Telefono Erroneo");
}
		else if(o=="CRM_COM")
{
if (validacionNumerico(n))
{
if(confirm("Seguro que sesion en CRM ya esta INICIADA y continua ACTIVA?"))
{var url9 = 'http://172.18.101.52/saltomodulo.do?prefix=/moduloclientes&page=/RegistroContactoA.do&accion=initComunicacionFichaCliente&checkLlamadaProcProv=true&telefono='+n;
window.open(url9, "blank");}
} else
alert("Telefono Erroneo");
}
	else if(o=="sal_nom")
{

if(confirm("Seguro que sesion en SalesForce ya esta INICIADA?"))
{var url9 = 'https://emea.salesforce.com/_ui/common/search/client/ui/UnifiedSearchResults?searchType=2&str='+n;
window.open(url9, "blank");}
}
else if (o=="ppp")         
window.open('http://10.0.27.140/listar_registros_usuarios.php?user='+n+'&siacct=yes&sifecha=yes&siUserName=yes&siUserRealm=yes&siAcctStatusType=yes&siAcctTerminateCause=yes&siFramedIPAddress=yes&siNASPortId=yes&siSlot=yes&siPort=yes&siUpstream=yes&siDownstream=yes&siauth=yes&sifechaf=yes&siUserNamef=yes&siUserRealmf=yes&siDescReasonf=yes&siPasswordf=yes&siOusernamef=yes&siInstancef=yes')                    
else if (o=="ldap")         
window.open('http://panelidc.jazztel.com/scripts/ldap_search.php?ldap_attr=radiusLogin&sistema=LdapJN&ldap_valor='+n)   
else if (o=="port_fijo")         
window.open('https://62.81.252.21/CNum/CNum?testigo=si&numero='+n+'&tipoC=fijo&num_fijo='+n+'&num_movil=')  
else if (o=="port_movil")         
window.open('https://62.81.252.21/CNum/CNum?testigo=si&numero='+n+'&tipoC=movil&num_fijo=&num_movil='+n) 
else if (o=="ldapdom")         
window.open('http://panelidc.jazztel.com/scripts/ldap_search.php?ldap_attr=domainname&sistema=LdapJN&ldap_valor='+n) 
else if (o=="appl")         
window.open('http://172.16.215.245/artman2/uploads/FC_SyC/Procesos/Internet/docs/loginAPPL.html?'+n) 
else if (o=="nslook") {      
WshShell = new ActiveXObject("WScript.Shell");
		WshShell.Run(ubica + "nslookup3.vbs " + "\"" +n); 	}
else if (o=="teln") {      
WshShell = new ActiveXObject("WScript.Shell");
		WshShell.Run(ubica + "telnet2.vbs " + "\"" +n);}
		
	else if (o=="execu") {      
WshShell = new ActiveXObject("WScript.Shell");
		WshShell.Run(ubica + "ejecutar2.vbs " + "\"" +n);}	
			
}

function fnBing(){
         
        			var o=document.getElementById("buscarg").value;        
         			var n=document.getElementById("palabra").value;
				
		if (o=="str")  
window.open('http://www.bing.com/search?q='+n+'&form=QBLH&filt=all')    

		if (o=="img")  
window.open('http://www.bing.com/images/search?q='+n+'&FORM=BIFD')           	       	
}
// Validacion de numeros de telefono
function validacionNumerico( cNumero ) {
	// Recorremos los datos introducidos
	for ( nPos = 0; nPos < cNumero.length; nPos++ ) {
		var cCaracter = cNumero.charAt( nPos )
		if ( isNaN( parseInt( cCaracter ) ) 
		     && cCaracter != "-"
		     && cCaracter != "+"
		     && cCaracter != "."
		     && cCaracter != ","
		     && cCaracter != "("
		     && cCaracter != ")"
		     && cCaracter != " " ) {
			return false;
		}
	}
	return true;
}


//Calculadora IP y Funciones de Form Calculadora

function h_initArray() {
    this.length = h_initArray.arguments.length;
    for (var i = 0; i < this.length; i++)
        this[i] = h_initArray.arguments[i];
}
    
function h_from10toradix(value,radix){
    var retval = '';
    var ConvArray = new h_initArray(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F');
    var intnum;
    var tmpnum;
    var i = 0;

    intnum = parseInt(value,10);
    if (isNaN(intnum)){
        retval = 'NaN';
    }else{
        if (intnum < 1){
            retval ="0";
        }else{
            retval = "";
        }
        while (intnum > 0.9){
            i++;
            tmpnum = intnum;
            // cancatinate return string with new digit:
            retval = ConvArray[tmpnum % radix] + retval;  
            intnum = Math.floor(tmpnum / radix);
            if (i > 100){
                // break infinite loops
                retval = 'NaN';
                break;
            }
        }
    }
    return retval;
}

function h_paddto2(str) {
    while(str.length <2){
        str= "0" + str;
    }
    return(str);
}

function h_paddto8(str) {
    while(str.length <8){
        str= "0" + str;
    }
    return(str);
}

//--------------------------

function h_countbitsfromleft(num)
{
    if (num == 255 ){
        return(8);
    }
    i = 0;
    bitpat=0xff00; 
    while (i < 8){
        if (num == (bitpat & 0xff)){
            return(i);
        }
        bitpat=bitpat >> 1;
        i++;
    }
    return(Number.NaN);
}
// Funcion combinada by Tomy
function calcCombTom(cform)
{
//Comienza parte mascara
    
	 sumofbits=0;
    tmpvar = parseInt(cform.snm_x1.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    //
    tmpvar = parseInt(cform.snm_x2.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    //
    tmpvar = parseInt(cform.snm_x3.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    //
    tmpvar = parseInt(cform.snm_x4.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    cform.result.value = sumofbits;
	
    // Comienza parte IP
	
	
	var rt=0;
    reset_rest_from4(cform);
    tmpvar = parseInt(cform.ip_1.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    tmpvar = parseInt(cform.ip_2.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    tmpvar = parseInt(cform.ip_3.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    tmpvar = parseInt(cform.ip_4.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    //rt=calcNWmask(cform);
    //if (rt !=0 ){
        // error
      //  return(1);
    //}
    tmpvar=sumofbits;
    if (tmpvar <0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    if (tmpvar >32){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    if (tmpvar == 31){
        cform.numofaddr.value = "two hosts";
        cform.firstadr_1.value = cform.ip_1.value & cform.snm_1.value;
        cform.firstadr_2.value = cform.ip_2.value & cform.snm_2.value;
        cform.firstadr_3.value = cform.ip_3.value & cform.snm_3.value;
        cform.firstadr_4.value = cform.ip_4.value & cform.snm_4.value;
        //
        cform.lastadr_1.value = cform.ip_1.value | (~ cform.snm_1.value & 0xff);
        cform.lastadr_2.value = cform.ip_2.value | (~ cform.snm_2.value & 0xff);
        cform.lastadr_3.value = cform.ip_3.value | (~ cform.snm_3.value & 0xff);
        cform.lastadr_4.value = cform.ip_4.value | (~ cform.snm_4.value & 0xff);
        return(1);
    }
    if (tmpvar == 32){
        cform.numofaddr.value = "one host";
        cform.firstadr_1.value = cform.ip_1.value;
        cform.firstadr_2.value = cform.ip_2.value;
        cform.firstadr_3.value = cform.ip_3.value;
        cform.firstadr_4.value = cform.ip_4.value;
        return(1);
    }
    cform.numofaddr.value = Math.pow(2,32 - tmpvar) - 2;
    //
    cform.bcast_1.value = cform.ip_1.value | (~ cform.snm_1.value & 0xff);
    cform.bcast_2.value = cform.ip_2.value | (~ cform.snm_2.value & 0xff);
    cform.bcast_3.value = cform.ip_3.value | (~ cform.snm_3.value & 0xff);
    cform.bcast_4.value = cform.ip_4.value | (~ cform.snm_4.value & 0xff);
    //
    cform.nwadr_1.value = cform.ip_1.value & cform.snm_1.value;
    cform.nwadr_2.value = cform.ip_2.value & cform.snm_2.value;
    cform.nwadr_3.value = cform.ip_3.value & cform.snm_3.value;
    cform.nwadr_4.value = cform.ip_4.value & cform.snm_4.value;
    //
    cform.firstadr_1.value = cform.nwadr_1.value;
    cform.firstadr_2.value = cform.nwadr_2.value;
    cform.firstadr_3.value = cform.nwadr_3.value;
    cform.firstadr_4.value = parseInt(cform.nwadr_4.value) + 1;
    //
    cform.lastadr_1.value = cform.bcast_1.value;
    cform.lastadr_2.value = cform.bcast_2.value;
    cform.lastadr_3.value = cform.bcast_3.value;
    cform.lastadr_4.value = parseInt(cform.bcast_4.value) - 1;
    return(0);
	
	
}



//Continua funcionaes normales

function calcNWbits(cform)
{
    sumofbits=0;
    tmpvar = parseInt(cform.snm_1.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    //
    tmpvar = parseInt(cform.snm_2.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    //
    tmpvar = parseInt(cform.snm_3.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    //
    tmpvar = parseInt(cform.snm_4.value,10);
    if (isNaN(tmpvar)){
        cform.result.value = 'invalid';
        return;
    }
    bitsfromleft=h_countbitsfromleft(tmpvar);
    if (isNaN(bitsfromleft)){
        cform.result.value = 'invalid';
        return;
    }
    sumofbits+=bitsfromleft;
    cform.result.value = sumofbits;
	document.all['bitmask'].value=sumofbits;
    return;
}

function resetform1(cform) {
    cform.result.value="";
    cform.snm_1.value=255;
    cform.snm_2.value=255;
    cform.snm_3.value=255;
    cform.snm_4.value=0;
}

//--------------------------

function h_fillbitsfromleft(num)
{
    if (num >= 8 ){
        return(255);
    }
    bitpat=0xff00; 
    while (num > 0){
        bitpat=bitpat >> 1;
        num--;
    }
    return(bitpat & 0xff);
}

function calcNWmask(cform)
{
    tmpvar = parseInt(cform.bits.value,10);
    if (isNaN(tmpvar) || tmpvar > 32 || tmpvar < 0){
        cform.snm_1.value = 'ERR';
        cform.snm_2.value="";
        cform.snm_3.value="";
        cform.snm_4.value="";
        return(1);
    }
    cform.snm_1.value=0;
    cform.snm_2.value=0;
    cform.snm_3.value=0;
    cform.snm_4.value=0;
    if (tmpvar >= 8){
        cform.snm_1.value = 255;
        tmpvar-=8;
    }else{
        cform.snm_1.value = h_fillbitsfromleft(tmpvar);
        return(0);
    }
    if (tmpvar >= 8){
        cform.snm_2.value = 255;
        tmpvar-=8;
    }else{
        cform.snm_2.value = h_fillbitsfromleft(tmpvar);
        return(0);
    }
    if (tmpvar >= 8){
        cform.snm_3.value = 255;
        tmpvar-=8;
    }else{
        cform.snm_3.value = h_fillbitsfromleft(tmpvar);
        return(0);
    }
    cform.snm_4.value = h_fillbitsfromleft(tmpvar);
    return(0);
}

function calcNWmaskForm2(cform)
{
    var rt=0;
    cform.hex_1.value="";
    cform.hex_2.value="";
    cform.hex_3.value="";
    cform.hex_4.value="";
    rt=calcNWmask(cform);
    if (rt !=0 ){
        // error
        return(1);
    }
    tmpvar=cform.snm_1.value;
    cform.hex_1.value = h_paddto2(h_from10toradix(tmpvar,16));
    tmpvar=cform.snm_2.value;
    cform.hex_2.value = h_paddto2(h_from10toradix(tmpvar,16));
    tmpvar=cform.snm_3.value;
    cform.hex_3.value = h_paddto2(h_from10toradix(tmpvar,16));
    tmpvar=cform.snm_4.value;
    cform.hex_4.value = h_paddto2(h_from10toradix(tmpvar,16));
}

function resetform2(cform) {
    cform.bits.value=24;
    cform.snm_1.value="";
    cform.snm_2.value="";
    cform.snm_3.value="";
    cform.snm_4.value="";
    cform.hex_1.value="";
    cform.hex_2.value="";
    cform.hex_3.value="";
    cform.hex_4.value="";
}

//--------------------------

function resetform3(cform) {
    cform.ip_1.value=10;
    cform.ip_2.value=0;
    cform.ip_3.value=0;
    cform.ip_4.value=255;
    cform.bits_1.value="";
    cform.bits_2.value="";
    cform.bits_3.value="";
    cform.bits_4.value="";
    cform.hex_1.value="";
    cform.hex_2.value="";
    cform.hex_3.value="";
    cform.hex_4.value="";
}

function calcBinBits(cform)
{
    cform.bits_1.value="";
    cform.bits_2.value="";
    cform.bits_3.value="";
    cform.bits_4.value="";
    //
    tmpvar = parseInt(cform.ip_1.value,10);
    if (isNaN(tmpvar) || tmpvar < 0 || tmpvar > 255){
        cform.bits_1.value = 'ERR';
        return;
    }
    cform.bits_1.value = h_paddto8(h_from10toradix(tmpvar,2));
    cform.hex_1.value = h_paddto2(h_from10toradix(tmpvar,16));
    //
    tmpvar = parseInt(cform.ip_2.value,10);
    if (isNaN(tmpvar) || tmpvar < 0 || tmpvar > 255){
        cform.bits_2.value = 'ERR';
        return;
    }
    cform.bits_2.value = h_paddto8(h_from10toradix(tmpvar,2));
    cform.hex_2.value = h_paddto2(h_from10toradix(tmpvar,16));
    //
    tmpvar = parseInt(cform.ip_3.value,10);
    if (isNaN(tmpvar)  || tmpvar < 0 || tmpvar > 255){
        cform.bits_3.value = 'ERR';
        return;
    }
    cform.bits_3.value = h_paddto8(h_from10toradix(tmpvar,2));
    cform.hex_3.value = h_paddto2(h_from10toradix(tmpvar,16));
    //
    tmpvar = parseInt(cform.ip_4.value,10);
    if (isNaN(tmpvar) || tmpvar < 0 || tmpvar > 255){
        cform.bits_4.value = 'ERR';
        return;
    }
    cform.bits_4.value = h_paddto8(h_from10toradix(tmpvar,2));
    cform.hex_4.value = h_paddto2(h_from10toradix(tmpvar,16));
}

//--------------------------

function reset_rest_from4(cform){
    cform.bcast_1.value ="";
    cform.bcast_2.value ="";
    cform.bcast_3.value ="";
    cform.bcast_4.value ="";
    //
    cform.nwadr_1.value ="";
    cform.nwadr_2.value ="";
    cform.nwadr_3.value ="";
    cform.nwadr_4.value ="";
    //
    cform.firstadr_1.value ="";
    cform.firstadr_2.value ="";
    cform.firstadr_3.value ="";
    cform.firstadr_4.value ="";
    //
    cform.lastadr_1.value ="";
    cform.lastadr_2.value ="";
    cform.lastadr_3.value ="";
    cform.lastadr_4.value ="";
    //
    cform.snm_1.value ="";
    cform.snm_2.value ="";
    cform.snm_3.value ="";
    cform.snm_4.value ="";
    //
    cform.numofaddr.value ="";
}

function resetform4(cform) {
    cform.bits.value=24;
    cform.ip_1.value=192;
    cform.ip_2.value=168;
    cform.ip_3.value=1;
    cform.ip_4.value=0;
    //
    reset_rest_from4(cform);
}

function calNBFL(cform) {
    var rt=0;
    reset_rest_from4(cform);
    tmpvar = parseInt(cform.ip_1.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    tmpvar = parseInt(cform.ip_2.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    tmpvar = parseInt(cform.ip_3.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    tmpvar = parseInt(cform.ip_4.value,10);
    if (isNaN(tmpvar) || tmpvar > 255 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    rt=calcNWmask(cform);
    if (rt !=0 ){
        // error
        return(1);
    }
    tmpvar=parseInt(cform.bits.value,10);
    if (tmpvar <0){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    if (tmpvar >32){
        cform.numofaddr.value = 'ERR';
        return(1);
    }
    if (tmpvar == 31){
        cform.numofaddr.value = "two hosts";
        cform.firstadr_1.value = cform.ip_1.value & cform.snm_1.value;
        cform.firstadr_2.value = cform.ip_2.value & cform.snm_2.value;
        cform.firstadr_3.value = cform.ip_3.value & cform.snm_3.value;
        cform.firstadr_4.value = cform.ip_4.value & cform.snm_4.value;
        //
        cform.lastadr_1.value = cform.ip_1.value | (~ cform.snm_1.value & 0xff);
        cform.lastadr_2.value = cform.ip_2.value | (~ cform.snm_2.value & 0xff);
        cform.lastadr_3.value = cform.ip_3.value | (~ cform.snm_3.value & 0xff);
        cform.lastadr_4.value = cform.ip_4.value | (~ cform.snm_4.value & 0xff);
        return(1);
    }
    if (tmpvar == 32){
        cform.numofaddr.value = "one host";
        cform.firstadr_1.value = cform.ip_1.value;
        cform.firstadr_2.value = cform.ip_2.value;
        cform.firstadr_3.value = cform.ip_3.value;
        cform.firstadr_4.value = cform.ip_4.value;
        return(1);
    }
    cform.numofaddr.value = Math.pow(2,32 - tmpvar) - 2;
    //
    cform.bcast_1.value = cform.ip_1.value | (~ cform.snm_1.value & 0xff);
    cform.bcast_2.value = cform.ip_2.value | (~ cform.snm_2.value & 0xff);
    cform.bcast_3.value = cform.ip_3.value | (~ cform.snm_3.value & 0xff);
    cform.bcast_4.value = cform.ip_4.value | (~ cform.snm_4.value & 0xff);
    //
    cform.nwadr_1.value = cform.ip_1.value & cform.snm_1.value;
    cform.nwadr_2.value = cform.ip_2.value & cform.snm_2.value;
    cform.nwadr_3.value = cform.ip_3.value & cform.snm_3.value;
    cform.nwadr_4.value = cform.ip_4.value & cform.snm_4.value;
    //
    cform.firstadr_1.value = cform.nwadr_1.value;
    cform.firstadr_2.value = cform.nwadr_2.value;
    cform.firstadr_3.value = cform.nwadr_3.value;
    cform.firstadr_4.value = parseInt(cform.nwadr_4.value) + 1;
    //
    cform.lastadr_1.value = cform.bcast_1.value;
    cform.lastadr_2.value = cform.bcast_2.value;
    cform.lastadr_3.value = cform.bcast_3.value;
    cform.lastadr_4.value = parseInt(cform.bcast_4.value) - 1;
    return(0);
}

//--------------------------

function resetform6(cform) {
    cform.numofaddr.value=5;
    cform.bits.value="";
    cform.maxaddr.value="";
    cform.snm_1.value="";
    cform.snm_2.value="";
    cform.snm_3.value="";
    cform.snm_4.value="";
}

function calcNeeded(cform){
    tmpvar = parseInt(cform.numofaddr.value,10);
    if (isNaN(tmpvar) || tmpvar > 0xfffffffe || tmpvar < 1){
        cform.bits.value="ERR";
        cform.snm_1.value="";
        cform.snm_2.value="";
        cform.snm_3.value="";
        cform.snm_4.value="";
        cform.maxaddr.value="";
        return;
    }
    expval=parseInt(Math.log(tmpvar)/Math.log(2)) + 1;
    maxaddrval=Math.pow(2,expval);
    if (maxaddrval - tmpvar < 2){
        expval+=1;
    }
    cform.maxaddr.value= Math.pow(2,expval) - 2;
    cform.bits.value=32 - expval;
    calcNWmask(cform);
}
    
//--------------------------
function calcAmount(cform){
    tmpvar = parseInt(cform.bits.value,10);
    if (isNaN(tmpvar) || tmpvar > 30 || tmpvar < 0){
        cform.numofaddr.value = 'ERR';
        cform.maxaddr.value="";
        cform.snm_1.value="";
        cform.snm_2.value="";
        cform.snm_3.value="";
        cform.snm_4.value="";
        return;
    }
    cform.maxaddr.value=Math.pow(2,32 - tmpvar);
    cform.numofaddr.value=Math.pow(2,32 - tmpvar)- 2;
    calcNWmask(cform);
}

function resetform7(cform) {
    cform.numofaddr.value="";
    cform.maxaddr.value="";
    cform.bits.value=27;
    cform.snm_1.value="";
    cform.snm_2.value="";
    cform.snm_3.value="";
    cform.snm_4.value="";
}
//--------------------------
function resetform8(cform) {
    cform.ip_1.value=255;
    cform.ip_2.value=255;
    cform.ip_3.value=240;
    cform.ip_4.value=0;
    cform.invert_1.value="";
    cform.invert_2.value="";
    cform.invert_3.value="";
    cform.invert_4.value="";
}

function calcIpInvert(cform){
    cform.invert_1.value="";
    cform.invert_2.value="";
    cform.invert_3.value="";
    cform.invert_4.value="";
    //
    tmpvar = parseInt(cform.ip_1.value,10);
    if (isNaN(tmpvar) ){
        cform.invert_1.value = 'NaN';
        return;
    }
    cform.invert_1.value = 0xff & ~ tmpvar;
    //
    tmpvar = parseInt(cform.ip_2.value,10);
    if (isNaN(tmpvar) ){
        cform.invert_2.value = 'NaN';
        return;
    }
    cform.invert_2.value = 0xff & ~ tmpvar;
    //
    tmpvar = parseInt(cform.ip_3.value,10);
    if (isNaN(tmpvar) ){
        cform.invert_3.value = 'NaN';
        return;
    }
    cform.invert_3.value = 0xff & ~ tmpvar;
    //
    tmpvar = parseInt(cform.ip_4.value,10);
    if (isNaN(tmpvar) ){
        cform.invert_4.value = 'NaN';
        return;
    }
    cform.invert_4.value = 0xff & ~ tmpvar;
}
//--------------------------
function resetform9(cform) {
    cform.dec_1.value="";
    cform.bin_1.value="";
    cform.num.value="";
}

function convertnum_hex(cform){
    cform.dec_1.value="";
    cform.bin_1.value="";
    //
    tmpvar=cform.num.value.replace(/0x/i,"");
    cform.num.value=tmpvar;
    tmpvar = parseInt(cform.num.value,16);
    if (isNaN(tmpvar) ){
        cform.dec_1.value = 'NaN';
        cform.bin_1.value = 'NaN';
        return;
    }
    cform.dec_1.value = tmpvar;
    cform.bin_1.value = h_from10toradix(tmpvar,2);
}
//--------------------------
function resetform10(cform) {
    cform.dec_1.value="";
    cform.hex_1.value="";
    cform.num.value="";
}

function convertnum_bin(cform){
    cform.dec_1.value="";
    cform.hex_1.value="";
    //
    tmpvar = parseInt(cform.num.value,2);
    if (isNaN(tmpvar) ){
        cform.dec_1.value = 'NaN';
        cform.hex_1.value = 'NaN';
        return;
    }
    cform.dec_1.value = tmpvar;
    cform.hex_1.value = h_from10toradix(tmpvar,16);
}
//--------------------------
function resetform11(cform) {
    cform.bin_1.value="";
    cform.hex_1.value="";
    cform.num.value="";
}

function convertnum_dec(cform){
    cform.bin_1.value="";
    cform.hex_1.value="";
    //
    tmpvar = parseInt(cform.num.value,10);
    if (isNaN(tmpvar) ){
        cform.bin_1.value = 'NaN';
        cform.hex_1.value = 'NaN';
        return;
    }
    cform.hex_1.value = h_from10toradix(tmpvar,16);
    cform.bin_1.value = h_from10toradix(tmpvar,2);
}
//--------------------------
function resetform12(cform) {
    cform.hex.value="";
    cform.ip_1.value="";
    cform.ip_2.value="";
    cform.ip_3.value="";
    cform.ip_4.value="";
    cform.bits_1.value="";
    cform.bits_2.value="";
    cform.bits_3.value="";
    cform.bits_4.value="";
}

function dot2hex(cform){
    cform.ip_1.value="";
    cform.ip_2.value="";
    cform.ip_3.value="";
    cform.ip_4.value="";
    cform.bits_1.value="";
    cform.bits_2.value="";
    cform.bits_3.value="";
    cform.bits_4.value="";
    tmpvar=cform.hex.value.replace(/0x/i,"");
    cform.hex.value=tmpvar.substr(0,8);
    //
    tmpvar = parseInt(tmpvar,16);
    if (isNaN(tmpvar)){
        cform.ip_1.value = 'ERR';
        return;
    }
    cform.hex.value = h_paddto8(cform.hex.value);
    cform.ip_1.value = parseInt(cform.hex.value.substr(0,2),16);
    cform.bits_1.value=h_paddto8(h_from10toradix(cform.ip_1.value,2));
    cform.ip_2.value = parseInt(cform.hex.value.substr(2,2),16);
    cform.bits_2.value=h_paddto8(h_from10toradix(cform.ip_2.value,2));
    cform.ip_3.value = parseInt(cform.hex.value.substr(4,2),16);
    cform.bits_3.value=h_paddto8(h_from10toradix(cform.ip_3.value,2));
    cform.ip_4.value = parseInt(cform.hex.value.substr(6,2),16);
    cform.bits_4.value=h_paddto8(h_from10toradix(cform.ip_4.value,2));
}

//Aca termina calculadora IP

//funciones del reloj pedorro
function updateClock ( )
{
var currentTime = new Date ( );  
var currentDay = currentTime.getDay ( );

//Convert the day component to day abbreviation  
currentDay = ( currentDay == 0 ) ? "Domingo" : currentDay;  
currentDay = ( currentDay == 1 ) ? "Lunes" : currentDay;  
currentDay = ( currentDay == 2 ) ? "Martes" : currentDay;  
currentDay = ( currentDay == 3 ) ? "Miercoles" : currentDay;  
currentDay = ( currentDay == 4 ) ? "Jueves" : currentDay;  
currentDay = ( currentDay == 5 ) ? "Viernes" : currentDay;  
currentDay = ( currentDay == 6 ) ? "Sabado" : currentDay;


var currentMonth = currentTime.getMonth( );

//Convert the month component to text month  
currentMonth = ( currentMonth == 0 ) ? "Enero" : currentMonth;  
currentMonth = ( currentMonth == 1 ) ? "Febrero" : currentMonth;  
currentMonth = ( currentMonth == 2 ) ? "Marzo" : currentMonth;  
currentMonth = ( currentMonth == 3 ) ? "Abril" : currentMonth;  
currentMonth = ( currentMonth == 4 ) ? "Mayo" : currentMonth;  
currentMonth = ( currentMonth == 5 ) ? "Junio" : currentMonth;  
currentMonth = ( currentMonth == 6 ) ? "Julio" : currentMonth;  
currentMonth = ( currentMonth == 7 ) ? "Agosto" : currentMonth;  
currentMonth = ( currentMonth == 8 ) ? "Septiembre" : currentMonth;  
currentMonth = ( currentMonth == 9 ) ? "Octubre" : currentMonth;  
currentMonth = ( currentMonth == 10) ? "Noviembre" : currentMonth;  
currentMonth = ( currentMonth == 11) ? "Diciembre" : currentMonth;

var currentDate = currentTime.getDate( );


 var currentHours = currentTime.getHours ( );
 var currentMinutes = currentTime.getMinutes ( );
 
  // Pad the minutes and seconds with leading zeros, if required  
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;  // Choose either "AM" or "PM" as appropriate  
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";  // Convert the hours component to 12-hour format if needed  
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;  // Convert an hours component of "0" to "12"  
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;  // Compose the string for display  
  var currentTimeString = currentDay  + " " + currentDate + " de " + currentMonth +  ". " + currentHours + ":" + currentMinutes + " " + timeOfDay;  // Update the time display  
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  }



