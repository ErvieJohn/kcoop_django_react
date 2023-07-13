import logo from "./logo.svg";
import "./App.css";
import React from "react";

import {AuthProvider} from './context/AuthContext';

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

import Careers from "./screens/Careers";

import Error404 from "./screens/Error404";



//Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Videos from "./screens/Videos";
import K_Ganap from "./screens/K_Ganap";
import K_Ganap_ReadMore from "./screens/K_Ganap_ReadMore";
import KwentongK from "./screens/KwentongK";
import KwentongK_ReadMore from "./screens/KwentongK_ReadMore";
import K_Bahagi from "./screens/K_Bahagi";
import K_Bahagi_ReadMore from "./screens/K_Bahagi_ReadMore";
import Announcements_Read_More from "./screens/Announcements_Read_More";
import Layout from "./Layout/Layout";

import Login from "./screens/CMS/Login";
import ErrorLayout from "./Layout/ErrorLayout";
import Dashboard from "./screens/CMS/Dashboard";
import CMSHome from "./screens/CMS/screens/CMSHome";
import CMSHistory from "./screens/CMS/screens/CMSHistory";
import CMSVMG from "./screens/CMS/screens/CMSVMG";
import CMSKSO from "./screens/CMS/screens/CMSKSO";
import CMSOS from "./screens/CMS/screens/CMSOS";
import CMSCP from "./screens/CMS/screens/CMSCP";
import CMSLED from "./screens/CMS/screens/CMSLED";
import CMSETF from "./screens/CMS/screens/CMSETF";
import CMSHW from "./screens/CMS/screens/CMSHW";
import CMSSSS from "./screens/CMS/screens/CMSSSS";
import CMSSP from "./screens/CMS/screens/CMSSP";
import CMSNCR from "./screens/CMS/screens/CMSNCR";
import CMSRegion3 from "./screens/CMS/screens/CMSRegion3";
import CMSRegion4A from "./screens/CMS/screens/CMSRegion4A";
import CMSAnnualReports from "./screens/CMS/screens/CMSAnnualReports";
import CMSAuditedFinancialStatements from "./screens/CMS/screens/CMSAuditedFinancialStatements";
import CMSByTheNumbers from "./screens/CMS/screens/CMSByTheNumbers";
import CMSAnnouncements from "./screens/CMS/screens/CMSAnnouncements";
import { EditAnnouncements } from "./screens/CMS/screens/EditAnnouncements";
import CMSK_Ganapan from "./screens/CMS/screens/CMSK_Ganapan";
import { EditK_Ganapan } from "./screens/CMS/screens/EditK_Ganapan";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />} >
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
              <Route path="/announcements/:id" element={<Announcements_Read_More />} />

              <Route exact path="/by_the_numbers" element={<ByTheNumbers />} />

              <Route exact path="/videos" element={<Videos />} />

              <Route exact path="/k_ganap" element={<K_Ganap />} />

              <Route path="/k_ganap/:id" element={<K_Ganap_ReadMore />} />

              {/*<Route path="/k_ganap_readmore" Component={K_Ganap_ReadMore} />*/}

              <Route exact path="/kwentong_k" element={<KwentongK />} />

              <Route path="/kwentong_k/:id" element={<KwentongK_ReadMore/>} />

              <Route exact path="/k_bahagi" element={<K_Bahagi />} />

              <Route path="/k_bahagi/:id" element={<K_Bahagi_ReadMore/>} />


              <Route exact path="/careers" element={<Careers />} />

              
          </Route>

         
            {/*FOR ADMIN */}
            <Route exact path='/cms/login' element={<Login/>}/>
            {/*<Route exact path='/cms' element={<cmsLayout/>}/>*/}
              
            <Route element={<Dashboard/>}>
              <Route exact path='/cms' element={<CMSHome/>}/>
              <Route exact path='/cms/home' element={<CMSHome/>}/>

              <Route exact path='/cms/history' element={<CMSHistory/>}/>
              <Route exact path='/cms/vmg' element={<CMSVMG/>}/>
              <Route exact path='/cms/kso_guiding_principles' element={<CMSKSO/>}/>
              <Route exact path='/cms/organizational_structure' element={<CMSOS/>}/>
              <Route exact path='/cms/cooperative_principles' element={<CMSCP/>}/>

              <Route exact path='/cms/livelihood_and_enterprise_development' element={<CMSLED/>}/>
              <Route exact path='/cms/education_training_and_formation' element={<CMSETF/>}/>
              <Route exact path='/cms/health_and_wellness' element={<CMSHW/>}/>
              <Route exact path='/cms/security_shelter_and_safety' element={<CMSSSS/>}/>
              <Route exact path='/cms/social_protection' element={<CMSSP/>}/>

              <Route exact path='/cms/ncr' element={<CMSNCR/>}/>
              <Route exact path='/cms/region3' element={<CMSRegion3/>}/>
              <Route exact path='/cms/region4a' element={<CMSRegion4A/>}/>

              <Route exact path='/cms/annual_reports' element={<CMSAnnualReports/>}/>
              <Route exact path='/cms/audited_financial_statements' element={<CMSAuditedFinancialStatements/>}/>
              <Route exact path='/cms/by_the_numbers' element={<CMSByTheNumbers/>}/>
              <Route exact path='/cms/announcements' element={<CMSAnnouncements/>}/>
              <Route exact path='/cms/announcements/edit/:id' element={<EditAnnouncements/>}/>

              <Route exact path='/cms/k_ganapan' element={<CMSK_Ganapan/>}/>
              <Route exact path='/cms/k_ganapan/edit/:id' element={<EditK_Ganapan/>}/>
              
            </Route>
            
          

          {/*FOR ERROR */}
          <Route element={<ErrorLayout/>}>
            <Route path="/*" Component={Error404} />
          </Route>
          
        </Routes>
        
      </Router>
    </AuthProvider>
      
    </>
  );
}

export default App;
