import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";

const Kwentong_KContent = [
  {
    number: 1,
    title: "Kwentong K ni Nanay Hilyn Tambalong",
    imgSrc: "/static/media/Hilyn%20Tambalong-Meycauayan-Website.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=20&sId=1",
    publishedDate: "Sep-20-2021",
    description: `Si Nanay Hilyn Tambalong mula sa Satellite Office ng Meycauayan ay limang taon nang miyembro ng K-Coop. Pagtitinda ng Yema ang paumpisang negosyo niya ng sumali siya sa K-Coop. Si Nanay Hilyn mismo ang gumagawa ng Yema na kanyang pinapadala sa Malis, Guiguinto, Bulacan at nagtitinda rin siya sa mga nais bumili na mga kapit-bahay. Malaki ang naging tulong ng pag-uumpisa niya ng negosyong ito sa kanilang pamilya dahil dito sila kumukuha ng pang gastos sa araw-araw at panustos sa pag-aaral ng kanyang mga anak. Isa si Nanay Hilyn sa mga aktibo at mabuting kasapi ng kooperatiba.

    Sa pagdating ng pandemya dumating ang hindi inaasahan na dagok sa kanyang pamilya at kabuhayan. Nawalan ng trabaho ang kanyang asawa na dating nagta-trabaho sa pagawaan ng EQ Diaper bilang isang service driver. Humina din ang kita sa paggawa ng yema dahil sa mga nagsarang mga tindahan kaya nahirapan siya sa kanyang hulog linggo-linggo. Sa panahon na ito napatunayan niya ang malasakit ng K-Coop sa mga miyembro nito dahil nagkaroon ito ng pansamantalang moratorium na nakabawas sa isipin ni Nanay Hilyn. Sinikap muli ng kanyang asawa na makahanap ng bagong trabaho, nakahanap man ay hirap pa rin dahil bilang lamang ang araw ng pasok kung saan ang sinasahod ay limitado lamang sa pang araw-araw na gastusin. Nagdulot din ito ng pansamantalang paghinto sa pag-aaral ng kanyang anak.

    Muling nagbalik operasyon ang K-Coop at may bagong produkto na inalok na nakatulong makapagpapagaan ng kanyang lingguhang hulog; Ito ay ang K-Sagip Loan. At dahil isang disiplinado at responsableng miyembro si Nanay Hilyn, isa siya sa mga inirekomenda na makapag-avail ng loan product na ito. Dito napaliit ang kanyang hulog kada linggo kaya naman mas sinikap pa rin niya mabangon muli ang kanyang kabuhayan at unti-unti kahit na sa maliit na pag-usad ay bumabalik na ang sigla ng kanyang negosyo.



    Lorie Joy Pelias

    Soci-Economic Officer

    Meycauayan SATO`,
  },
  {
    number: 2,
    title: "Kwentong K ni Joy Villamor",
    imgSrc: "/static/media/2nd%20Quarter_Joy%20Villamor-Meycauayan.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=18&sId=1",
    publishedDate: "Jul-02-2021",
    description: ` Taong 2014 nang maging miyembro ng K-Coop si Nanay Joy Villamor at sa pagiging disiplinado at responable napili siya maging kasalukuyang Center Chief ng kanyang sentrong kinabibilangan. Katuwang ang kanyang butihing asawa sa pagpapatakbo ng kanilang Sari-sari store.Tuloy-tuloy lamang ang kanilang pagtyatyaga sa munting negosyo na mula sa maliit na halaga ng loan para sa dagdag puhunan ay umabot na ngayon sa Php 22,000 ang kanyang K-Kabuhayan.

    Sa pagdating ng pandemya marami ang dumanas ng pagsubok, nawalan ng trabaho at humina ang mga pinagkakakitaan. Isa si Nanay Joy sa mga na apektuhan ng pandemya, humina ang dating malakas na kita ng alak dahilan sa pagpapatupad ng liqour ban at curfew na sa maagang oras ay kailangan na isara ang kanilang tindahan. Maliban sa sari-sari store ay mayroon siyang pa-rentahan ng Videoke. Ngunit dahil rin sa hindi pa maaaring pumasok ang mga estudyante dito pinatupad na ang Online Class, kaya naman naging mahigpit na rin at pinagbawal na ang mag-ingay. Malaki ang hulugan kada linggo ni Nanay Joy na umaabot sa Php 1,700 kada linggo kaya naman nahirapan siya dito.

    Sa tagal ni Nanay Joy sa K-Coop pinananatili niya ang kanyang magandang record, kaya naman siya ay lubhang nangamba nang dumating sa pagkakataon na hindi siya makapag bayad. At laking pasasamat niya sa kooperatiba dahil patuloy ito na nagsisikap na umisip ng mga bagong produkto at serbisyo na makakatulong sa mga miyembro nito sa kasalukuyang sitwasyon. Dahil tinuturing si Nanay Joy na “Members in Good Standing” o MIGS, siya ay nirekomenda na makapag-avail ng K-Sagip Loan. Mula sa Php1,700 na kanyang hulugan ay napapababa ito sa Php 917 kada linggo. At sa paglipas ng mga buwan ay unti-unti na ngang nakabangon ang kanyang negosyo.

    Dito napatunayan na ang lahat ng problema ay palaging may kaakibat na solusyon.
    
    Melanie Tabao

                                                                                                                                                                       Meycauayan Satellite Office`,
  },
  {
    number: 3,
    title: "Kwentong K ni Ruby Brizuela",
    imgSrc: "/static/media/1st%20Quarter_Ruby%20Brizuela-Paranaque.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=16&sId=1",
    publishedDate: "Mar-31-2021",
    description: `Mula sa probinsya ng Laguna namulat sa simple at mahirap na pamumuhay si Nanay Ruby Brizuela kasama ang mga magulang na parehong magsasaka na hindi tiyak ang kinikita sa araw-araw. Sa kabila ng hirap ng buhay nagpapasalamat parin dahil sa pagsisikap ng kanyang mga magulang ay nakatungtong siya ng highschool sa kanyang pag-aaral.

    Dahil sa hirap ng buhay napilitan si Nanay Ruby na lumuwas sa Maynila at nakipagsapalaran na makahanap ng trabaho ngunit hindi ito naging madali. Siya ay tumuloy sa kanyang tiyahin at tumulong sa paglalako ng mga kakanin, gulay at mga basahan. Sa hindi inaasahang pagkakataon dito niya nakilala ang kanyang naging asawa na si Tatay Nelson na noon ay nagtatrabaho sa Milex Construction Development Corporation sa Cainta, Rizal bilang driver at loader operator. Pinangarap nilang mag-asawa na bumuo ng malaking pamilya ngunit hindi ito pinagkaloob agad at sa anim (6) na taon ng kanilang pagsasama ay doon pa lamang dumating ang kanilang panganay. Pagkalipas ng tatlong (3) taon ay nasundan muli ito ngunit sa pagkalipas ng pitong (7) buwan mula ng pagkasilang ng kanilang ikalawang anak ay binawi agad dahil ito ay nagkaroon ng down syndrome. Naging masakit sa mag-asawa ang kinahinatnan ng kanilang anak ngunit buong lakas ng loob nila itong tinanggap at nagpapasalamat parin para sa kanilang panganay. Naniniwala si Nanay na isang pagpapala parin ang nangyari, mula sa paglalako ng kakanin ay nakapag tayo na sila ng sariling sari-sari store na sa kasalukuyan ay 26 years na niya itong pinapatakbo.

    Taong 2018 ay naging miyembro si Nanay Ruby ng K-Coop, siya ay nahirapan sa pagdedesisyon dahil tutol ang kanyang asawa sa pag sapi nito dahil sa pangamba sa pagtitiwala sa co-maker. Ngunit nanindigan siya at nagtiwala sa kooperatiba, limang libo ang naging una niyang loan sa K-Coop at ito ang pinagdagdag niya sa kanyang puhunan sa tindahan. Sa pagtagal niya sa kooperatiba ay nabigyan na siya ng pagkakataon na makapag loan ng iba’t-ibang produkto kagaya ng K-Edukasyon W1 na naging tulong sa pag-aaral ng kanyang anak, K-Benepisyo, K-Kalusugan at iba pa. Dito napatunayan niya na tama ang kanyang paninidigan at pagtitiwala  sa kooperatiba na siya namang pinagkasunduan na nila ng kanyang asawa. Naging aktibong kasapi si Nanay Ruby, kaya naman taong 2019 ay napili siya ng kanyang mag ka-sentro na maging Center Chief at napabilang din bilang Coordinator sa kanilang SATO.

    Hindi naging madali kay Nanay Ruby ang pagiging isang Center Chief, dito naranasan niyang maging masikap para sa kanyang mga kasama. Pagpapaliwanag at malawak na pag-intindi ang kanyang lagi sandata para sa mga kasama. Malaking hamon rin ang binigay ng pagdating ng pandemya sa kanilang sentro gayon din sa kanyang negosyo. Pasasalamat parin sa kooperatiba dahil sa konsiderasyon at hindi sapilitang paniningil. Isang malaking opurtunidad din ang pinagkatiwala sa kanya ng kooperatiba nang siya ay mapili bilang isa sa Karinderya Owner para sa Project Karinderya na sa kabila ng dinaranas ng bawat isa ay naging isa siya sa naging tulay ng pagtulong sa 20 pamilya sa loob ng 30 days.

    Pagtitiwala ang isa sa puhunan ni Nanay Ruby sa kanyang mga mga suki karamihan kasi dito ay mga nangungupahan lamang kaya may mga pagkakataon na siyang natatakbuhan ng mga ito sa kanilang utang. May mga pagkakataon na said-na-said na ang kanyang puhunan kaya nagpasasalamat siya sa K-Coop dahil naging katuwang niya ito sa pag ne-negosyo. Kasabay ng tagal niya sa pagiging miyembro ay kasabay rin ng paglago ng kanyang mga negosyo na sa kasalukuyan nakapagpatayo na ito ng sariling paupahan.

    Para kay Nanay Ruby ang mga unos at pagsubok na dumarating ay bagong opurtyunidad ng paglago. Kaya pasasalamat sa pamilya na naging katuwang at malaking pasasalmat rin sa kinabiblangan na kooperatiba, ang K-Coop.



                                                                                                                                                                                                     Jovelyn Bauat

                                                                                                                                                                                                     Parañaque Satellite Office`,
  },
  {
    number: 4,
    title: "MAY BIYAYA ANG PANDEMYA",
    imgSrc:
      "/static/media/Ate%20Anna.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=14&sId=1",
    publishedDate: "Oct-01-2020",
    description: `Dahil sa patuloy na pagkalat ng COVID-19 sa ating bansa, malaki ang naging epekto nito sa pamumuhay ng mga mamayang pilipino pagdating sa kanilang negosyo o trabaho na kung saan ito lamang ang tanging pinagkukuhanan ng kanilang pang araw-araw na pangangailangan.

    Ang pagpapatupad ng pamahalaan ng Community Quarantine o Lockdown noong Marso dahil sa patuloy na pagtaas ng bilang ng positibo sa COVID19 ay nagdulot ng pagsasara at pagtigil ng operasyon ng mga negosyo at mga kumpanya. Lubhang tinamaan ang mga mamamayang manggagawa maliban sa mga tinuturing ng pamahalaan na “essential services”. Bagaman silang mga essential services ay tinamaan din ng bahagya dahil sa limitado lamang ang bilang ng maaring pumasok, naka-No Work No Pay, at kasama pa dito ang hamon sa pagbiyahe dahil pinatigil din ang biyahe ng mga pampublikong sasakyan.

    Kabilang ang negosyong Airconditioning Services ni Martiniana Mancio o “Ate Ana” sa naapektuhan ng lockdown. Hindi ito kasama sa tinukoy na essential service ng pamahalaan kung kaya wala silang magagawa kungdi ang pansamantalang magtigil ng operasyon.

    Katuwang ni Ate Ana sa pagpapatakbo ng negosyo ang kanyang butihing asawa at ang mga tauhan na kanilang inempleyo. Dahil sa pagpapatupad ng Community Quarantine, ang mga manggagawa ni Ate Ana ay na-stranded sa kanilang lugar. Kahit mahigit tatlong (3) buwan na nakatigil ang operasyon hindi ito naging dahilan para mapabayaan ang mga empleyado. Sinikap ni Ate Ana na mabigyan ng tulong sa pamamagitan ng relief goods mula sa LGU at tulong mula sa Kasagana- ka ang kaniyang mga manggagawa. Hindi naging balakid ang pandemya para malimitahan ang kagustuhan ni Ate Ana na makatulong sa kaniyang mga tauhan.

    Maliban sa Airconditioning Services, nagtitinda din si Ate Ana ng mga estante o lagayan na maaaring gamitin sa negosyo kung ikaw ay may tindahan. Maaari itong bayaran ng cash o hulugan. Batid ni Ate Ana ang kalagayan ng mga kumuha sa kanya ng hulugan kung kaya hindi niya ito inobliga na maghulog, maaaring boluntaryo muna ang pagbabayad dahil sa kasalukuyang sitwasyon. Sa kabila ng mga pangyayaring ito hindi tumigil si Ate Ana sa paghahanap ng maaaring pagkakitaan.  Siya ay nagtinda ng manok at iba pang mga ulam na pangunahing pangangailangan ng kanyang mga naging customer.

    Sa pagpasok ng General Community Quaratine (GCQ) kung saan maaari nang magbalik operasyon ang ilang mga negosyo, balik operasyon din ang  Airconditioning Services ni Ate Ana. Ngunit sa pag-aakalang magiging maayos na muli ang kanyang negosyo ay lalo itong nahirapan dahil sa pag-aadjust sa pagsunod sa mga protocol na mula sa pamahalaan. Kailangan kumuha ng Health Certificate ang kanyang mga manggagawa, na siya rin ang sumagot sa pambayad. Mayroon namang walang bayad ngunit malaking oras ang kailangan gugulin. Dito niya napatunayan ang hirap ng pag-aadjust sa “New Normal”, ngunit ito ang tama kaya naman hangga’t maaari ay tinitiyak niyang siya ay nakakasunod.

    Labing-pitong taon nang miyembro si Ate Ana sa Kasagana-Ka, siya rin ang tumatayong center chief sa kanilang lugar. Sa kanya dumadaing ang kanyang mga kapwa miyembro na nanghihina na sa mga pangyayari, kaya naman bilang center chief o leader ay pinipili niyang maging matatag para sa kaniyang mga kasama. Binibigyan niya ang kapwa niya miyembro ng mga payo na makakapagpapalakas ng kanilang loob na magtiis at tuloy lang ang  pagsisikap at higit sa lahat tiyakin na gamitin sa tama ang kanilang pera. Malaking pasasalamat niya sa K-Coop sa moratorium na ipinatupad na nakatulong sa kanila na kahit papano ay naisantabi ang pag-aalala sa hulugan at nagamit ang pera sa pang-araw araw na panustos ng pamilya. Nagpapasalamat rin siya sa buong pamunuan ng K-Coop na patuloy na nag-iisip ng mga programa at pamamaraan na makakatulong sa muling pagbangon ng mga naapektuhan ang kabuhayan dahil sa COVID19.

    Panalangin na punong-puno ng pasasalamat ang naging sandigan ni Ate Ana sa pagharap sa kasalukuyan at pagtanaw sa hinaharap. Naniniwala si Ate Ana na biyaya ang lahat ng nangyayari at may tatanawin pa tayong biyaya at aral mula sa pandemya.`,
  },
  {
    number: 5,
    title: "KAPAG GUSTO MAY PARAAN",
    imgSrc: "/static/media/Ate%20Sheena%20Roque.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=13&sId=1",
    publishedDate: "Sep-30-2020",
    description: `Mahigit tatlong (3) buwan nang hindi pumapasok sa trabaho si Sheena Roque, OAS mula sa Satellite Office ng Pulilan. Ito ay dulot ng malawakang lockdown sa buong Luzon. Kasama niya sa kanilang bahay ang kanyang asawa at dalawang anak. Sa loob ng tatlong buwan ay hindi sila nakaranas ng gutom sapagkat siya ay nakakatanggap parin ng sahod mula sa K-Coop. Bukod pa roon ay nakatanggap din sila ng ayuda mula sa kanilang LGU at mapalad din na nakatanggap ang kaniyang asawa ng SAP mula sa DWSD.

    June 1, 2020, nang ideklara ng pamahalaan na ang lalawigan ng Bulacan ay sasailalim na sa General Community Quarantine kung saan may Satellite Office ang K-Coop kung kaya’t maaari na itong magbalik sa operasyon. Sa kagustuhang pumasok muli sa trabaho hinarap niya din ang mga hamon na kaakibat nito. Isa na rito ang transportasyon, bagamat GCQ limitado pa rin ang mga maaaring masakyan ayon na rin sa atas ng pamahaalan. Sa unang araw sinubukan niyang maglakad patungong  opisina ngunit hindi pa nangangalahati ay nabatid niyang nauubos na ang oras at enerhiya niya kung kaya’t hindi na siya nagtuloy. Sinubukan niyang maghanap ng ibang paraan sa tulong ng kanyang butihing asawa. Naisip nilang magbisikleta at pinalad na sila ay makabili kahit second hand. Kinabukasan ala-sais ng umaga, umalis si Sheena sa kanilang bahay gamit ang bisikleta at nakarating  siya sa opisina bago ang alas-otso ng umaga. Sinigurado niyang may dala siyang extrang damit pamalit, nagbihis, uminom ng tubig at punas ng pawis at nag-umpisa na ang araw ni Sheena sa trabaho. Pagsapit ng alas-tres ng hapon ay naghahanda na siya at kaniyang mga kasama para naman sap ag-uwi. Lulan ng kaniyang bike, tatahakin niya ang daan pauwi sa kaniyang tahanan at saktong ala-singko ay nakarating na siya rito.

    Araw-araw, dalawang oras papunta, dalawang oras pauwi makapasok lamang muli at makapagsilbi sa mga miyembro ng K-Coop. Yan ang dinanas ni Sheena sa loob ng dalawang linggo. Tinuring na lamang niyang ehersisyo ang pagba-bike. Bilang empleyado nais niyang makabawi bilang pasasalamat sa hindi pagpapabaya sa kanya ng K-Coop na sa mahigit tatlong (3) buwan na walang pasok ay hindi siya pinagkaitan ng sahod kaya may sapat na nakakain ang kanyang pamilya sa kabila man ng pandemya na dinaranas ng lahat. Ramdam ni Sheena ang malasakit ng organisasyon sa mga tao nito kaya para sa kaniya marapat lamang na ibalik ito sa pamamagitan ng pagttrabaho ng maayos at buong sipag.

    Nanghina man si Sheena sa mga nangyayari sa kapaligiran ay hindi parin niya maalis ang pag-aalala sa Satellite Office na kaniyang pinagsisilbihan. Nanghihinayang siya sa mga araw na lumipas, sa tatlong buwang walang pasok, batid niyang mahirap maka-bawi agad ng bilang ang operations, kung mahirap na noon ay mas mahirap sa ngayon lalo at limitado ang pagkilos. Ngunit kahit nahihirapan mas pinipili ni Sheena na panghawakan ang pag-asa. Humuhugot siya ng lakas sa kaniyang mga kasama sa opisina na nakikita niyang tuloy-tuloy na nagpupursigi. Alam niyang bilang OAS hindi man siya direktang nakakasalamuha sa mga miyembro tulad ng mga SO ay malaki ang ambag ng kaniyang posisyon upang maihatid ang mga programa at serbisyo ng K-Coop sa mga miyembrong nangangailangan nito lalo na sa kasalukuyang panahon. Buo ang loob ni Sheena na sa kabila ng mga hamon na dulot ng pandemya sa kaniyang personal o sa trabaho alam niyang kasama niya ang pamilya ng K-Coop at ramdam niya ang lakas at malasakit ng bawat isa.`,
  },
  {
    number: 6,
    title: "Kwentong-K ni Ate Amelia Ubanan",
    imgSrc: "/static/media/Amelia.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=10&sId=1",
    publishedDate: "Nov-28-2019",
    description: `“Katuwang sa Paglago”

    Isang masipag at mabuting may bahay; Siya si Nanay Amelia Ubanan, 57 taong gulang na kasalukuyang naninirahan sa Cainta Rizal. Dating nanirahan sa Maynila kung saan niya nakilala ang kanyang kabiyak na si Tatay Ricardo Ubanan, isang on-call mekaniko. Sila ay nagkaroon ng dalawang supling. Ang panganay ay si Arlene Ubanan-Santos na nakatapos sa kursong Social Worker at ngayon ay isang manager sa isang pribadong kumpanya at ang bunsong anak naman ay si Mark Ubanan na nakapagtapos sa kursong Nursing na ngayon ay nakatira na sa Las Vegas at doon ay nagtatrabaho bilang Nurse. Parehas na tumutulong ang kanyang mga anak sa kaniya kahit na may kanya-kanya na itong pamilya.

    Taong 2010, nang maging kasapi na ng K-Coop si Nanay Amelia. Nung una ay ayaw pa niyang sumali sapagkat maraming negatibong komento ang naririnig niya patungkol sa pamamalakad ng mga officer noon. Sa pamamagitan ng masugid panghihikayat sa kanya ng mga miyembro at sa kagustuhan niya na lumago ang kanyang inuumpisahang negosyo na Ukay-ukay ay napapayag rin siya.

    Hindi man ganun kalaki ang kanyang unang loan na Php3,000 nagsilbing dagdag puhunan pa rin ito para sa kanyang negosyo. Ngunit dahil sa mura lamang ang kanyang mga paninda na minsa’y hindi pa maibenta, siya ay nag-isip ng iba pang pwede pagkakitaan. Sa tulong din ng kanyang asawa at sa kanyang ikalawang loan ay inumpisahan nila ang negosyong buy and sell ng mga parte ng sasakyan. Sa una ay nahirapan sila ngunit nang kumite sila ay agad nilang nadama ang bunga ng kanilang mga pinagpaguran.

    Malaki ang naitulong ng Kasagana-Ka sa kanilang pamilya lalo sa kaniyang mga anak. Nakapagpatapos ng pag-aaral ang kanilang mga anak at lumago pa ang kanilang negosyo. Bumili din sila ng videoke, pandagdag kita at ito’y kanilang pinapa-rentahan. Sa una ay dalawang unit lamang hanggang sa maging 12 na ito naging in demand ito lalo na kapag may mga okasyon. Sa kasalukuyan ay mataas ang halaga ng loan ni Nanay Amelia.Nag apply rin siya ng HIIP para sa seguridad sa hinaharap. Ang laking pasasalamat ni Nanay Amelia na nakapagloan na siya para sa pagpapa-ayos ng kanilang bahay. Kwento ni Nanay Amelia na “kahit nagpapadala ang mga anak ko, nais ko parin na makapagpundar ng sariling bahay para naman sa aming mag-asawa”. Kaya kahit may edad na silang mag-asawa ay patuloy parin silang naghahanap buhay dahil ayaw nilang maging pabigat sa kanilang mga anak. Sa kasalukuyan ay may mga tauhan na din silang inempleyo.

    Hindi man umayon sa una ang kanyang naisip na negosyo ay may pumalit naman na mas maganda at mas nakatulong sa kanilang pamilya. Hindi siya sumuko at nawalan ng pag-asa kaya ngayon ay inaani na niya ang kaniyang pagtitiyaga at pagsisipag sa nakaraan.`,
  },
  {
    number: 7,
    title: "Kwentong-K ni Jhonnie Quebada",
    imgSrc: "/static/media/jhonie.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=7&sId=1",
    publishedDate: "Oct-16-2019",
    description: `Pang-anim sa sampung magkakapatid si Jhonnie, 21 taong gulang, nakatapos ng 2 nd year High School. Construction Worker ang trabaho ng kanyang Ama at maaagang binawian ng buhay ang kanyang Ina sa pagpapanganak sa kanilang bunsong kapatid. Sa pagnanais niyang makatulong sa kanyang Tatay na mag-isang nagtataguyod sa kanilang mag kakapatid, maagang namulat si Jhonnie sa hirap ng buhay. Bumibili si Jhonnie ng mga materyales na panggawa ng walis tambo sa malapit na pagawaan sa kanilang bahay, nabibili niya ito sa murang presyo at siya na mismo ang nagtatahi at gumagawa ng mga walis at pagkatapos ay inilalako niya ito sa kanilang kapit-bahay hanggang sa palengke malapit sa kanilang lugar. Kapag walang maitindang walis ay tumutulong naman siya sa pagtitinda ng gulay sa pwesto sa palengke ng kanyang tiyahin. Kung minsan naman ay tumutulong siya sa ng kanyang Kuya na isang electrician.

    Bago maging miyembro ng Kasagana-Ka napupunta ang iba niyang kita sa pagbabakarda at bulakbol, hindi umiikot ang kanyang pera at ito’y nasasayang lamang. At isang araw nalaman niya ang Kasagana-ka sa pamamagitan ng kanyang Kuya, pangalawa sa panganay na kapatid na matagal nang member ng KCoop. Malaki ang naitulong kay Jhonnie sa pagsali niya sa Kasagana-Ka dahil natuto siyang maging responsable sa paghawak ng pera. Maliban sa dagdag puhunan sa Negosyo ay nakakapag bigay siya sa kanyang mga kapatid para sa pag-aaral nito at nakakapagdagdag ng pambili sa pangangailangan sa kanilang bahay. Masaya si Jhonnie sa mga kasama nito sa kanilang sentro, dito siya nakakilala ng mga pangalawang Ina na binibigyan siya ng mga payo at mga pangaral sa buhay. Ramdam ni Jhonnie ang pagiging isang parte ng pamilya sa kanilang sentro mula sa sentro ng Sampaguita 2, Lagro Satellite Office at ito’y kinatataba ng kanyang puso.

    Maliban sa ramdam niya ang pagiging isang pamilya sa kanilang sentro nais manatili ni Jhonnie sa KCoop dahil nakikita niyang makakatulong ito sa pagtupad ng kanyang mga pangarap sa sarili at sa pamilya. Pangarap niyang mapa-ayos at mapaganda pa ang kanilang tirahan at nangangarap siya na dumating ang araw na makapagpatayo ng sariling pwesto para sa kanyang negosyo at hindi na niya na kakailanganin pang maglako.

    Sa kasalukuyan si Jhonnie ay isa sa pinaka-batang miyembro ng Kasagana-Ka, hindi naging hadlang ang kanyang murang edad para sa pag-unlad. Halimbawa lamang nito na ang kanyang sipag at tiyaga ang naging puhunan ng kanyang pag-asenso.`,
  },
  {
    number: 8,
    title: "Kwentong-K ni Ate Rachel Volcan",
    imgSrc: "/static/media/rachelvolcan.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=5&sId=1",
    publishedDate: "Aug-09-2019",
    description: `Bago maging miyembro si Ate Rachel ng KASAGANA-KA siya ay nag tatrabaho sa isang pribadong kumpanya taong 2009. Ang mga kaibigan niya ang nag impluwensiya sa kanya na sumali sa kooperatiba, maraming agam-agam noon si Ate Rachel sa kadahilanang siya’y takot mangutang. Takot sa mga bagay na maaring kahinatnan sa kanyang pagpasok sa organisasyon. Noong panahong din iyon, siya ay buntis sa Bunso niyang anak at kinailangan niyang mag resign sa trabaho. Nakilala niya si Kuya Eduardo na nagkumbinse sa kanyang sumali, isang S.O na mula sa Bagong Silang Satellite Office noong mga panahong iyon. Loading at maliit na sari-sari store ang kanyang negosyo noon. Limang-libo (5,000) ang unang utang ni Ate Rachel na kanya namang ginamit para sa kanya puhunan. Maliban sa negosyo ang isa pang dahilan ng pag sali ni Ate Rachel sa KASAGANA-KA ay ang insurance na sa halagang bente pesos ay secure na siya.

    Hirap sa pangtustos noong panahong iyon sila Ate Rachel, ang trabaho ng kanyang asawa ay tinamaan ng Global Crisis na sobrang dalang lamang ang nagiging pasok sa trabaho at tuwing sahod ay kakaunti lamang ang sinasahod. Kaya naman ang K-Eduk ang kanyang naging takbuhan sa pangbuno sa pag-aaral ng kanyang anak hanggang sa unti-unti itong makagraduate. May pagkakataon naman na nagkaron ng sakit si Ate Rachel. Nung una ito ay hindi niya iniinda, at nang lumaon ay marami na ang nakapansin na may lumalaking bukol sa kanyang leeg. Hanggang sa siya naging iritable, at hindi na niya matututukan ang kanilang negosyo. Siya ay nagpacheck-up at lumabas sa resulta na siya ay mayroong Goiter. Kasama ng pagsali niya sa KASAGANA-KA ay ang pag miyembro rin sa PhilHealth, kaya naman noong lumabas na siya ay may Goiter ito ang nakatulong sa kaniya at kaakibat din nito ang pag loan niya sa K-Kalusugan para sa mga gamot. Laking pasasalamat niya rin sa Health Dev. dahil dito natutukan na niya ang kanyang kalusugan at tuwing may check-up o kailangan ng agarang konsulta ay hindi niya kailangan na maglabas ng pera. Nabanggit rin niya na sila’y sinalanta ng Bagyo, at naka-avail ng K-Kalamidad. Nabagsakan ng puno ng kaymito ang isang parte ng kanilang bahay, pinaayos nila ito sa pamamagitan ng K-Bahay. Mahigit sampung taon na sila nakatira sa kanilang bahay at noon ay nagkaroon sila ng pagkakataon na mapaayos ang bubong na dati’y butas-butas, pina-finishing ang kanilang dingding at nagkaroon din extension ang kanilang bahay dahil lumalaki na sila sa pamilya.

    Isa ang anak ni Ate Rachel sa mga labing pito (17) na masisipag at matyagang mga shcolars na mga nagsipagtapos ng Automotive Servicing at Truck Driving noong ika-22 ng Pebrero 2019. Sila ang mga kauna-unahang batch ng scholars ng San Miguel Yamamura Packaging Corporation sa pamamagitan ng pagtutulungan ng K-Coop at Don Bosco College-Canlubang, Laguna na kanilang naging tahanan sa loob ng apat na buwan. Laking pasasalamat ni Ate Rachel dahil matapos ang pag-aaral ng kanyang anak ay mayroon agad itong trabaho. Sa pagbabalik-tanaw niya bago niya ipasok ang anak niya dito ay halos isang taon itong walang trabaho. Kaya naman nang ito’y makumbinse niya ay hindi nagdalawang isip na sumali at dagdag pa niya na ang anak niya ang kauna-unahan sa listahan. Siya mismo ay nangarap rin na matuto ng Automotive na ngayon ay pinapasa na niya sa kanyang anak at isa pa doon ay ang paaralang papasukan ay isa sa mga tinitingala ni Ate Rachel na hindi niya akalain na ang anak niya ay magiging isa na sa bahagi ng Don Bosco-College.

    Si Ate Rachel ay aktibo sa kanilang simbahan, at dito rin nahubog ang kanyang pagiging isang leader. Kaya nang siya ay pumasok sa KASAGANA-KA dito lumawak ang kanyang karanasan, siya ay naging Center Chief sa kanilang sentro at sa kasalukuyan ay isa siya sa mga Ethics Committee ng kooperatiba. Malaki ang nabago sa buhay ni Ate Rachel, noong bago pa siya pumasok sa oraganisasyon ay umaasa lamang siya sa kanyang asawa. Hindi niya sukat akalain na makakarating siya kung ano siya ngayon, na siya ay kapakipakinabang sa kanilang pamilya at lalong higit sa organisasyon.

                                               “Ang pagiging edukada ay wala sa natapos na kurso. Wala yan sa yaman, wala yan sa natapos kundi kung papaano ka maging tao sa kapwa mo.” – Rachel Volcan 2019`,
  },
  {
    number: 9,
    title:
      "Kwentong-K ni Ate Raquel Jose",
    imgSrc: "/static/media/raqueljose.jpg",
    urlLink: "https://kcoop.org.ph/stories.php?nId=3&sId=1",
    publishedDate: "May-31-2019",
    description: `Walang hanap-buhay, walang pinagkakakitaan at tanging sa asawa niya lamang siya umaasa na mas madalas pang magkasakit kaysa makapagtrabaho. Kung i-gagrado ang estado ng buhay nila noon 2/10 lamang at sa kasalukuyan dahil sa tulong ng KASAGANA-KA sila na ngayon ay nasa 7/10 na. Pagdating naman sa pag-aaral ng kanyang anak, lahat ng pwedeng ipagtipid ay pinipilit nitong makatipid mairaos lamang ang anak na nag-aaral. Mga pinagtigpi- tigping piraso ng kahoy lamang ang nag sisilbing kanilang dingding at ang kanilang sahig ay cocolumber na pinagdikit-dikit para hindi maputik sapagkat sila ay nakatira sa tabi ng ilog. Tanging sako lamang ang tabing ng kanilang palikuran. Si Ate Raquel ay mula sa SatO ng Sapang-Palay, kasalukuyang center chief sa kanilang sentro at mag labing-isang taon nang
    miyembro ng KASAGANA-KA.
              Nagbabahay-bahay ang isang staff mula sa health center, at sinabing may magpapahiram ng puhunan pang negosyo na walang hinihinging kolateral. Nagpulong sila sa covered court at nagbakasakali na makakahiram. Nag aagam-agam siya dahil ang trabaho ng kanyang asawa ay pasulpot-sulpot lamang. Sa unang pagkakataon ay nakahiram siya ng limang-libo, at ibinili ito ng biik. Mabuti na lamang ay mayroon siyang mabuting kapit-bahay na nag pahiram naman ng kulungan. Pati narin ang mga pagkain ng biik ay kanyang inutang, at pagkatapos mabenta ang mga biik ay binayaran niya ang mga ito. Hindi naman habang-buhay ay makiki-kulong siya sa kanyang kapit-bahay. Kaya naman sa likod ng kanilang bahay ay nagpagawa na sila ng sariling kulungan ng kanilang mga biik. Pagkalipas ng apat (4) na buwan nang pag-aalaga sa baboy,
    naibenta niya ito ng Php20,000 ang napunta sa kanya ay Php8,000 samantala ang Php12,000 ay napunta sa pambayad ng baboy. Simula noon ay unti-unti nang umunlad ang kanyang negosyo.
    
              Pagdating sa eskwelahan nakakita ang kanyang anak na ng sisiw na iba-iba ang kulay na nag kakahalaga ng sampung piso. Ibinili niya ang kanyang anak, ginawan ng kulungan ang sisiw at inalagaan hanggang sa ito ay lumaki. Dumating yung araw na kakatayin na ang manok, ayaw itong kainin ng kanyang mga anak. Doon pumasok ang ideya niya na mag-alaga na rin ng mga manok at idagdag ito sa kanilang negosyo hanggang umabot ito ng 400 pagkaraan ng ilang taon.
    
              Utik-utik na lumaki ang kanyang loan at dinagdagan ang mga alagang baboy. Dumating din sa punto na nagsimatay ang mga baboy at inilibing ito sa likod ng kanilang bahay, ngunit hindi siya sumuko nag-alaga muli si Ate Raquel ng mga baboy. Hanggang sa maka-ipon siya ng pambili ng hallow blocks para sa kanilang bahay at ang kinikita niya sa manok ay ginagamit sa panggastos sa kanilang pang araw-araw. Nagtatanim ng gulay na kanilang kinakain, nagsisibak ng kahoy at
    binibenta ng tali-tali sa mga kapitbahay.
    
              Sa kasalukuyan si Ate Raquel ang supplier ng manok, itlog at baboy sa kanilang lugar. Bukod sa lugar nila nakakarating na rin ang produkto niya sa Pasay at Quezon City. Dahil sa lumaki na ang negosyo ni Ate Raquel siya ay nakakatulong na sa kanilang lugar, siya ay may mga delivery boy. At dahil kumikita na ang kanyang negosyo siya po ay nakapagpundar ng dalawang bahay, owner type jeep at van. At ayon kay ate Raquel ang nagging bahagi ng KASAGANA-KA bilang Pintuan, Tulay at Daan tungo sa kanyang Tagumpay.
    
              Isa pang malaking tulong sa kanya ng KASAGANA-KA ay pag-loan niya ng K-Edukasyon, dahil dito napagtapos niya ng pag-aaral ang kaniyang panganay na anak ng
    Bachelor of Secondary Education Major in Science sa ngayon kanyang binubuno ang pag-aaral ng kanyang pangalawang anak na nag-aaral ng Maritime. Kaya walang hanggang pasasalamat ang ipinaaabot ni Ate Raquel sa KASAGANA-KA, at patuloy niyang tatangkilikin ang KASAGANA-KA habang siya ay nabubuhay.`,
  },
];

export default function KwentongK() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const navigate = useNavigate();

  return (
    <div className="content-wrapper" style={{ minHeight: 705 }}>
      <div className="container">
        {/* content Header (Page header) */}
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
                      &nbsp;Kwentong - K
                    </b>
                  </h2>
                  <br />
                  <div
                    className="box box-warning "
                    style={{ marginTop: "-1.5%" }}
                  />

                  {/** */}
                  {Kwentong_KContent.map((content) => (
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
                                    navigate("/kwentong_k_readmore", {
                                      state: {
                                        data: Kwentong_KContent,
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
                                    navigate("/kwentong_k_readmore", {
                                      state: {
                                        data: Kwentong_KContent,
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
                                {Kwentong_KContent.decription}
                                {`...`}
                                <br />
                                <a href={Kwentong_KContent.urlLink}>Read more</a>
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
        {/* /.Kwentong_KContent */}
      </div>
      {/* /.container */}
    </div>
  );
}
