import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { handleHistoryReservasiAdmin } from '../../API';
import ModalStatus from '../../Slice/TransactionAdmin/ModalStatus';

function Index() {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   handleHistoryReservasiAdmin(setData);
  // }, []);
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="w-1/2">
            <div className="grid grid-cols-5">
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
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Action</p>
              </div>
            </div>
            {data &&
              data?.map((item) => (
                <div className="grid grid-cols-5">
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
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <button type="button" className="">
                      Update Status
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <ModalStatus />
    </>
  );
}

export default Index;
