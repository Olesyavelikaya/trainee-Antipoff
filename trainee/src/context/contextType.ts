interface dataCard {
  id?: number;
  email?: string;
  first_name: string;
  last_name: string;
  avatar: string;
  status: string;
}

interface cardInfo {
  dataPageOne: dataCard[];
  dataPageTwo: dataCard[];
  status: string;
}

interface userData {
  userName: string;
  userEmail: string;
  userPassword: number | string;
  userRepeatPassword: number | string;
}

export type { userData, cardInfo };
