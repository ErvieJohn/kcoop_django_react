import logo from "./logo.svg";
import "./App.css";
import React from "react";

//HEADER
import Header from "./screens/Header";

//FOOTER
import Footer from "./screens/Footer";

// SCREENS
import Home from "./screens/Home";

// Who We Are
import History from "./screens/History";
import VMG from "./screens/VMG";
import KSO_G_P from "./screens/KSO_G_P";
import CooperativePrinciples from "./screens/CooperativePrinciples";
import OrganizationalStructure from "./screens/Organizational_Structure";

// Programs and Services
import LivelihoodAndEnterpriseDevelopment from "./screens/LivelihoodAndEnterpriseDevelopment";
import EducationTrainingAndFormation from "./screens/EducationTrainingAndFormation";
import HealthAndWellness from "./screens/HealthAndWellness";
import SecurityShelterAndSafety from "./screens/SecurityShelterAndSafety";
import SocialProtection from "./screens/SocialProtection";

// Satalite Offices
import NCR from "./screens/NCR";
import Region3 from "./screens/Region3";
import Region4A from "./screens/Region4A";

// Publications
import AnnualReports from "./screens/AnnualReports";
import AuditedFinancialStatements from "./screens/AuditedFinancialStatements";
import Announcements from "./screens/Announcements";
import ByTheNumbers from "./screens/ByTheNumbers";

// Announcements Tab
import GoBringMe from "./screens/GoBringMe";

import Careers from "./screens/Careers";

import Error404 from "./screens/Error404";

import MessengerCustomerChat from "react-messenger-customer-chat";

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import K_KalusuganW3 from "./screens/K_KalusuganW3";
import K_Bahay_W3 from "./screens/K_Bahay_W3";
import K_Bahay_W2 from "./screens/K_Bahay_W2";
import K_Bahay_W1 from "./screens/K_Bahay_W1";
import K_Yakap from "./screens/K_Yakap";
import AnnualRepresentativeAssembly2022 from "./screens/AnnualRepresentativeAssembly2022";
import K_Edukasyon_W1 from "./screens/K_Edukasyon_W1";
import VaccineDoneVirusGone from "./screens/VaccineDoneVirusGone";
import Baro_Act_60DaysGracePeriod from "./screens/BaroAct_60DaysGracePeriod";
import MensaheSaAtingMgaMiyembro from "./screens/MensaheSaAtingMgaMiyembro";
import LoanMoratoriumExtensionA12A30 from "./screens/LoanMoratoriumExtensionA12A30";
import LoanMoratoriumM17A12 from "./screens/LoanMoratoriumM17A12";
import K_COOP3rdAnnualRA from "./screens/K_COOP3rdAnnualRA";
import Videos from "./screens/Videos";
import K_Ganap from "./screens/K_Ganap";
import K_Ganap_ReadMore from "./screens/K_Ganap_ReadMore";
import KwentongK from "./screens/KwentongK";
import KwentongK_ReadMore from "./screens/KwentongK_ReadMore";
import K_Bahagi from "./screens/K_Bahagi";
import K_Bahagi_ReadMore from "./screens/K_Bahagi_ReadMore";
import Announcements_ReadMore from "./screens/Announcements_ReadMore";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/history" element={<History />} />

          <Route exact path="/vmg" element={<VMG />} />

          <Route exact path="/kso_guiding_principles" element={<KSO_G_P />} />

          <Route
            exact
            path="/cooperative_principles"
            element={<CooperativePrinciples />}
          />

          <Route
            exact
            path="/organizational_structure"
            element={<OrganizationalStructure />}
          />

          <Route
            exact
            path="/livelihood_and_enterprise_development"
            element={<LivelihoodAndEnterpriseDevelopment />}
          />

          <Route
            exact
            path="/education_training_and_formation"
            element={<EducationTrainingAndFormation />}
          />

          <Route
            exact
            path="/health_and_wellness"
            element={<HealthAndWellness />}
          />

          <Route
            exact
            path="/security_shelter_and_safety"
            element={<SecurityShelterAndSafety />}
          />

          <Route
            exact
            path="/social_protection"
            element={<SocialProtection />}
          />

          <Route exact path="/ncr" element={<NCR />} />

          <Route exact path="/region3" element={<Region3 />} />

          <Route exact path="/region4a" element={<Region4A />} />

          <Route exact path="/annual_reports" element={<AnnualReports />} />

          <Route
            exact
            path="/audited_financial_statements"
            element={<AuditedFinancialStatements />}
          />

          <Route exact path="/announcements" element={<Announcements />} />
          <Route path="/announcements/:id" element={<Announcements_ReadMore />} />
          {/*
          <Route path="/announcements_readmore" Component={Announcements_ReadMore} />
  */}
          

          <Route exact path="/by_the_numbers" element={<ByTheNumbers />} />

          <Route exact path="/go_bring_me" element={<GoBringMe />} />

          <Route exact path="/k_kalusugan_w3" element={<K_KalusuganW3 />} />

          <Route exact path="/k_bahay_w3" element={<K_Bahay_W3 />} />

          <Route exact path="/k_bahay_w2" element={<K_Bahay_W2 />} />

          <Route exact path="/k_bahay_w1" element={<K_Bahay_W1 />} />

          <Route exact path="/k_yakap" element={<K_Yakap />} />

          <Route
            exact
            path="/annual_representative_assembly2022"
            element={<AnnualRepresentativeAssembly2022 />}
          />

          <Route exact path="/k_edukasyon_w1" element={<K_Edukasyon_W1 />} />

          <Route
            exact
            path="/vaccine_done_virus_gone"
            element={<VaccineDoneVirusGone />}
          />

          <Route
            exact
            path="/baro_act_60_days_grace_period"
            element={<Baro_Act_60DaysGracePeriod />}
          />

          <Route
            exact
            path="/mensahe_sa_ating_mga_miyembro"
            element={<MensaheSaAtingMgaMiyembro />}
          />

          <Route
            exact
            path="/loan_moratorium_extension_april122020toapril302020"
            element={<LoanMoratoriumExtensionA12A30 />}
          />

          <Route
            exact
            path="/loan_moratorium_apri172020toapril122020"
            element={<LoanMoratoriumM17A12 />}
          />

          <Route
            exact
            path="/k_coop_3rd_annual_ra"
            element={<K_COOP3rdAnnualRA />}
          />

          <Route exact path="/videos" element={<Videos />} />

          <Route exact path="/k_ganap" element={<K_Ganap />} />

          <Route path="/k_ganap_readmore" Component={K_Ganap_ReadMore} />

          <Route exact path="/kwentong_k" element={<KwentongK />} />

          <Route path="/kwentong_k_readmore" Component={KwentongK_ReadMore} />

          <Route exact path="/k_bahagi" element={<K_Bahagi />} />

          <Route path="/k_bahagi_readmore" Component={K_Bahagi_ReadMore} />
          

          <Route exact path="/careers" element={<Careers />} />

          <Route exact path="*" element={<Error404 />} />
        </Routes>

        <Footer />

        <MessengerCustomerChat
          //pageId="195953314332304"
          pageId="103650635162558"
          appId="242024521859892"
          //htmlRef="<REF_STRING>"
        />
      </Router>
    </>
  );
}

export default App;
