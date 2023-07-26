// // // console.log("Hola Moph Harry!");

class SmartPhone 
{
     brand;
     model;
     OperSys;
     StorageCapc;
     ScrnSz;
     BattCapc;
     CamPx;
     Processor;
     RAM;
     ChgSp;
     Wirelserv;
     WNT;


     constructor(brand,model,OperSys,StorageCapc,ScrnSz,BattCapc,CamPx,Processor,RAM,ChgSp,Wirelserv,WNT)
     {
        this.brand = brand;
        this.model = model;
        this.OperSys = OperSys;
        this.StorageCapc = StorageCapc;
        this.ScrnSz = ScrnSz;
        this.BattCapc = BattCapc;
        this.CamPx = CamPx;
        this.Processor = Processor;
        this.RAM = RAM;
        this.ChgSp = ChgSp;
        this.Wirelserv = Wirelserv;
        this.WNT = WNT;
     } 
     
     isRamG(RAM)
     {
        if (RAM>=20) {
            return true;
        }
        return false;
     }
     
     isBattCapc(BattCapc)
     {
        if (BattCapc>= 4500)
        {
            return true;
        }
        return false;
     }

     Sum()
     {
        return`
        Brand : ${this.brand}
         Model:${this.model}
         Screen Size: ${this.ScrnSz}
         Operating System: ${this.OperSys}
         Storage Capacity: ${this.StorageCapc}
         Battery Capacity : ${this.BattCapc}
         Camera Resolution: ${this.CamPx}
         Processor: ${this.Processor}
         RAM : ${this.RAM}
         Charging Speed: ${this.ChgSp}
         Wireless Service: ${this.Wirelserv}
         Wireless network technology: ${this.WNT}
         Is Battle Capacity Large? : ${this.isBattCapc(this.BattCapc)}
         Are there many RAM? : ${this.isRamG(this.RAM)}
        `;
     }
}
const inf = new SmartPhone(
    "Apple",
    "iPhone 14 Pro",
    "iOS",
    "1 TB",
    "6.1 Inches",
    "5000",
    "8MP",
    "A15",
    25,
    "5000mAH",
    "Unlocked",
    "GSM, LTE",
);

console.log(inf.Sum());

// class SmartPhone {
//     brand;
//     mode;
//     OperSys;
//     StorageCapc;
//     ScrnSz;
//     BattCapc;
//     CamPx;
//     Processo;
//     RAM;
//     ChgSp;
//     Wirelserv;
//     WNT;

//     constructor(brand, model, OperSys, StorageCapc, ScrnSz, BattCapc, CamPx, Processor, RAM, ChgSp, Wirelserv, WNT) {
//        this.brand = brand;
//        this.model = model;
//        this.OperSys = OperSys;
//        this.StorageCapc = StorageCapc;
//        this.ScrnSz = ScrnSz;
//        this.BattCapc = BattCapc;
//        this.CamPx = CamPx;
//        this.Processor = Processor;
//        this.RAM = RAM;
//        this.ChgSp = ChgSp;
//        this.Wirelserv = Wirelserv;
//        this.WNT = WNT;
//     } 
    
//     isRamG() {
//        if (this.RAM >= 20) {
//            return true;
//        }
//        return false;
//     }
    
//     isBattCapc() {
//        if (parseInt(this.BattCapc) >= 4500) {
//            return true;
//        }
//        return false;
//     }

//     Sum() {
//        return `
//        Brand : ${this.brand}
//        Model : ${this.model}
//        Screen Size : ${this.ScrnSz}
//        Operating System : ${this.OperSys}
//        Storage Capacity : ${this.StorageCapc}
//        Battery Capacity : ${this.BattCapc}
//        Camera Resolution : ${this.CamPx}
//        Processor : ${this.Processor}
//        RAM : ${this.RAM}
//        Charging Speed : ${this.ChgSp}
//        Wireless Service : ${this.Wirelserv}
//        Wireless network technology : ${this.WNT}
//        Is Battery Capacity Large? : ${this.isBattCapc()}
//        Are there many RAM? : ${this.isRamG()}
//        `;
//     }
// }

// const inf = new SmartPhone(
//    "Apple",
//    "iPhone 14 Pro",
//    "iOS",
//    "1 TB",
//    "6.1 Inches",
//    "5000",
//    "8MP",
//    "A15",
//    25,
//    "5000mAH",
//    "Unlocked",
//    "GSM, LTE",
// );

// console.log(inf.Sum());