import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/img/logo.jpeg';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const dataProfile = JSON.parse(localStorage.getItem('profile')).data.role;
    if (dataProfile === 1) {
      window.location.href = '/transaction-admin';
    }
  }, []);
  return (
    <div className="md:mt-32 relative">
      <div className="absolute -top-[90px]">
        <img src={Logo} width={100} alt="" />
      </div>
      <p className="m-0 mb-10 md:mb-16 text-[#a8a1a1] text-2xl md:text-[72px] font-bold text-center">
        AHASS Nabila
      </p>
      <p className="text-[#a8a1a1] text-3xl mb-20 md:text-[60px] m-0 font-semibold text-[#464E5F] text-center">
        SERVIS <span className="text-red-400">YANG</span> PASTI{' '}
        <span className="text-red-400">DARI</span> YANG AHLI
      </p>
      <div className="mt-7">
        <div className="flex justify-center w-full">
          <div className="w-full md:w-2/3 flex justify-center gap-5">
            <button
              type="button"
              onClick={() => navigate('/reservasi')}
              className="bg-[#f36363] text-white border-none px-3 py-2 cursor-pointer"
            >
              <span className="text-base md:text-lg">SERVIS</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/transaction-history')}
              className="bg-[#f36363] text-white border-none px-3 py-2  cursor-pointer"
            >
              <span className="text-base md:text-lg">BOOKING HISTORY</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-32 md:mt-32">
        <p className="m-0 mb-4 text-[#a8a1a1] text-xl md:text-5xl font-bold text-center">
          Selamat Datang Di Bengkel AHASS Nabila Motor
        </p>
        <p className="font-bold m-0 text-[#a8a1a1] text-xl text-center">
          Gunakan layanan Booking Service untuk memilih waktu kunjungan servis sesuai
          dengan jadwal luang Anda.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
