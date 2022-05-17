import React from "react";

function Card(props) {

    return (

        <div>

            <h1 className="heading">My Contacts</h1>

            <div className="card">

                <div className="top">

                    <h2 className="name">{props.data.name}</h2>
                    <img className="circle-img" src={props.data.imgURL} alt="avatar_img" />

                </div>

                <div className="bottom">

                    <p className="info">{props.data.phone}</p>
                    <p className="info">{props.data.email}</p>

                </div>
            </div>

        </div>

    );

}

export default Card;
