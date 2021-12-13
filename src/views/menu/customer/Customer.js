import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Customer = () => {
  const [descriptions, setDescriptions] = useState([])
  const [description, setDescription] = useState('')
  const [id, setId] = useState(0)
  const [alamat, setAlamat] = useState('')
  const [telpon, setTelpon] = useState('')
  const [email, setEmail] = useState('')
  // const lengthDescriptions = descriptions.length
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const lengthDesc = descriptions.length + 1
    //Set Descriptions
    setDescriptions([
      ...descriptions,
      {
        id: lengthDesc,
        description: description,
        alamat: alamat,
        telpon: telpon,
        email: email,
      },
    ])
    setDescription('')
    setAlamat('')
    setTelpon('')
    setEmail('')
    // alert(`Hello`);
  }

  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const handleChangeAlamat = (e) => {
    setAlamat(e.target.value)
  }

  const handleChangeTelpon = (e) => {
    setTelpon(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

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
        <CCardHeader>Manage Customer</CCardHeader>
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
                  <label style={{ fontWeight: 'bold' }}>Alamat : </label>
                  <input
                    style={{ height: 30, marginLeft: 20, marginRight: 20 }}
                    type="text"
                    value={alamat}
                    onChange={handleChangeAlamat}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: 'bold' }}>Telepon : </label>
                  <input
                    style={{ height: 30, marginLeft: 20, marginRight: 20 }}
                    type="text"
                    value={telpon}
                    onChange={handleChangeTelpon}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: 'bold' }}>Email : </label>
                  <input
                    style={{ height: 30, marginLeft: 20, marginRight: 20 }}
                    type="text"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </div>
              </div>

              <input
                style={{ background: 'green', borderRadius: 8, color: 'white' }}
                type="submit"
                value="Add"
              />
            </form>
          </div>
          <br />
          <div>
            <table
              width={1200}
              style={{
                letterSpacing: 1,
                border: '2px solid rgb(200, 200, 200)',
              }}
            >
              <thead style={{ backgroundColor: '#3f87a6', color: '#fff' }}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Telepon</th>
                  <th>Email</th>
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
                      <td>{item.alamat}</td>
                      <td>{item.telpon}</td>
                      <td>{item.email}</td>
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

export default Customer
