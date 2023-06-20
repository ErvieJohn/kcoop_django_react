import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";





export default function K_Ganap() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const navigate = useNavigate();

  const titlePage = "K - Ganapan";

  var [Data, setData] = useState([]);

  const getStoriesData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getTBL_Stories/`;

    var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      //var pageTitle = "National Capital Region";
      var DataBody = {Stories_name: titlePage};
      //console.log("DATA BODY", JSON.stringify(DataBody));
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(DataBody)
      })
        .then(response => response.json())
        .then(response => {
          Data = response;
          setData(Data);
          console.log("DATA: ", Data);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  

  useEffect(() => {
    getStoriesData();
    //console.log(announcementsData);
  }, []);


  return (
    <div className="content-wrapper" style={{ minHeight: 705 }}>
      <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div
            className="box box-default"
            style={{ left: "-5%", top: "-17px", width: "110%" }}
          >
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{ width: "98%", marginLeft: "1%" }}>
                {/* /.col */}
                <div className="col-md-12">
                  <h2>
                    <b>
                      <FontAwesomeIcon icon={faNewspaper} />
                      &nbsp;{titlePage}
                    </b>
                  </h2>
                  <br />
                  <div
                    className="box box-warning "
                    style={{ marginTop: "-1.5%" }}
                  />

                  {/** */}
                  {Data.map((content) => (
                    <table style={{ marginTop: "2%" }}>
                      <tbody>
                        <tr>
                          <td>
                            <div className="col-md-6">
                              <img
                                src={"/static/media/" + content.Stories_image}
                                width="100%"
                                alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative"
                              />
                            </div>
                            <div className="col-md-6">
                              <h4>
                                <a
                                  style={{
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent",
                                    WebkitUserSelect: "none",
                                    KhtmlUserSelect: "none",
                                    MozUserSelect: "none",
                                    msUserSelect: "none",
                                    userSelect: "none",
                                  }}
                                  onClick={() => {
                                    navigate("/k_ganap/" + content.Stories_id, {
                                      state: {
                                        data: Data,
                                        selectedNumber: content.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                  <b>{content.Stories_title}</b>
                                </a>
                              </h4>
                              <h6>
                                <b>
                                  <i>{content.Stories_date}</i>
                                </b>
                              </h6>
                              <p
                                style={{
                                  marginLeft: "0%",
                                  fontSize: "small",
                                }}
                              />
                              <div
                                style={{
                                  textAlign: "justify",
                                  whiteSpace: "pre-line",
                                }}
                              >
                                <p
                                  style={{
                                    textIndent: "30px",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      content.Stories_content.substring(0, 200) +
                                      `...`,
                                  }}
                                ></p>
                                {/* 
                                <Link
                                  to={{
                                    pathname: "/k_ganap_readmore",
                                    state: { data: "erviepogi" },
                                  }}
                                >
                                  Read More
                                </Link>
*/}

                                <a
                                  style={{
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent",
                                    WebkitUserSelect: "none",
                                    KhtmlUserSelect: "none",
                                    MozUserSelect: "none",
                                    msUserSelect: "none",
                                    userSelect: "none",
                                  }}
                                  onClick={() => {
                                    navigate("/k_ganap/" + content.Stories_id, {
                                      state: {
                                        data: Data,
                                        selectedNumber: content.Stories_id,
                                      },
                                    });
                                  }}
                                >
                                  Read more
                                </a>
                              </div>

                              {/*   
                              <p
                                style={{
                                  //whiteSpace: "pre-line",
                                  textAlign: "justify",
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {`\xa0\xa0\xa0\xa0\xa0`}
                                {content.decription}
                                {`...`}
                                <br />
                                <a href={content.urlLink}>Read more</a>
                              </p>
                  */}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}

                  {/** */}
                  {/* /. box */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </section>
            {/* ariel */}
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
      {/* /.container */}
    </div>
  );
}
