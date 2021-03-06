import styled from "styled-components";
//import { useNavigate } from "react-router-dom";

function UserCards({
  user,
  instrumentList,
  currentUser,
  user: {
    id,
    profile_imageUrl,
    username,
    first_name,
    last_name,
    instrument_id,
  },
}) {
  function inviteToBand(params) {
    fetch(`/bands/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((band) => {
        console.log(band);
      });
  }
  console.log(currentUser);
  return (
    <Cards>
      <h4>Stage name: {username}</h4>
      <img src={profile_imageUrl} alt={username} />
      <h2>
        Name: {first_name} {last_name}
      </h2>
      <p>
        I play:
        {
          instrumentList.find(
            (instrument) => instrument.id === user.instrument_id
          )?.instrument_name
        }
      </p>

      {currentUser?.band?.length > 0 ? (
        <button
          onClick={() =>
            inviteToBand({ id: currentUser.band[0].id, player_id: id })
          }
        >
          Invite to Band
        </button>
      ) : null}
    </Cards>
  );
}

export default UserCards;

const Cards = styled.div`
    margin 5rem;
    width: 150px;
    height: 50%;
    text-align: auto;
    padding-right: 3em;
    font-family: 'Special Elite', cursive;
    padding-right: 8em;
    background-color: grey;

    img{
      float: center;
      width:  250px;
      height: 250px;
      object-fit: cover;
      padding-bottom: 1em;
    }

`;

//Old Code just in case
// }) {
//   // let history = useNavigate();
//   // const handleClick = (e) => {
//   //   e.preventDefault();
//   //   history.push(`/users/${id}`);
//   // };
//   // console.log(instruments[0]);
//   return (
