import React from "react"
import { CardBody, CardSubtitle, CardText } from "reactstrap"
import { useParams, NavLink } from "react-router-dom"
import NotFound from "./NotFound"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  console.log(useParams())
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)

  return (
    <main className="show-cards">
      {currentApartment && (
        <>
          <img
            alt="picture of the front of a house"
            src={currentApartment.image}
            className="cat-show-img"
          />
          <section>
            <CardBody>
              <h3>{currentApartment.street}</h3>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {currentApartment.city}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {currentApartment.state}
              </CardSubtitle>
              <CardText>Manager: {currentApartment.manager}</CardText>
              <CardText>Email: {currentApartment.email}</CardText>
              <CardText>Price: {currentApartment.price}</CardText>
              <CardText>Bedrooms: {currentApartment.bedrooms}</CardText>
              <CardText>Bathrooms: {currentApartment.bathrooms}</CardText>
              <CardText>Pets Allowed: {currentApartment.pets}</CardText>
            </CardBody>
            <NavLink
              to={`/catedit/${currentApartment.id}`}
              className="nav-link"
            >
              Edit Cat Profile
            </NavLink>
          </section>
        </>
      )}
      {!currentApartment && <NotFound />}
    </main>
  )
}

export default ApartmentShow
