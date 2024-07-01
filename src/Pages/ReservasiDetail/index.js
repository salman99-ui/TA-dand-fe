import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { handleDetailReservasi } from '../../API';
import ModalCreatePayment from '../../Slice/DetailReservasi/ModalCreatePayment';

function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [idReservasi, setIdReservasi] = useState(null);

  useEffect(() => {
    handleDetailReservasi(id, (results) => {
      setData(results);
    });
  }, []);

  return (
    <>
      <div>
        {data && (
          <div>
            <div>Id Reservasi {data?.id}</div>
            <div>Email {data?.email}</div>
            <div>Nama {data?.nama}</div>
            <div>Status {data?.status || '-'} </div>
            <div>Status Pembayaran {data?.p_status || '-'}</div>
            <div>Alamat {data?.nama || '-'}</div>
            <div>Tanggal {dayjs(data?.date).format('DD-MM-YYYY') || '-'}</div>
            <div>Harga Rp. {data?.amount}</div>
            <div>Virtual Account {data?.p_va || '-'}</div>
            <div>
              {data?.status === 'DONE' && data?.p_status !== 'DONE' && (
                <button type="button" onClick={() => setIdReservasi(data?.id)}>
                  Bayar
                </button>
              )}
              <button type="button" onClick={() => navigate('/')}>
                Home
              </button>
            </div>
          </div>
        )}
      </div>
      {idReservasi && (
        <ModalCreatePayment
          id={idReservasi}
          amount={data?.amount}
          detail={data}
          handleClose={() => setIdReservasi(null)}
        />
      )}
    </>
  );
}

export default Index;
