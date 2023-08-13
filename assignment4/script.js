var names=new Array();
names[0]="Ankit";
names[1]="johny";
names[2]="Jemmy";
names[3]="janson";
names[4]="Pranav";
names[5]="fluk";
names[6]="Elvish";
names[7]="kalu";
names[8]="lalu";
names[9]="jems";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}