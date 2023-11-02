// import { certificateApi } from "@/services/apis/student/certificate.api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import hiringManager from "../../../../public/homepage/Hiring_managers_1.webp";
import chro from "../../../../public/homepage/CHRO_hero.webp";
import talentAcquisition from "../../../../public/homepage/Talent_marketers_1.webp";
import recruiters from "../../../../public/homepage/01-recruiters-frontal_1__1_.webp";
import hris from "../../../../public/homepage/HRIS_HRIT_1.webp";
import talentManagement from "../../../../public/homepage/Talent_marketers_1.webp";
// import { init } from "next/dist/compiled/webpack/webpack";

export const getDummyData = createAsyncThunk("/dummy", (params, thunkAPI) => {
  console.log("Chanded",params);
  return params;
  // return ;
});

const initialState = {
  loading: false,
  error: null,
  allData: {
    hiringManagers: {
      data: {
        heroData: {
          heroTitle: "Hiring Managers",
          subHeading:
            "Build high performance teams that scale — with insights.",
          img: hiringManager,
        },
        accordiumData: [
          {
            id: 1,
            title: "Fill Open Roles Faster",
            content:
              "Accelerate hiring with AI recommended candidates, automation for candidate screening and scheduling, and communication tools for real-time hiring team alignment.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/3SYykKwD2jB2zeTzBfFGEw/c612c9b0b60cd81daeb99caed5107c92/Candidate_Management.png",
          },
          {
            id: 1,
            title: "Automate Hiring Tasks",
            content:
              "Identify and hire best-fit candidates based on potential, experience, and skills with fit scoring and matching criteria. Discover and fill team skills gaps, while developing and retaining your best employees.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/6Jr7ymF7kG3qtgPqndzCKL/050c94443803d747b6b6200a22dd7ab8/Explainable_AI.png",
          },
          {
            id: 1,
            title: "IAccess Anywhere",
            content:
              "Hire on-the-go by identifying, screening, evaluating, and hiring candidates from desktop or mobile — anywhere, anytime.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/5TRaONbmwCxXBxYDXTg4Lt/ba03d5291bad819bf23ad34ad554301c/access-anywhere.png",
          },
        ],
      },
    },
    talentAcquisition: {
      data: {
        heroData: {
          heroTitle: " Talent Acquisition",
          subHeading:
            "Boost the productivity of your recruiting team — with AI and automation.",
          img: talentAcquisition,
        },
        accordiumData: [
          {
            id: 1,
            title: "Identify & Prioritize Top Skills",
            content:
              "Eliminate the time-consuming, manual process of parsing profiles and resumes to pinpoint hiring hopefuls. Using AI-powered candidate matching, identify and prioritize the top skills required of candidates to fill jobs faster.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/6Jr7ymF7kG3qtgPqndzCKL/050c94443803d747b6b6200a22dd7ab8/Explainable_AI.png",
          },
          {
            id: 2,
            title: "Automate Visibility into Best-Fit Candidates",
            content:
              " Surface a tremendous number of potential candidates from public data sources, previous sourcing efforts, past applicants, and even current employees.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/6BxZ3Ee8poS2HoPeG9Nydr/91d941fb2024899cc4ed6dbe1a2080ca/AI_Cloud_Sourcing.png",
          },
        ],
      },
    },
    talentManagement: {
      data: {
        heroData: {
          heroTitle: "Talent Management",
          subHeading:
            " Facilitate productive and purposeful career paths — with precision.",
          img: talentManagement,
        },
        accordiumData: [
          {
            id: 1,
            title: "Know Your Team Better",
            content:
              "Understand the skills and interests of your employees. Get a better view into gaps that must be filled at the individual and enterprise level.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/21FVGrenMdnlwhgwlEcL5I/5459da17041728abbcdf21933af15fcf/Employee_Profiles_EX.png",
          },
          {
            id: 2,
            title: "Empower Your Employees",
            content:
              "Provide a diverse, inclusive, and supportive environment that enables your employees to bring their whole selves to work.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/1ggGtRyxGx07pmFVmLelb2/57d3f864ff5b81fee20c546b41e584ce/ERG_View.png",
          },
          {
            id: 1,
            title: "Grow Your Talent Network",
            content:
              "Nurture employee career development, skills, and relationships to improve employee satisfaction and success.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/6GKzoiMpRZLzPnfMZ3qHeQ/200628f1d17974b51619bcdb02a6756a/Career_Pathing.png",
          },
        ],
      },
    },
    chro: {
      data: {
        heroData: {
          heroTitle: " CHROs",
          subHeading:
            "Fuel business growth by empowering those who make it great — with exceptional experiences.",
          img: chro,
        },
        accordiumData: [
          {
            id: 1,
            title: "Find Great Candidates Fast",
            content:
              "Equip TA and hiring managers with a unified platform for the discovery, engagement, screening, scheduling, and hiring of candidates. Reduce cost and time to hire while supporting strategic decision making with AI and automation.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/4arbxiZnVc0TDEDYQlqZZJ/a90ebea5e19069bbf526be3fe9706274/Interview_Management.png",
          },
          {
            id: 2,
            title: "Upskill and Evolve Employees",
            content:
              "Provide your TM team with the resources required to engage employees, stretch their abilities, and carve out purposeful roles and fulfilling careers. Facilitate meaningful connections with mentors and illuminate gigs to help them gear up for what's next.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/63qIZ6tWhMhmq1EQz42WUc/414605f50d2397888f833ce5e363a3a0/Learning___Development.png",
          },
          {
            id: 3,
            title: "Reduce Resignations",
            content:
              "Provide great experiences and in turn retain talent. Empower people to feel that they're part of something, know that they have the resources needed to be successful, and see they're surrounded by an array of people with diverse perspectives.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/1ggGtRyxGx07pmFVmLelb2/57d3f864ff5b81fee20c546b41e584ce/ERG_View.png",
          },
        ],
      },
    },
    hris: {
      data: {
        heroData: {
          heroTitle: " HRIS",
          subHeading:
            "Modernize and integrate your HR tech stack — with a unified approach.",
          img: hris,
        },
        accordiumData: [
          {
            id: 1,
            title: "Simplify Your Tech Stack",
            content:
              "Build your entire talent journey with a single platform that reduces complexity, improves security, and delivers a unified experience.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/3wmtt0Lj4RuwZXAUWipj4u/a9e1ebe5c0e4a7df22750d1a9732aa70/tech-stack.png",
          },
          {
            id: 2,
            title: "Build Great Experiences with ease",
            content:
              "Configure and manage all of your talent experiences easily with low-code/no-code templates, pre-configured forms, automated workflows, and bulk data migrations.",
            url: "https://www.phenom.com/intelligent-automation",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/6xc3F0LBonGXt9Byqa3U4E/e4334c1f3e6c334fa09b50fda7aab926/Flow_Studio.png",
          },
          {
            id: 3,
            title: "Streamline Integrations and Workflows",
            content:
              "Ensure and prioritize security, operational efficiency, and data integrity with self-service tools that seamlessly integrate your HR information systems and technologies.",
            url: "https://www.phenom.com/hris-experience",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/4POrQntAnRryBMGwQWGXQU/679f02fa473d20afae487c6a9ae8e174/API_Configuration.png",
          },
        ],
      },
    },
    recruiters: {
      data: {
        heroData: {
          heroTitle: "Recruiters",
          subHeading:
            "Discover, engage and hire phenomenal people — with speed and velocity.",
          img: recruiters,
        },
        accordiumData: [
          {
            id: 1,
            title: "Find the Best Fit Faster",
            content:
              "Prioritize outreach to candidates that meet qualifications such as skills, title, experience, and location.",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/11ide5I7QaUPRKgP17TklR/18619c1cfa829db2fd95f24ff2807ccc/Fit_Score.png",
          },
          {
            id: 2,
            title: "Fill Talent Pipelines Faster",
            content:
              "https://images.ctfassets.net/0d3i1kfsuaq3/11ide5I7QaUPRKgP17TklR/18619c1cfa829db2fd95f24ff2807ccc/Fit_Score.png",
            url: "https://www.phenom.com/talent-crm",
            img: "https://images.ctfassets.net/0d3i1kfsuaq3/6fpRoVw1NDIken69OoTDWf/983a4beb533856edefba455e6df504b5/Hiring_Dashboards.png",
          },
        ],
      },
    },
  },
  currentData: {
    heroData: {
      heroTitle: "Hiring Managers",
      subHeading: "Build high performance teams that scale — with insights.",
      img: hiringManager,
    },
    accordiumData: [
      {
        id: 1,
        title: "Fill Open Roles Faster",
        content:
          "Accelerate hiring with AI recommended candidates, automation for candidate screening and scheduling, and communication tools for real-time hiring team alignment.",
        url: "https://www.phenom.com/talent-crm",
        img: "https://images.ctfassets.net/0d3i1kfsuaq3/3SYykKwD2jB2zeTzBfFGEw/c612c9b0b60cd81daeb99caed5107c92/Candidate_Management.png",
      },
      {
        id: 1,
        title: "Automate Hiring Tasks",
        content:
          "Identify and hire best-fit candidates based on potential, experience, and skills with fit scoring and matching criteria. Discover and fill team skills gaps, while developing and retaining your best employees.",
        url: "https://www.phenom.com/talent-crm",
        img: "https://images.ctfassets.net/0d3i1kfsuaq3/6Jr7ymF7kG3qtgPqndzCKL/050c94443803d747b6b6200a22dd7ab8/Explainable_AI.png",
      },
      {
        id: 1,
        title: "IAccess Anywhere",
        content:
          "Hire on-the-go by identifying, screening, evaluating, and hiring candidates from desktop or mobile — anywhere, anytime.",
        url: "https://www.phenom.com/talent-crm",
        img: "https://images.ctfassets.net/0d3i1kfsuaq3/5TRaONbmwCxXBxYDXTg4Lt/ba03d5291bad819bf23ad34ad554301c/access-anywhere.png",
      },
    ],
  },
  currentTab: "hiringManagers",
  // accordiumData:[
  //   {
  //     id:1,
  //     title: "Simplify Your Tech Stack",
  //     content: "Build your entire talent journey with a single platform that reduces complexity, improves security, and delivers a unified experience.",
  //     url: "https://www.phenom.com/talent-crm",
  //     img: "https://images.ctfassets.net/0d3i1kfsuaq3/3wmtt0Lj4RuwZXAUWipj4u/a9e1ebe5c0e4a7df22750d1a9732aa70/tech-stack.png"
  //   },
  //   {
  //       id:2,
  //       title: "Build Great Experiences with ease",
  //       content: "Configure and manage all of your talent experiences easily with low-code/no-code templates, pre-configured forms, automated workflows, and bulk data migrations.",
  //       url: "https://www.phenom.com/intelligent-automation",
  //       img: "https://images.ctfassets.net/0d3i1kfsuaq3/6xc3F0LBonGXt9Byqa3U4E/e4334c1f3e6c334fa09b50fda7aab926/Flow_Studio.png"
  //   },
  //   {
  //       id:3,
  //       title: "Streamline Integrations and Workflows",
  //       content: "Ensure and prioritize security, operational efficiency, and data integrity with self-service tools that seamlessly integrate your HR information systems and technologies.",
  //       url: "https://www.phenom.com/hris-experience",
  //       img: "https://images.ctfassets.net/0d3i1kfsuaq3/4POrQntAnRryBMGwQWGXQU/679f02fa473d20afae487c6a9ae8e174/API_Configuration.png"
  //   }
  // ]
};

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDummyData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDummyData.fulfilled, (state, action) => {
      state.loading = false;
      state.currentTab = action?.payload;
      console.log("return", action?.payload);
    });
    builder.addCase(getDummyData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default dummySlice.reducer;
