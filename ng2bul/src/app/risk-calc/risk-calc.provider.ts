export class CHADS_vasc {
    riskcalc_name: string;
    riskfactors: riskfactor[];
    scores: string[];
    constructor(){
        this.riskcalc_name = "CHADS-Vasc";
        this.riskfactors = [
            new riskfactor("Congestive Heart Failure", "CHF", 1),
            new riskfactor("Hypertension", "HTN", 1),
            new riskfactor("Age between 65 and 75", "AGE 65-75", 1),
            new riskfactor("Age over 75", "AGE >75", 2),
            new riskfactor("Diabetes", "DM", 1),
            new riskfactor("CVA/TIA", "CVA", 2),
            new riskfactor("Female", "Female", 1),
            new riskfactor("Coronary Artery Disease", "CAD", 1)
            ];
        this.scores= [
            '',
            '0.6%',
            '2.2%',
            '3.2%',
            '4.8%',
            '7.2%',
            '9.7%',
            '11.2%',
            '10.8%',
            '12.2%'
            ]
    }
}

export class HasBled {
    riskcalc_name: string; 
    riskfactors: riskfactor[];
    scores: string[];
    constructor(){
        this.riskcalc_name= "HasBled";
        this.riskfactors= [
            new riskfactor("Hypertension", "HTN", 1),
            new riskfactor("Renal Failure", "Renal", 1),
            new riskfactor("Liver Failure", "Liver", 1),
            new riskfactor("CVA/TIA", "CVA", 2),
            new riskfactor("Bleeding History", "Bleed", 1),
            new riskfactor("Labile INR", "Labile INR", 1),
            new riskfactor("Age > 65", "Age >65", 1),
            new riskfactor("ETOH Intake", "ETOH", 1),
            new riskfactor("Other Anticoagulants", "Thinners", 1)
            ];
        this.scores= [
             "",
            "3.4%",
            "4.1%",
            "5.8%",
            "8.9%",
            "9.1%",
            ">10%",
            ">10%",
            ">10%",
            ">10%"
        ]
    }
}

class riskfactor {
    name: string;
    abv: string;
    value: number;
    isactive: boolean;
    constructor(name, abv, value){
        this.name = name; 
        this.abv = abv;
        this.value = value; 
        this.isactive = false; 
    }
}