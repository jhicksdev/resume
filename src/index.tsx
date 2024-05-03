import React from "react";
import { createRoot } from "react-dom/client";
import { Resume, ResumeData } from "./Resume";

const data: ResumeData = {
  profileData: {
    name: "Joseph Hicks",
    occupation: "Software Developer",
    phone: "330-968-7177",
    email: "jhicksdev@gmail.com",
    github: "jhicksdev",
    image: "images/20240503_182840.jpg",
  },
  skillTexts: [
    "Experienced in writing code in multiple programming languages including HTML/CSS, JavaScript, TypeScript, Python, SQL, Java, C, C++, C#, Go, and Rust, with a focus on web development, automation, and systems programming.",
    "Experienced in writing automation scripts to streamline tasks by reading, parsing, and writing data in various formats such as CSV, JSON, YAML, and TOML, improving efficiency and productivity.",
    "Experienced in SQL for database management, including querying data, designing databases and tables, and inserting data, ensuring effective data organization and retrieval.",
    "Experienced in utilizing various Linux distributions such as Ubuntu, Debian, Fedora, Arch, and openSUSE, demonstrating expertise in system administration, shell scripting, and software development in Linux environments.",
    "Experienced in Adobe Illustrator for graphic design tasks, including creating logos, posters, and other visual assets, showcasing creativity and attention to detail.",
  ],
  employmentHistoryData: {
    employments: [
      {
        company: {
          image: {
            src: "images/TKM.svg",
            width: 160,
          },
          name: "TKM Print Solutions, Inc.",
          location: "Green, OH",
          website: "https://www.discovertkm.com/",
        },
        position: "Light assembly tech",
        duration: {
          start: {
            month: "AUG",
            year: 2019,
          },
          end: {
            month: "JAN",
            year: 2024,
          },
        },
        skills: ["Assembled and packaged products in preparation for shipment.", "Fabricated and prepared components for final products."],
      },
      {
        company: {
          image: {
            src: "images/RGI.svg",
            width: 200,
          },
          name: "Reproductive Gynecology & Infertility",
          location: "Akron, OH",
          website: "https://www.rgiohio.com/",
        },
        position: "Medical records clerk",
        duration: {
          start: {
            month: "AUG",
            year: 2022,
          },
          end: {
            month: "JUL",
            year: 2023,
          },
        },
        skills: ["Deconstructed medical charts in preparation for digital scanning.", "Uploaded digitally scanned records to centralized web-based platform.", "Organized, named, and linked records to patient profiles."],
      },
    ],
  },
  educationData: {
    schools: [
      {
        image: {
          src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Jamestown_Community_College.svg",
          width: 160,
        },
        name: "Jamestown Community College",
        location: "Jamestown, NY",
        major: "Computer Science",
        duration: {
          start: {
            month: "AUG",
            year: 2023,
          },
        },
        awards: ["Have been recognized on the Dean's list."],
        website: "https://www.sunyjcc.edu/",
      },
      {
        image: {
          src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Stark_State_logo_2016.svg",
          width: 160,
        },
        name: "Stark State College",
        location: "Canton, OH",
        major: "Computer Science",
        duration: {
          start: {
            month: "JAN",
            year: 2021,
          },
          end: {
            month: "SEP",
            year: 2022,
          },
        },
        awards: ["Earned certifications in Java & C++ programming.", "Have been recognized on the President's and Dean's lists."],
        website: "https://www.starkstate.edu/",
      },
    ],
  },
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Resume {...data} />);
}
