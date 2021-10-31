import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contactSection text-white">
      <div className=" row justify-content-around">
        <div className="col-lg-3 col-sm-6 col-10 mx-auto">
          <div className="contactsiteHeader">
            <h1>Tourism</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vel suscipit provident sint, perferendis exercitationem animi odio
              ad quam aut.
            </p>
          </div>
          <div className="contactLink">
              <p>
            <a href="/home">
              <span className="icon">
                <i class="fas fa-phone-square-alt"></i>
              </span>{" "}
              1-677-124-44227
            </a>
            </p>
            <p>
            <a href="/home">
              <span className="icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>{" "}
              Eighth Avenue 487, New York
            </a>
            </p>
            <p>
            <a href="/home">
              <span className="icon">
                <i class="fas fa-envelope-square"></i>
              </span>{" "}
              souravnath1245@gmail.com
            </a>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-10 mx-auto" >
          <div className="contactsiteHeader">
            <h1>Latest Posts</h1>
            <div className="contactBlog">
              <p>
                Traveling – It Leaves You Speechless, Then Turns You Into A
                Storyteller
              </p>
              <p>
                <span className="date">February 21, 2018</span>
              </p>
            </div>
            <div className="contactBlog">
              <p>
                Traveling – It Leaves You Speechless, Then Turns You Into A
                Storyteller
              </p>
              <p>
                <span className="date">February 21, 2018</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 col-10 mx-auto">
          <div className="contactsiteHeader">
            <h1>Twitter Feed</h1>
            <div className="contactTwiterBlog">
              <p>
                @kingedeborg @Google Hey, Thanks for writing in! Please submit a
                ticket on our helpcenter, and our agents will be…
                https://t.co/EaiWOIGEmo
              </p>
            </div>
            <div className="contactTwiterBlog">
              <p>
                @kingedeborg @Google Hey, Thanks for writing in! Please submit a
                ticket on our helpcenter, and our agents will be…
                https://t.co/EaiWOIGEmo
              </p>
            </div>
            <div className="contactTwiterBlog">
              <p>
                @kingedeborg @Google Hey, Thanks for writing in! Please submit a
                ticket on our helpcenter, and our agents will be…
                https://t.co/EaiWOIGEmo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
