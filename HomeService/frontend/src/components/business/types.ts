export default interface Appointment {
  _id: string;
  date: string;
  time: string;
  business: {
    company: string;
    address: string;
  };
}
