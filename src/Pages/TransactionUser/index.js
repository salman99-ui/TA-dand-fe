import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { handleHistoryReservasi } from '../../API';

function Index() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataProfile = JSON.parse(localStorage.getItem('profile')).data.id;
    handleHistoryReservasi(dataProfile, setData);
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="grid grid-cols-4">
            <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
              <p className="m-0">Waktu</p>
            </div>
            <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
              <p className="m-0">Status</p>
            </div>
            <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
              <p className="m-0">Item</p>
            </div>
            <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
              <p className="m-0">Link Pembayaran</p>
            </div>
          </div>
          {data &&
            data?.map((item) => (
              <div className="grid grid-cols-4">
                <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                  <p className="m-0">{dayjs(item?.date).format('DD-MM-YYYY')}</p>
                </div>
                <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                  <p className="m-0">{item?.status}</p>
                </div>
                <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                  <p className="m-0">-</p>
                </div>
                <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                  <p className="m-0">-</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
