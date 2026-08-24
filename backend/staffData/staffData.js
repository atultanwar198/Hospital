const staffDatabase = [
  {
    id: "STF001",
    employeeId: "HMS-STF-001",
    name: "Rahul Sharma",
    gender: "Male",
    dateOfBirth: "1994-06-15",
    phone: "+91 98765 43210",
    email: "rahul.sharma@hospitaldemo.in",

    department: "Emergency",
    designation: "Senior Staff Nurse",
    joiningDate: "2021-07-12",
    employmentType: "Full Time",
    shift: "Morning",
    status: "Active",

    qualification: "B.Sc Nursing",
    experience: "5 Years",

    address: {
      street: "MG Road",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560001",
      country: "India",
    },

    emergencyContact: {
      name: "Priya Sharma",
      relationship: "Wife",
      phone: "+91 91234 56789",
    },

    permissions: [
      "VIEW_PATIENTS",
      "MANAGE_APPOINTMENTS",
      "PATIENT_CHECKIN",
      "VIEW_BILLING",
      "CREATE_INVENTORY_REQUEST",
    ],

    profileImage: "https://i.pravatar.cc/150?img=12",
  },

  {
    id: "STF002",
    employeeId: "HMS-STF-002",
    name: "Anjali Verma",
    gender: "Female",
    dateOfBirth: "1997-02-21",
    phone: "+91 99887 66554",
    email: "anjali.verma@hospitaldemo.in",

    department: "Cardiology",
    designation: "Staff Nurse",
    joiningDate: "2023-03-10",
    employmentType: "Full Time",
    shift: "Evening",
    status: "Active",

    qualification: "GNM Nursing",
    experience: "3 Years",

    address: {
      street: "FC Road",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411004",
      country: "India",
    },

    emergencyContact: {
      name: "Amit Verma",
      relationship: "Brother",
      phone: "+91 90909 80808",
    },

    permissions: [
      "VIEW_PATIENTS",
      "MANAGE_APPOINTMENTS",
      "PATIENT_CHECKIN",
      "CREATE_INVENTORY_REQUEST",
    ],

    profileImage: "https://i.pravatar.cc/150?img=47",
  },

  {
    id: "STF003",
    employeeId: "HMS-STF-003",
    name: "Vikram Singh",
    gender: "Male",
    dateOfBirth: "1991-11-08",
    phone: "+91 97654 32109",
    email: "vikram.singh@hospitaldemo.in",

    department: "Pharmacy",
    designation: "Pharmacy Staff",
    joiningDate: "2020-09-18",
    employmentType: "Full Time",
    shift: "Night",
    status: "Active",

    qualification: "D.Pharm",
    experience: "6 Years",

    address: {
      street: "Civil Lines",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302006",
      country: "India",
    },

    emergencyContact: {
      name: "Neha Singh",
      relationship: "Sister",
      phone: "+91 93456 78901",
    },

    permissions: [
      "VIEW_INVENTORY",
      "MANAGE_INVENTORY_REQUEST",
      "VIEW_PATIENTS",
    ],

    profileImage: "https://i.pravatar.cc/150?img=11",
  },

  {
    id: "STF004",
    employeeId: "HMS-STF-004",
    name: "Sneha Patel",
    gender: "Female",
    dateOfBirth: "1995-08-30",
    phone: "+91 98123 45678",
    email: "sneha.patel@hospitaldemo.in",

    department: "Laboratory",
    designation: "Lab Technician",
    joiningDate: "2022-01-24",
    employmentType: "Full Time",
    shift: "Morning",
    status: "Active",

    qualification: "B.Sc Medical Laboratory Technology",
    experience: "4 Years",

    address: {
      street: "Navrangpura",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380009",
      country: "India",
    },

    emergencyContact: {
      name: "Rohan Patel",
      relationship: "Brother",
      phone: "+91 92345 67890",
    },

    permissions: [
      "VIEW_LAB_TESTS",
      "MANAGE_TEST_REQUESTS",
      "UPLOAD_LAB_REPORTS",
    ],

    profileImage: "https://i.pravatar.cc/150?img=32",
  },
];

export default staffDatabase;
