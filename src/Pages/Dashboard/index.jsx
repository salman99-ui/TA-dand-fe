import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const dataProfile = JSON.parse(localStorage.getItem('profile')).data.role;
    if (dataProfile === 1) {
      window.location.href = '/transaction-admin';
    }
  }, []);
  return (
    <div className="md:mt-32">
      <p className="m-0 mb-10 md:mb-16 text-2xl md:text-[72px] font-bold text-center">
        AHASS Nabila
      </p>
      <p className="text-3xl mb-20 md:text-[60px] m-0 font-semibold text-[#464E5F] text-center">
        SERVIS YANG PASTI DARI YANG AHLI
      </p>
      <div className="mt-7">
        <div className="flex justify-center w-full">
          <div className="w-full md:w-2/3 flex justify-around">
            <button
              type="button"
              onClick={() => navigate('/reservasi')}
              className="bg-[#D9D9D9] border-none px-3 py-2 cursor-pointer"
            >
              <span className="text-base md:text-lg">SERVIS</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/transaction-history')}
              className="bg-[#D9D9D9] border-none px-3 py-2  cursor-pointer"
            >
              <span className="text-base md:text-lg">BOOKING HISTORY</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-64">
        <p className="m-0 mb-4 text-xl md:text-5xl font-bold text-center">
          Selamat Datang Di Bengkel AHASS Nabila Motor
        </p>
        <p className="font-bold m-0 text-xl text-center">
          Gunakan layanan Booking Service untuk memilih waktu kunjungan servis sesuai
          dengan jadwal luang Anda.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
