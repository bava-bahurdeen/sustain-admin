import axios from 'axios';
import { promises } from 'dns';
interface Ticket {
  name: string;
  email: string;
  place: string;
  time: string;
  plastic: number;
  paper: number;

  old_untorn_dresses: number;

  decarative_materials: number;

  leather: number;
}

export const Fetchticket = async (): Promise<Ticket[]> => {
  try {
    const { data } = await axios.get<Ticket[]>(
      'https://sustain-backend.onrender.com/ticket'
    );
    return data;
  } catch (error: any) {
    console.log('Error fetching error' + error.message);
    throw error;
  }
};
