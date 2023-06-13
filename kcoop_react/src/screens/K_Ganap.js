import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";

const K_GanapContent = [
  {
    number: 1,
    title: "GOBRINGME MOA Signing",
    imgSrc: "/static/media/GOBRINGME MOA Signing.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=23&sId=0",
    publishedDate: "Aug-01-2022",
    description: `Matagumpay na naidaos ang MOA Signing sa pagitan ng \
    ating K-Coop at ng GoBringMe (MIRO FOODS OPC) na ginanap kahapon ika-13
    
    \xa0\xa0\xa0\xa0\xa0Ang GoBringMe ay isang logistic service mobile app, isang online \
    platform kung saan ang mga miyembro ng K-Coop ay maaaring makapagtinda \
    ng kanilang produkto at serbisyo sa kanilang customers via pickup o \
    delivery ng ating mga K-Coop member-riders. Kasalukuyan itong pina-pilot sa \
    Tungko Satellite Office at maaaring gamitin ng mga taga Quezon City, \
    Caloocan at San Jose Del Monte Bulacan.

    \xa0\xa0\xa0\xa0\xa0Ang mga lumagda sa nasabing MOA ay sina Chairperson \
    Martiniana Mancio, General Manager Dexter Flores para sa K-Coop at si G. \
    Romeo Santos Jr at Gng. Evic Santos para sa MIRO FOODS OPC. \
    Kasama din sa dumalo sina AGM-Operations Angeline Bataller, Cooperative \
    Affairs Manager Hazel Del Bando, BDS Manager Camille Valasco at mga \
    managers sa Tungko na sina CM Anthony Serrano at SOM Nickolone Villanueva.

    \xa0\xa0\xa0\xa0\xa0Bahagi ito ng ating Business Development Services at pagpapalakas ng \
    Digitalization. Kung kasama kayo sa mga lugar na aming nabanggit sa \
    pilot---makiisa at makibahagi na! Tuloy-tuloy ang ating pagbibigay ng \ 
    serbisyong may sinop at sigla! \
    Level up sa negosyo ni Nanay, dagdag kita pa sa mga riders.`,
  },
  {
    number: 2,
    title: "PFCCO-NCR 28th Annual General Assembly Meeting",
    imgSrc: "/static/media/PFCCO-NCR 28th Annual General Assembly Meeting.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=24&sId=0",
    publishedDate: "Jul-29-2022",
    description: `Dumalo bilang kinatawan ng K-COOP ang ating Chairperson na si Gng. Martiniana Mancio at \
    ating General Manager na si G. Dexter Flores sa PFCCO-NCR 28th Annual General Assembly Meeting, Election \
    & Educational Forum sa Newtown Plaza Hotel, Baguio City na ginanap noong June 24-26, 2022. Kasama nila \
    sa mga litrato sina PFCCO-NCR Training Officer Gng. Malou Cabuntas, General Manager G. Eduardo Bato at \
    CDA ASEC Vidal Villanueva III.

    \xa0\xa0\xa0\xa0\xa0Nakilahok, natuto, at nakiisa tayo kasama ang ibang kooperatiba na miyembro ng PFCCO-NCR. Patunay ng \
    pagpapahalaga ng K-COOP sa prinsipyo ng kooperatibismo na "Cooperation among Cooperatives" at pagiging \
    kaisa sa kilusan ng kooperatibismo sa ating bayan.
    Padayon Kooperatiba!
    Mabuhay ang Kooperatibismo!`,
  },
  {
    number: 3,
    title: "ALASKABUHAYAN Program",
    imgSrc: "/static/media/ALASKABUHAYAN Program.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=25&sId=0",
    publishedDate: "Jul-29-2022",
    description: `Masayang nakilahok ang 11 miyembro ng K-COOP mula sa Tandang Sora SATO sa ginanap na ALASKABUHAYAN \
    Program ngayong June 27, 2022 sa Brgy. 35 Caloocan City kasama sina Sector\
    Manager Eduardo Talavera, Cluster Manager Raian Capili, at Satellite Office Manager Elvin Teves.

    \xa0\xa0\xa0\xa0\xa0Bukod sa dagdag kaalaman sa nutrisyon at kabuhayan, nakatanggap din ang mga dumalong miyembro\
    ng Starter Kit mula sa ALASKA.\
    Nagpapasalamat po kami sa Caloocan Cooperative Development Council at sa Alaskabuhayan for Livelihood sa\
    kanilang imbitasyon.
    
    Aktibong pakikilahok at tuloy-tuloy na pagkatuto,
    Yan ang Tatak K-COOP!`,
  },
  {
    number: 4,
    title: "SHARE and PROTECT Project with Pureit Ph Collins MOA Signing",
    imgSrc:
      "/static/media/MOASigning_SHARE and PROTECT Project with Pureit Ph Collins.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=21&sId=0",
    publishedDate: "Jul-28-2022",
    description: `Matagumpay na naisagawa ngayong araw ang MOA Signing ng K-Coop at ng Pureit Ph Collins para sa isang bagong proyekto, ang
    "Share and Protect Project".
    \xa0\xa0\xa0\xa0\xa0Layon ng proyektong ito na makatulong at mapalaganap ang WASH (Water, Sanitation,and Hygiene) sa\
    matutukoy na mga benepisyaryong komunidad.`,
  },
  {
    number: 5,
    title: "2022 ONBOARDING",
    imgSrc: "/static/media/2022 ONBOARDING.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=22&sId=0",
    publishedDate: "Jul-28-2022",
    description: `Ang taunang Onboarding ay mahalagang aktibidad ng K-COOP bilang paghahanda sa mga bagong lider ng kooperatiba.\
    Parte na ito ng ating kultura. Sabi nga sa ating guiding principles na MARCELO, "Learning Together".\
    Sama-samang natututo at nagkakakilanlan ang mga opisyal mula sa iba't-ibang SATO. Naglalaan ng oras ang bawat isa upang\
    makapaghanda, matuto at aktibong makilahok.

    \xa0\xa0\xa0\xa0\xa0Ngayong taon ito ang kauna-unahang face-to-face activity ng K-COOP mula noong tumama ang pandemya taong\
    2020 at kitang-kita ang pagkasabik ng bawat isa. Nagtapos ang session ng may baong\
    kaalaman at masasayang ngiti ang mga nagsidalo.`,
  },
  {
    number: 6,
    title: "4th Annual Representative Assembly",
    imgSrc: "/static/media/R.A.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=15&sId=0",
    publishedDate: "Mar-27-2021",
    description: `March 16, 2020 nang ipatupad ng pamahalaan ang Community Quarantine sa buong Luzon dahil sa mabilis na pagkalat ng \
    COVID-19 virus sa ating bansa. Kaakibat nito ang pagpapatigil at pagbawal sa pagdaos ng mga malaking pagtitipon dahil isa ito sa \
    nakakapagpabilis ng pagkalat ng virus. Bilang pagsunod at pag-iingat, agad na nagdeklara ang ating tanggapan ng pagpapaliban \
    (postponement) ng pagdaraos ng ating 3rd Representative Assembly na dapat sanang gaganapin noong ika-28 ng Marso 2021 sa SM Skydome \
    na dadaluhan ng humigit-kumulang 300 na miyembro at empleyado.

    \xa0\xa0\xa0\xa0\xa0Matapos ang isang taon, may pandemya pa ding kinakaharap ang mundo, at tulad ng ibang organisasyon na nagsusumikap na  manatiling \
    buhay sa gitna ng krisis, tinanggap natin ang tinatawag na “New Normal”. Kasabay nito, ang CDA—ang ahensya na sumasaklaw sa mga \
    kooperatiba sa bansa ay naglabas ng memorandum circulars kaugnay ng pagdaos ng mga Asembleya at Eleksyon ng mga opisyal. Ang mga \
    kooperatiba ay binigyan ng giya kung sakaling nais nilang ipagpaliban o ipagpatuloy ang asembleya para sa taong 2021.  At alinman \
    ang piliin ng kooperatiba, may malinaw na panuntunan na inilabas ang nasabing ahensya.

    \xa0\xa0\xa0\xa0\xa0Nagdesisyon ang Lupon ng mga Tagapamahala (Board of Directors) ng K-Coop na ipagpatuloy ang ika-apat na Asembleya ng mga Kinatawan \
    (Representative Assembly) at gaganapin ito via video-conferencing. Nagplano at naghanda tayo kasabay ng pagsasaalang-alang sa mga \
    panuntunan ng CDA. March 27, 2020 nang ginanap ang K-Coop 4th Annual Representative Assembly sa pamamagitan ng Zoom video-conferencing. \
    Sumunod tayo sa tinukoy ng pamahalaan na porsyento ng bilang ng maaring nasa iisang lugar, safety protocols, at nagtalaga din ng mga \
    magsisiguro na ito ay nasusunod sa Satellite Office at sa Head Office. Bumuo din ng Technical Team na masinsing magpapatakbo ng buong \
    programa katuwang ang mga Managers na nasa mga Satellite Offices na siya namang magsisiguro na napapanood at nadidinig ng malinaw ng mga \
    kinatawan ang programa kahit virtual ito. Ito rin ay naka-livestream sa facebook page ng K-Coop (Insert link). Ang nagpadaloy ng Asembleya \
    ay ang Chairperson ng K-Coop na si Gng. Martiniana G. Mancio, nag-ulat ng mga naisagawa ng taong 2020 si Assistant General Manager Dexter \
    Flores, at ang mga plano at thrust para sa taong 2021 ay tinalakay naman ni General Manager Maria Anna de Rosas-Ignacio. Dumalo din ang \
    General Manager ng PFCCO-NCR na si G. Eduardo Bato upang magbigay ng mensahe ng federation kung saan tayo ay miyembro.

    \xa0\xa0\xa0\xa0\xa0Nasubok din ang paggamit ng K-Coop Online Electronic Voting System, isang system na binuo ng ating MIS (Management Information Services) \
    unit na unang ginamit ng 348 na kinatawan noong 2019 2nd Representative Assembly sa SM Skydome. Nakabantay din ang Election Committee pati \
    ang Audit Committee kasama ng IAS unit (Internal Audit Services) sa pagsisiguro na maayos at matiwasay ang daloy ng eleksyon mula sa mga \
    SATO hanggang sa consolidation ng mga boto sa Head Office.

    \xa0\xa0\xa0\xa0\xa0Taos-pusong pasasalamat ang ipinapahatid sa lahat ng nag-organisa at nakilahok. Sa pagtutulungan at pagkakaisa, sa kabila man ng kinakaharap \
    na mga pangamba na dulot ng pandemya at hamon na hatid ng pagsasagawa ng online events matagumpay nating naidaos ang K-Coop 4th Annual \
    Representative Assembly.`,
  },
  {
    number: 7,
    title: "BoD and Coordinators YEP 2019",
    imgSrc: "/static/media/YEP 1682x600.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=12&sId=0",
    publishedDate: "Jan-02-2020",
    description: `Muling nagsama-sama sa isang masayang selebrasyon ang Board of Directors at Satellite Office Coordinators ng K-COOP kasama ng Steering \
    Committee bilang paggunita ng kapaskuhan at ipagdiwang ang mga tagumpay ng nagdaang taon.

    \xa0\xa0\xa0\xa0\xa0Naging aktibo, nakisama, at nakisaya, ang lahat sa mga palaro na inihanda. Dahil panahon ng pagbibigayan, nagkaroon din ng pagpapalitan \
    ang bawat isa ng regalo.

    \xa0\xa0\xa0\xa0\xa0Matapos ang mga kasiyahan, nagsalo-salo ang lahat habang tumutugtog ang Elite Force Band. Hindi lamang nabusog sa pagkain ang mga dumalo, \
    kundi nabusog rin sa kwentuhan, kantahan, sayawan at tawanan sa muling pagsasama-sama.`,
  },
  {
    number: 8,
    title: "Pagbisita ng mga Estudyante mula sa Chuo University, Japan",
    imgSrc: "/static/media/Chou University 1682x600.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=11&sId=0",
    publishedDate: "Aug-30-2019",
    description: `Tayo ay binisita ng mga estudyante ng Chuo University mula sa bansang Japan. Ang grupo ay binubuo ng mga mag-aaral ng Microfinance at ng \
    kanilang propesor. Isa ang K-Coop sa napili ng grupo upang mas lumalim pa ang kanilang pag-unawa sa stratehiyang Microfinance.

    \xa0\xa0\xa0\xa0\xa0Nagtungo ang grupo sa Satellite Offices ng Montalban at RHS. Sila ay sumama rin sa mga sentro kasama ang mga Socio-Economic Officers, \
    malugod silang nakinig at nakipagkwentuhan sa mga Nanay.

    \xa0\xa0\xa0\xa0\xa0Nung hapon ay nagtungo naman sila sa Head Office, doon ay nagkaroon ng bahaginan kasama ang ating mga kinatawan at isang miyembro mula sa \
    Satellite Office ng Lagro, na si Jhonnie Quebada isa sa pinakabatang miyembro ng KCoop.

    \xa0\xa0\xa0\xa0\xa0Isa rin sa mga dumalo sa pulong ay ang mga kinatawan mula sa Childhope Philippines Foundation, Inc. (Tag ChildHope kung pwede) Ang Child \
    Hope ay isang organisasyon na naglalayon na magbigay ng pagkakataon sa mga batang nasa lansangan at kanilang pamilya na magkaroon ng mabuti at maayos na \
    hinaharap sa pamamagitan ng pagbibigay suporta sa pag-aaral at pag-unlad sa iba't-ibang aspeto ng kanilang buhay.

    \xa0\xa0\xa0\xa0\xa0Ang pagbisitang nabanggit ay ginanap noong ika-08 ng Agosto taong kasalukuyan.

    \xa0\xa0\xa0\xa0\xa0Nasiyahan ang ating mga bisita sa ating pagtanggap at sila ay umuwi na punong-puno ng kaalaman.`,
  },
  {
    number: 9,
    title:
      "Ika-13 anibersaryo ng KASAGANA-KA Mutual Benefit Association (KMBA)",
    imgSrc: "/static/media/kmba.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=6&sId=0",
    publishedDate: "May-31-2019",
    description: `<em>“Pagyamanin ang sariling atin!”</em>
    \xa0\xa0\xa0\xa0\xa0Yan ang tema ng pagdiriwang ng ika-13 anibersaryo ng KASAGANA-KA Mutual Benefit Association (KMBA) noong 31 Mayo 2019. Binuksan ang \
    selebrasyon sa isang misa para basbasan ang bagong tahanan ng KASAGANA-KA Synergizing Organizations (KSO) sa Barangay Pinyahan, Quezon \
    City. Pangunahin sa mga nagsipagdalo ang mga miyembro ng KMBA, ang bumubuo ng KMBA Board of Trustees at Board of Advisers, at ang mga \
    Area Coordinators. Nakibahagi rin sa okasyon ang pamunuan ng ating KASAGANA-KA Credit at Savings Cooperative (K-Coop) at KASAGANA-KA \
    Development Center, Inc. (KDCI).

    \xa0\xa0\xa0\xa0\xa0Kasunod ng misa, idinaos ang taunang pangkalahatang pulong ng mga miyembro ng KMBA. Dito ipinakilala ang mga bagong mamumuno ng KMBA \
    bilang Board of Trustees. Nanumpa sila sa kanilang tungkulin sa parehong araw.

    \xa0\xa0\xa0\xa0\xa0Sa pagpapatuloy ng selebrasyon, isang espesyal na video presentation ang inihanda ng KMBA bilang balik-tanaw sa tagumpay ng nakaraang \
    taon at pagtawid sa hinaharap na puno ng pag-asa. May mga pampasiglang bilang rin ang ilan sa mga miyembro ng KMBA at ang mga empleyado \
    ng KSO. Isang matingkad na bahagi ng programa ang gawad-pagkilala kay Gng. Maria Anna de Rosas-Ignacio (kasalukuyang K-Coop General Manager \
    at miyembro ng KMBA Board of Advisers) bilang pasasalamat sa maraming taon ng tapat na paglilingkod. Inihandog naman kina \
    Gng. Wenifreda F. Rodriguez at Gng. Leticia T. Rodriquez ang titulong Board Member Emeritus. Sila ang mga bumuo ng unang Board of Trustees ng \
    KMBA at patuloy na gumagabay sa samahan bilang aktibong miyembro at bahagi ng Board of Advisers nito.

    \xa0\xa0\xa0\xa0\xa0Nakisaya rin sa pagdiriwang ang mga kinatawan mula sa partner-organizations ng KMBA: Microinsurance Association ng Pilipinas (MiMAP), \
    Jaime V. Ongpin Foundation, Inc. (JVOFI), Kooperatiba alyansa para sa mga tumutugon gawain Mutual Benefit Association, Inc. (CARE-MBA), \
    BDO Roxas, Cruz, Tagle & Company, Partnership of Philippine Support Service Agencies Inc. (PHILSSA), at Tomeworks Corporation. Ilan lamang \
    sila sa mga naging katuwang rin ng KMBA sa pag-abot sa maraming tagumpay sa mga nakalipas na taon.

    \xa0\xa0\xa0\xa0\xa0Pagbati para sa matagumpay na selebrasyon ng ika-13 na Anibersayo ng KMBA. Patuloy nating “pagyamanin ang sariling atin.”`,
  },
  {
    number: 10,
    title: "Representative Assembly 2019",
    imgSrc: "/static/media/news.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=1&sId=0",
    publishedDate: "Mar-23-2019",
    description: `Sa \
    pagtutulungan at pagkakaisa ng bawat isa sa \
    organisasyon, matagumpay na idinaos ng ating \
    <em>KASAGANA-KA Credit and Savings Cooperative \
    ang Second Representative Assembly</em>, na \
    ginanap noong ika-23 ng Marso 2019 sa Skydome, \
    <em>SM City</em>
    
    \xa0\xa0\xa0\xa0\xa0Ito ay dinaluhan ng mahigit tatlong daan na mga napiling Satellite Representatives na mula sa apat na Sector ng kooperatiba. Walumpu’t \
    siyam (89) mula sa East Sector, Pitumpu’t walo (78) sa Central Sector, walumpu’t lima (85) naman sa North Sector at limampu’t walo (58) \
    mula sa South Sector na may kabuuang bilang na tatlong daan at sampu (310) o 89% ng kabuuang bilang ng Satellite Represenatives ang dumalo, \
    nakisaya at nakiisa sa nasabing okasyon.

    \xa0\xa0\xa0\xa0\xa0Si Gng. Martiniana G. Mancio, kasalukuyang Chairperson of the Board ng KCoop ang nanguna at nagbigay ng makabuluhang pagbati sa kasapian. \
    Ito ay sinundan naman ni Gng. Rachel Volcan, sampung taon nang miyembro ng organisasyon mula sa Bagong Silang at kasalukuyang \
    Ethics Committee Chairperson ng ating kooperatiba. Siya ay nagbahagi ng kanyang kwento patungkol sa kung paano nakatulong ang kooperatiba \
    sa pag-aaral ng kanyang mga anak at sa kanyang buong pamilya. Ibinahagi na rin niya ang kanyang kagalakan na dahil sa kooperatiba ay marami \
    siyang nakilala at lumawak ang kanyang karanasan bilang isang leader. Nagbigay rin ng kwento ng pag-unlad ang isa pang Nanay mula naman sa \
    Sapang Palay na si Gng. Raquel Jose na kasalukyan ay labing isang taon nang miyembro ng kooperatiba. Siya ay nagbigay ng mensahe sa kasapian \
    kung paano lumago ang kanyang negosyo sa tulong ng ating kooperatiba.

    \xa0\xa0\xa0\xa0\xa0Tayo ay binisita rin ng kagalang-galang na Senator Paolo Benigno “BAM” Aquino IV. Hindi pa man buo ang ating kooperatiba, si Sen. Bam Aquino ay \
    kasama at isa sa mga katuwang natin sa pag-unlad ng organisasyon. Nagbahagi siya ng kanyang kahusayan bilang isang lingkod-bayan at \
    nagbigay-inspirasyon sa buong kasapian.

    \xa0\xa0\xa0\xa0\xa0Pinangunahan naman ni Sector Manager Gener Guinto ang pagpapaliwanag tungkol sa magiging daloy ng botohan. Naging madali na ang naganap na \
    botohan sa pagpili ng bagong mga Direktor dahil sa kauna-unahangg pagkakataon tayo ay gumamit na ng Automated Voting System.

    \xa0\xa0\xa0\xa0\xa0Nagpatuloy ang daloy ng programa sa Business Meeting matapos ang botohan. Isa-isang inilatag ang katitikan ng pulong sa nagdaang unang \
    assembleya noong nakaarang taon at mga paksa na kakailanganin ng pagsang-ayon sa pamamagitan ng Representative Assembly. Ibinihagi ng ating \
    General Manager na si Gng. Maria Anna Ignacio ang mga ulat at mga accomplishment sa nakalipas na taong 2018 kasama na rin magiging plano sa taong \
    2019. Samantala, pinangunahan naman ni G. Jaime Varela, Treasurer ng KCoop ang mga ulat pinansiya. Sumunod nito ay binigyan ng pagkilala at \
    pasasalamat sa panunungkulan ang mga BOD na nasipagtapos ng kanilang termino. At sa pagtatapos ng Business Meeting ay inanunsyo na ang pangalan \
    ng mga nanalong Kandidato. Sila ay sina, Gng. Martiniana G. Mancio mula sa RHS na nakakuha pinakamataas na boto na may bilang na 252, sumunod \
    ay si Gng. Jenny F. Navarro mula naman sa Masinag na nakakuha ng 167 na boto at mula naman sa Norzagaray na si Gng. Mary Grace L. Calayag may \
    106 na boto.

    \xa0\xa0\xa0\xa0\xa0Para sa huling bahagi ng Representative Assembly ay nakaroon ng Special Meeting ang Board of Directors kasama ng bagong halal na mga Direktor, \
    kung saan nagkaroon ng botohan ang Board n kung sino ang magiging Chairperson at Vice Chairperson, at pagtatalaga ng Cooperative 
    Secretary at Treasurer.

    \xa0\xa0\xa0\xa0\xa0Maagang natapos ang pulong ng Representative Assembly kasunod ng maayos at matagumpay na Automated Voting System at sa pagtutulungan \
    at pagkakaisa ng lahat.`,
  },
];

export default function K_Ganap() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const navigate = useNavigate();

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
                      &nbsp;K - Ganapan
                    </b>
                  </h2>
                  <br />
                  <div
                    className="box box-warning "
                    style={{ marginTop: "-1.5%" }}
                  />

                  {/** */}
                  {K_GanapContent.map((content) => (
                    <table style={{ marginTop: "2%" }}>
                      <tbody>
                        <tr>
                          <td>
                            <div className="col-md-6">
                              <img
                                src={content.imgSrc}
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
                                    navigate("/k_ganap_readmore", {
                                      state: {
                                        data: K_GanapContent,
                                        selectedNumber: content.number,
                                      },
                                    });
                                  }}
                                >
                                  <b>{content.title}</b>
                                </a>
                              </h4>
                              <h6>
                                <b>
                                  <i>{content.publishedDate}</i>
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
                                      content.description.substring(0, 200) +
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
                                    navigate("/k_ganap_readmore", {
                                      state: {
                                        data: K_GanapContent,
                                        selectedNumber: content.number,
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
