import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '../config/config';



const announcementsData = [
  {
    number: 1,
    title: "Go Bring Me",
    publishedDate: "Jul-26-2022",
    ImgSrc: "/static/media/GBM-Ads.png",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=19",
    description: "",
  },
  {
    number: 2,
    title: "K - KALUSUGAN W3",
    publishedDate: "Jul-22-2022",
    ImgSrc: "/static/media/Kalusugan%203_June2022.png",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=18",
    description: "",
  },
  {
    number: 3,
    title: "K - BAHAY W3",
    publishedDate: "Jul-21-2022",
    ImgSrc: "/static/media/K-Bahay%20W3_2022.png",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=17",
    description: "",
  },
  {
    number: 4,
    title: "K - BAHAY W2",
    publishedDate: "Jul-20-2022",
    ImgSrc: "/static/media/K-Bahay%20W2_2022.png",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=16",
    description: "",
  },
  {
    number: 5,
    title: "K - BAHAY W1",
    publishedDate: "Jul-19-2022",
    ImgSrc: "/static/media/K-Bahay%20W1_2022.png",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=15",
    description: "",
  },
  {
    number: 6,
    title: "K - YAKAP",
    publishedDate: "Jul-18-2022",
    ImgSrc: "/static/media/K-Yakap.png",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=14",
    description: "",
  },
  {
    number: 7,
    title: "2022 Annual Representative Assembly",
    publishedDate: "Mar-25-2022",
    ImgSrc: "/static/media/2022_RA.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=13",
    description: "",
  },
  {
    number: 8,
    title: "K - EDUKASYON W1",
    publishedDate: "Sep-20-2021",
    ImgSrc: "/static/media/K-EdukasyonSquareAds.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=9",
    description: "",
  },
  {
    number: 9,
    title: "Vaccine Done, Virus Gone",
    publishedDate: "Jun-11-2021",
    ImgSrc: "/static/media/VaccineDone.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=8",
    description: "",
  },
  {
    number: 10,
    title: "BARO ACT - 60 DAYS GRACE PERIOD",
    publishedDate: "Oct-26-2020",
    ImgSrc: "/static/media/BARO%20ANNOUNCEMENT.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=4",
    description: "",
  },
  {
    number: 11,
    title: "MENSAHE SA ATING MGA MIYEMBRO :",
    publishedDate: "May-01-2020",
    ImgSrc: "/static/media/no_img.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=1",
    description: `Mahal naming mga miyembro:

    Unti-unti ng niluluwagan ng pamahalaan ang ating mga pagkilos. Kasama sana nito ang panunumbalik ng sigla ng ating ekonomiya at mga hanapbuhay.
    
    Dahil sa dalawang buwan tayong nahinto malaki ang naging epekto nito. Marami sa ating mga miyembro ang nahinto sa pagnenegosyo. Marahil sa ngayon ay nakausap na kayo ng inyong mga SO o mga managers. Nag-ayos tayo ng mga patakaran upang makapag-adjust tayo sa mga pangyayari.
    
    Kahit na nagluwag sa paghihigpit hindi nangangahulugan na wala na ang CoVid at ang peligro nito. Kailangan pa rin tayong mag-ingat. Iiwasan muna natin ang mga malalaking pagpupulong. Kailangan tayong gumamit ng iba't ibang paraan ng pagpaparating ng pera sa inyo at sa ating kooperatiba. Kailangan din natin na ingatan ang pondo ng K-Coop para patuloy itong makapaglingkod sa inyo.
    
    Nasa mga kamay ninyo ang kalusugan ng bawa't isa, pamilya niyo, kasama sa sentro, mga SO at pamilya din nila. Patuloy tayong mag-iingat at sumunod sa mga paalala.
    
    Pagtulungan po natin na makaahon ang bawa't miyembro ng K-Coop. Ipagdasal natin ang isa't isa at ang K-Coop.`,
  },
  {
    number: 12,
    title: "Loan Moratorium Extension , April 12, 2020 to April 30, 2020",
    publishedDate: "Apr-12-2020",
    ImgSrc: "/static/media/moratorium_extension.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=7",
    description: "",
  },
  {
    number: 13,
    title: "Loan Moratorium from March 17, 2020 to April 12, 2020",
    publishedDate: "Mar-17-2020",
    ImgSrc: "/static/media/WALANG%20HULOG.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=6",
    description: "",
  },
  {
    number: 14,
    title: "K-COOP 3rd Annual R.A on March 27, 2020 is postponed",
    publishedDate: "Mar-12-2020",
    ImgSrc: "/static/media/Announcement%20of%20Post-Poned.jpg",
    urlLink: "https://kcoop.org.ph/announcements.php?aId=5",
    description: "",
  },
];

export default function Announcements() {
  const navigate = useNavigate();

  const [announcementsData, setAnnouncementsData] = useState([]);

  const getAnnouncementsData = () => {
    var InsertAPIURL = `http://127.0.0.1:8000/getAnnouncementsData/?format=json`;

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      fetch(InsertAPIURL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(response => {
          //console.log("response: ", response);

          setAnnouncementsData(response);
          //console.log("DATA: ", announcementsData[0].title);
        }).catch(error => {
          console.log(`getting data error from api url ${error}`)});
  }

  

  useEffect(() => {
    getAnnouncementsData();
  }, []);

  return (
    <div className="content-wrapper" style={{minHeight: '427px'}}>
        <div className="container">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="box box-default" style={{left: '-5%', top: '-17px', width: '110%'}}>
            {/* ariel  */}
            <section className="content">
              <div className="row" style={{width: '98%', marginLeft: '1%'}}>
                {/* /.col */}
                <div className="col-md-12">
                  <h2><b>
                     <FontAwesomeIcon icon={faNewspaper}/>
                     &nbsp;Announcements</b></h2>
                  <br />
                <div className="box box-warning " style={{marginTop: '-1.5%'}} />
                {announcementsData.map((content) => (
                  <table style={{marginTop: '2%'}}>
                    <tbody>
                      <tr>
                        <td>
                          <div className="col-md-6"><img src={"/static/media/" + content.ImgSrc} width="100%" alt="Kabuhayan Sa Ganap Na Kasarinlan Credit And Savings Cooperative" /></div>
                          <div className="col-md-6">
                            <h4><a 
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
                                    navigate("/announcements/" + content.announcements_id, {
                                      state: {
                                        data: announcementsData,
                                        selectedNumber: content.announcements_id,
                                      },
                                    });
                                  }}
                            ><b>{content.title}</b></a></h4>
                            <h6><b><i>{content.publishedDate}</i></b></h6>


                            {/*<p style={{marginLeft: '0%', fontSize: 'small'}}><a href="/go_bring_me">View full details ....</a></p>*/}
                            
                            <div
                                style={{
                                  textAlign: "justify",
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {(content.description.length > 0) ? (<p
                                  style={{
                                    textIndent: "30px",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                    
                                      content.description.substring(0, 200) +
                                      `...`,
                                  }}
                                ></p>) : (<></>)}
                                
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
                                    navigate("/announcements/" + content.announcements_id, {
                                      state: {
                                        data: announcementsData,
                                        selectedNumber: content.announcements_id,
                                      },
                                    });
                                  }}
                                >
                                  View full details
                                </a>
                              </div>

                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
                  
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
    </div>
  )
}
