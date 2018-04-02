var Pemain_1 = new Object()
Pemain_1.tinggi = 175;
Pemain_1.umur = 25;
Pemain_1.nilai_umur = Pemain_1.umur * 5;
Pemain_1.total_nilai = Pemain_1.tinggi + Pemain_1.nilai_umur;

console.log("Tinggi Pemain_1 = " + Pemain_1.tinggi + " cm");
console.log("Umur Pemain_1 = " + Pemain_1.umur);

var Pemain_2 = new Object()
Pemain_2.tinggi = 180;
Pemain_2.umur = 22;
Pemain_2.nilai_umur = Pemain_2.umur * 5;
Pemain_2.total_nilai = Pemain_2.tinggi + Pemain_2.nilai_umur;

console.log(" ")
console.log("Tinggi Pemain_2 = " + Pemain_2.tinggi + " cm");
console.log("Umur Pemain_2 = " + Pemain_2.umur);

console.log(" ")
console.log("Skor Nilai Pemain_1 = " + Pemain_1.tinggi + " + " + Pemain_1.umur + "*5 = " + Pemain_1.total_nilai);
console.log("Skor Nilai Pemain_2 = " + Pemain_2.tinggi + " + " + Pemain_2.umur + "*5 = " + Pemain_2.total_nilai);

console.log(" ")

if(Pemain_1.total_nilai>Pemain_2.total_nilai)
{
	console.log("Pemain_1 Menang!!")
}

else if(Pemain_1.total_nilai<Pemain_2.total_nilai)
{
	console.log("Pemain_2 Menang!!")
}

else if(Pemain_1.total_nilai=Pemain_2.total_nilai)
{
	console.log("Permainan Seri!!")
}
else
{}
console.log(" ")
console.log("--- 3 Pemain ---")
console.log(" ")

var Pemain_3 = new Object()
Pemain_3.tinggi = 190;
Pemain_3.umur = 24;
Pemain_3.nilai_umur = Pemain_3.umur * 5;
Pemain_3.total_nilai = Pemain_3.tinggi + Pemain_3.nilai_umur;

console.log("Tinggi Pemain_3 = " + Pemain_3.tinggi + " cm");
console.log("Umur Pemain_3 = " + Pemain_3.umur);

console.log(" ")
console.log("Skor Nilai Pemain_1 = " + Pemain_1.tinggi + " + " + Pemain_1.umur + "*5 = " + Pemain_1.total_nilai);
console.log("Skor Nilai Pemain_2 = " + Pemain_2.tinggi + " + " + Pemain_2.umur + "*5 = " + Pemain_2.total_nilai);
console.log("Skor Nilai Pemain_3 = " + Pemain_3.tinggi + " + " + Pemain_3.umur + "*5 = " + Pemain_3.total_nilai);
console.log(" ")

if(Pemain_2.total_nilai&&Pemain_3.total_nilai<Pemain_1.total_nilai)
{	
	if(Pemain_1.total_nilai==Pemain_2.total_nilai)
	{
		console.log("Pemain_1 dan Pemain_2 Menang Tapi Seri!!")
	}
	else if(Pemain_1.total_nilai==Pemain_3.total_nilai)
	{
		console.log("Pemain_1 dan Pemain_3 Menang Tapi Seri!!")
	}
	else
	{
		console.log("Pemain_1 Menang!!")
	}
}

else if(Pemain_1.total_nilai&&Pemain_3.total_nilai<Pemain_2.total_nilai)
{
	if(Pemain_2.total_nilai==Pemain_1.total_nilai)
	{
		console.log("Pemain_2 dan Pemain_1 Menang Tapi Seri!!")
	}
	else if(Pemain_2.total_nilai==Pemain_3.total_nilai)
	{
		console.log("Pemain_2 dan Pemain_3 Menang Tapi Seri!!")
	}
	else
	{
		console.log("Pemain_2 Menang!!")
	}
}

else if(Pemain_1.total_nilai&&Pemain_2.total_nilai<Pemain_3.total_nilai)
{
	if(Pemain_3.total_nilai==Pemain_1.total_nilai)
	{
		console.log("Pemain_3 dan Pemain_1 Menang Tapi Seri!!")
	}
	else if(Pemain_3.total_nilai==Pemain_1.total_nilai)
	{
		console.log("Pemain_3 dan Pemain_1 Menang Tapi Seri!!")
	}
	else
	{
		console.log("Pemain_3 Menang!!")
	}
}

else if(Pemain_1.total_nilai=Pemain_2.total_nilai=Pemain_3.total_nilai)
{
	console.log("Ketiganya Seri!!")
}
else
{}