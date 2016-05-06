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
      duties: ["test","test","test"]
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
      "Developed a diabestes monitoring program to track consultations and patient outcomes using excel/VBA",
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
  }
];
});
