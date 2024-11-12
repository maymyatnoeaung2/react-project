import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import VoucherDetailCard from '../components/VoucherDetailCard'

const VoucherDetailsPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Voucher Detail"}
          Links={[{ path: "/voucher", title: "Voucher Module" }]}
        />
        <VoucherDetailCard />
      </Container>
    </section>
  )
}

export default VoucherDetailsPage