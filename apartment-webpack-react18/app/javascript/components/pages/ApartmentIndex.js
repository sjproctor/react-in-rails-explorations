import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const ApartmentIndex = ({ apartments }) => {
  return (
    <main className="index-cards">
      {apartments?.map((apartment, index) => {
        return (
          <Card
            style={{
              width: "14rem"
            }}
            key={index}
          >
            <img alt="picture of the front of a house" src={apartment.image} />
            <CardBody>
              <CardTitle tag="h5">{apartment.street}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                City: {apartment.city}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                State: {apartment.state}
              </CardSubtitle>
              <NavLink
                to={`/apartmentshow/${apartment.id}`}
                className="nav-link"
              >
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default ApartmentIndex
