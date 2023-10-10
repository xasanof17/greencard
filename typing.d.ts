type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

type FormDate = {
  day: number | string;
  month: Month | string;
  year: number | string;
};

interface FormPlace {
  stateName: string;
  regionName: string;
  districtName: string;
}

type FormChildren = {
  firstName: string;
  lastName: string;
  gender: {
    man: boolean;
    woman: boolean;
  };
  img: string;
  dateOfBirth: FormDate;
  placeOfBirth: FormPlace;
};

type FormDataType = {
  firstName: string;
  lastName: string;
  gender: {
    man: boolean;
    woman: boolean;
  };
  dateOfBirth: FormDate;
  placeOfBirth: FormPlace;
  dataOfPassport: {
    series: string;
    givenDate: FormDate;
  };
  img: string;
  residenceAddress: {
    addressLine: string;
    phoneNumber: string;
  } & FormPlace;
  educationLevel: {
    level: string;
  };
  maritalStatus: {
    status: string;
    children: FormChildren[];
  };
};
