var app = angular.module("cvservice",[]);

app.service("cvservice",function(){
  this.contact = {
    name: "Eugene Bulochnik",
    cred: "Pharm.D. CACP",
    cell: "952-465-2565",
    licence: "Oregon Pharmacy License #RPH-0013167",
    email: "Yevgeny.Bulochnik@gmail.com",
    address: "550 NW 19th Ave Apt# 202, Portland OR, 97209"
  };
  this.edu = {
    degree: "Doctor of Pharmacy",
    gpa: "3.60",
    designation: "Cum Laude",
    school: "Drake University, Des Moines, Iowa",
    dates: "August 2006-June 2012"
  };
  this.w_exps = [
    {
      position: "Senior Pharmacist Decision Support Analyst",
      dates:"Feburary 2016-Present",
      duties: [
        "Review and validate pharmacy clinical analytic data",
        "Built reports using access, excel, and tablau",
        "Written SQL querys to pull clinical pharmacy datasets"
      ]
    },
    {
    position: "Providence Health and Services Anticogulation Clinic Clinical Pharmacy Specialist",
    dates: "July 2012-Feburary 2016",
    duties: [
      "Provide face to face patient centered care to 30-35 pateints daily",
      "Adjust Warfarin dosing via point of care INR testing",
      "Developing patient care plans in collaboration with Primary Care Physicians",
      "Developing Lovenox bridge plans in collaboration with Primary Care Physicians and Cardiologists",
      "Tracking inpatient warfarin administration and patient status as a continuity of care imporvement effort",
      "Patient On-Call responsibilities",
      "Developing quick forms within Epic Hyperspace to standardize and increase efficiency of workflows",
      "Developing Excel spreadsheets with visual basic coding, including a Lovenox bridging algorithm, and visual productiviy report for each clinic",
      "Therapeutic review of peri-operative management of anticoagulation presented to regional clinic supervisors and regional manager"
    ]
  }
  ];
this.in_exps= [
  {
    position: "Walgreens Employment/Internship",
    dates: "May 2008-2009",
    duties: [
      "Counseled patients on new prescriptions",
      "Helped customers with OTC selections based on symptom presentation",
      "Calculated and compounded prescription medications",
      "Conducted third party issue resolution"
    ]
  }
];
this.appe = [
  {
    site: "Jordan Creek Internal Medicine Ambulatory Care",
    dates: "April 2012",
    preceptor: "Nicholas Lehman PharmD",
    location: "Des Monies, IA",
    duties: [
      "Monitored INRS and adjusted warfarin doses for clinic patients",
      "Managed diabetes care through weekly telephone consultations, insulin adjustments, and therapy recommendations",
      "Developed a diabetes monitoring program to track consultations and patient outcomes using excel/VBA",
      "Collaborated with physicians on management of chronic disease states",
      "Presentations to physicians and nursing staff"
    ],
    presentations: [
      "Association of ICU or hospital admission with unintentional discontinuation of medications for chronic diseases journal club",
      "Pleotropic effects of statins presentation"
    ]
  },
  {
    site: "Partners in Health Care Pain Management Clinic",
    dates: "Feburary 2012",
    preceptor: "Louann Hart ARNP",
    location: "Des Moines, IA",
    duties: [
      "Managed pain therapy regimens including dosage adjustments, therapeutic interchanges and recommendations for supplemental therapy",
      "Performed administrative functions including submission and documentation for prior authorizations",
      "Completed medication reconciliations on newly consulted patients"
  ]
  },
  {
    site: "Mercy Hospital Medical Center Oncology Rotation",
    dates: "January 2012",
    preceptor: "Julie Suiter PharmD",
    location: "Des Moines, IA",
    duties: [
      "Performed TPN management including caloric calculations, substrate adjustments, electrolyte adjustments and writing orders",
      "Managed vancomycin dosing including ordering troughs and assessing appropriate use",
      "Participated in weekly oncology topic discussions"
    ]
  },
  {
    site: "Kaiser Permanente Community Practice Rotation",
    dates: "November 2012",
    preceptor: "Amy Pazand PharmD",
    location: "Denver, CO",
    duties: [
      "Counseled patients on drug administration, ADRs, therapeutic goals, and adherence",
      "Entered orders, filled prescriptions, monitored inventory and performed prescription transfers",
      "Performed renal dosage adjustment on prescribed antibiotics",
      "Presentations to pharmacy staff"
    ],
    presentations: [
      "Use of Cialis(tadalafil) for BPH journal club"
    ]
  },
  {
    site: "Northwestern Memorial Hospital Neuro-Critical Care",
    dates: "October 2011",
    preceptor: "Kimberly Franklin PharmD",
    location: "Chicago,IL",
    duties: [
      "Evaluated  patients during neurosurgical and critical care rounds with medical and pharmacy residents",
      "Performed daily medication reconciliations",
      "Critical care topic discussions",
      "Presentations to clinic pharmacy specialists and staff pharmacists"
    ],
    presentations: [
      "Early verses late TPN administration journal club",
      "Cerebral vasospasm case presentation"
    ]
  },
  {
    site: "Mercy Hospital Medical Center Acute Care Rotation",
    dates: "September 2011",
    preceptor: "Erik Maki PharmD",
    location: "Des Monies, IA",
    duties: [
      "Evaluated patient's drug therapy regimens based on admission diagnosis and past medical history",
      "Communicated drug therapy recommendations to physicians",
      "Participated in daily pharmacy topic discussions",
      "Presntations to clinical pharmacy specialists and students"
    ],
    presentations: ["Review of Brillinta(ticagrelor)"]
  },
  {
    site: "Iowa Methodist Medical Hospital Anticoagulation Clinic",
    dates: "August 2011",
    preceptor: "Lynn Young PharmD",
    location: "Des Moines, IA",
    duties: [
      "Performed daily warfarin and lovenox education",
      "Reviewed rehabilitation floor patient charts and provided therapy recommendations",
      "Presentations to pharmacy staff and students",
    ],
    presentations: [
      "Xarelto(rivaroxaban) verses warfarin Record-2 trial journal club",
      "Warfarin necrosis and purple toe syndrome topic discussion"
    ]
  },
  {
    site: "Waterloo Covenant Hospital",
    dates: "July 2011",
    preceptor: "Joe Moore PharmD",
    location: "Des Moines, IA",
    duties: [
      "Participated in general hospital operations including order entry, formulary management, and inventory management",
      "Prepared sterile products and IV medications",
      "Peformed pharmacokinetic monitoring and dosing of warfarin and vancomycin",
      "Radiology and surgery shadowing",
      "Presentations and Projects"
    ],
    presentations: [
      "Computer generated medication errors journal club",
      "Case presentation rhabdomyolysis in a 22 year old",
      "Zosyn(piperacillin and tazobactam) administration report"
    ]
  }
];
this.leadership = [
  {
    name: "Academy of Manged Care Pharmacy",
    activities: [
      {name: "Chapter President 2009-2011, Drake University"},
      {name: "Local 2011 Pharmacy & Therapeutics Competition 1st Place:", presentation: "Therapeutic review of antiplatelet agent Effient(Prasugrel)"},
      {name: "National 2010 Pharmacy & Therapeutics Finalist: Presented at AMCP National conference San Diego, CA", presentation: "Therapeutic class review of platelet growth factors Nplate(romiplostim) and Promacta (eltrombopag)"},
      {name: "National 2009 Pharmacy & Therapeutics Competition 3rd place: Presented at AMCP National conference Orlando, FL", presentation: "Therapeutic review of Tysabri(natalizumab)"}
    ],
    dates: "September 2008 - 2011"
  },
  {
    name: "Phi Lambda Sigma Honorary Society",
    activities: [
      {name: "Chapter Vice President 2010"}
    ],
    dates: "September 2009-Present"
  },
  {
    name: "Iowa Pharmacy Association",
    dates: "September 2010-2012",
  },
  {
    name: "P1 Orientation Speaker",
    dates: "August 2009"
  }
];
});
