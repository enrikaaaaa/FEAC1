export default interface Appointment {
  id: Key | null | undefined;
  title: ReactNode;
  _id: string;
  date: string;
  time: string;
  business: {
    company: string;
    address: string;
  };
}
export default interface Business {
  _id: string;
  company: string;
  name: string;
  lastName: string;
  address: string;
  category: string;
  img: string;
}
