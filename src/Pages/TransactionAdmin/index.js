import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {
  handleGetTotalTransaksi,
  handleGetTransaksiPayment,
  handleHistoryReservasiAdmin,
} from '../../API';
import ModalStatus from '../../Slice/TransactionAdmin/ModalStatus';

function Index() {
  const [data, setData] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [dataPayment, setDataPayment] = useState(null);
  const [dataTotal, setDataTotal] = useState(null);
  useEffect(() => {
    handleHistoryReservasiAdmin((dataReservasis) => {
      handleGetTransaksiPayment((dataPayments) => {
        handleGetTotalTransaksi((dataTotals) => {
          setData(dataReservasis);
          setDataPayment(dataPayments);
          setDataTotal(dataTotals);
        });
      });
    });
  }, []);
  return (
    <>
      <div>
        <div className="">
          <div>Total transaksi Berhasil (RP) {dataPayment || '-'}</div>
          <div>Total transaksi Berhasil {dataTotal || '-'}</div>
          <div className="mt-6">
            <div className="grid grid-cols-7">
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Waktu</p>
              </div>
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Nama</p>
              </div>
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Email</p>
              </div>
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Harga</p>
              </div>
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Status</p>
              </div>
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Status Pembayaran</p>
              </div>
              <div className="col-span-1 bg-[#d9d9d9] border border-solid px-2 py-1">
                <p className="m-0">Action</p>
              </div>
            </div>
            {data &&
              data?.map((item) => (
                <div className="grid grid-cols-7">
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <p className="m-0">{dayjs(item?.date).format('DD-MM-YYYY')}</p>
                  </div>
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <p className="m-0">{item?.nama}</p>
                  </div>
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <p className="m-0">{item?.email}</p>
                  </div>
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <p className="m-0">{item?.amount}</p>
                  </div>
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <p className="m-0">{item?.status}</p>
                  </div>
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    <p className="m-0">
                      {item?.status === 'DONE' ? item?.p_status : '-'}
                    </p>
                  </div>
                  <div className="col-span-1 bg-[#dfdfdf] border border-solid px-2 py-1">
                    {item?.status !== 'DONE' && (
                      <button
                        type="button"
                        className=""
                        onClick={() => setDataDetail(item)}
                      >
                        Update Status
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {dataDetail && (
        <ModalStatus data={dataDetail} handleClose={() => setDataDetail(null)} />
      )}
    </>
  );
}

export default Index;
