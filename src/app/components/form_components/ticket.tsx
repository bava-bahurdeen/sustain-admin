'use client';
import axios from 'axios';
import { error } from 'console';
import { useState, useEffect } from 'react';
import { Table, TableProps } from 'antd';

interface ticket {
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
interface dataProps {}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Place',
    dataIndex: 'Place',
    key: 'address',
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const Ticket: React.FC = () => {
  const [Data, setData] = useState<ticket[]>([]);
  const [Loading, setLoading] = useState<Boolean>(true);
  const [Error, setError] = useState<string | null>();
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ticket[]>(
          'https://sustain-backend.onrender.com/ticket'
        );
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);
  if (Loading) {
    return <h1>Loading.....</h1>;
  }
  if (Error) {
    return <h1 className="text-red-400">Error::::{Error}</h1>;
  }

  return (
    <div className="w-full">
      <Table columns={columns} dataSource={Data} />
    </div>
  );
};

export default Ticket;
