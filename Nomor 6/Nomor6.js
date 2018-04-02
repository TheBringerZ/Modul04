var Tahun = [1965,2008,1992];
var Umur = [];
var x=1;
for (var i = 0; i < Tahun.length; i++)
{
    console.log("Tahun lahir "+(x+i)+" = "+Tahun[i]);
}
	console.log(" ");
    console.log(Tahun);
    console.log("Jika Umur <18 hasilnya false");
    console.log("Jika Umur >= 18 hasilnya true");
	console.log(" ");
         
for (var i = 0; i < Tahun.length; i++)
{
    var Tahun_Lahir=Tahun[i];
    var umur=2018 - Tahun_Lahir;
    if(umur<18)
    {
		Umur.push(false);
    }
    else if(umur>=18)
    {
        Umur.push(true);
    }
    console.log("Tahun " + Tahun[i] + " = " + Umur[i]);
}
