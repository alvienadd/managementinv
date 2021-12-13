import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Pesanan = () => {
  const [descriptions, setDescriptions] = useState([])
  const [description, setDescription] = useState('')
  const [id, setId] = useState(0)
  const [qty, setQty] = useState('')
  const [nominal, setNominal] = useState('')
  // const [email, setEmail] = useState('')
  const lengthDescriptions = descriptions.length
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const lengthDesc = descriptions.length + 1
    //Set Descriptions
    setDescriptions([
      ...descriptions,
      {
        id: lengthDesc,
        description: description,
        qty: qty,
        nominal: nominal,
        // telpon: telpon,
        // email: email,
      },
    ])
    setDescription('')
    setQty('')
    setNominal('')
    // setTelpon('')
    // setEmail('')
    // alert(`Hello`);
  }

  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const handleChangeQty = (e) => {
    setQty(e.target.value)
  }

  const handleChangeNominal = (e) => {
    setNominal(e.target.value)
  }

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value)
  // }

  const handleDelete = (item) => {
    // this.props.deleteTodo(id);
    console.log('ID:', item.id)
    const todos = descriptions.filter((desc) => {
      console.log('ToDos:', desc.id)
      // return desc.id !== item.id;
      return item.id !== desc.id
    })
    // return todos;
    setDescriptions(todos)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Manage Pesanan</CCardHeader>
        <CCardBody>
          <div
            style={{
              marginLeft: 0,
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', marginRight: 15 }}>
                <label style={{ fontWeight: 'bold' }}>Nama : </label>
                <br />
                <div style={{ marginTop: 5 }}></div>
                <input
                  style={{ height: 30, marginLeft: 20, marginRight: 20 }}
                  type="text"
                  value={description}
                  onChange={handleChange}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <br />
                <div>
                  <label style={{ fontWeight: 'bold' }}>Qty : </label>
                  <input
                    style={{ height: 30, marginLeft: 20, marginRight: 20 }}
                    type="text"
                    pattern="[0-9]*"
                    value={qty}
                    onChange={handleChangeQty}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: 'bold' }}>Nominal : </label>
                  <input
                    style={{ height: 30, marginLeft: 20, marginRight: 20 }}
                    type="text"
                    pattern="[0-9]*"
                    value={nominal}
                    onChange={handleChangeNominal}
                  />
                </div>
              </div>
              <input
                style={{ background: 'green', borderRadius: 8, color: 'white' }}
                type="submit"
                value="Add"
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp; Total Transaksi : {lengthDescriptions}
            </form>
          </div>
          <br />
          <div>
            <table
              width={1000}
              style={{
                letterSpacing: 1,
                border: '2px solid rgb(200, 200, 200)',
              }}
            >
              <thead style={{ backgroundColor: '#3f87a6', color: '#fff' }}>
                <tr>
                  <th>No</th>
                  <th>Nama Barang</th>
                  <th>Qty </th>
                  <th>Nominal</th>
                  <th>Hasil</th>
                  <th>Action</th>
                </tr>
              </thead>
              <div style={{ marginTop: 8 }}></div>
              {descriptions.map((item, i) => {
                console.log('test', item.description)

                return (
                  <tbody key={item.id}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.description}</td>
                      <td>{item.qty}</td>
                      <td>{item.nominal}</td>
                      <td>{item.qty * item.nominal}</td>
                      <td
                        style={{
                          background: 'red',
                          borderRadius: 8,
                          color: 'white',
                          width: 20,
                        }}
                        onClick={(id) => handleDelete(item)}
                      >
                        Delete
                      </td>
                    </tr>
                    <div style={{ marginTop: 10 }}></div>
                  </tbody>
                )
              })}
            </table>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Pesanan
