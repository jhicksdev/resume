// @ts-check

const data = {
  profile: {
    image: {
      src: "images/me.jpg",
    },
    name: "Joseph Hicks",
    occupation: "Software Developer",
    phone: "330-968-7177",
    email: "jhicksdev@gmail.com",
    github: "jhicksdev",
  },
  skills: [
    "Experienced in writing code in multiple programming languages including HTML/CSS, JavaScript, TypeScript, Python, SQL, Java, C, C++, C#, Go, and Rust, with a focus on web development, automation, and systems programming.",
    "Experienced in writing automation scripts to streamline tasks by reading, parsing, and writing data in various formats such as CSV, JSON, YAML, and TOML, improving efficiency and productivity.",
    "Experienced in SQL for database management, including querying data, designing databases and tables, and inserting data, ensuring effective data organization and retrieval.",
    "Experienced in utilizing various Linux distributions such as Ubuntu, Debian, Fedora, Arch, and openSUSE, demonstrating expertise in system administration, shell scripting, and software development in Linux environments.",
    "Experienced in Adobe Illustrator for graphic design tasks, including creating logos, posters, and other visual assets, showcasing creativity and attention to detail.",
  ],
  employments: [
    {
      image: {
        src: "images/TKM.svg",
        width: 160,
      },
      company: "TKM Print Solutions, Inc.",
      location: "Green, OH",
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
      skills: [
        "Assembled and packaged products in preparation for shipment.",
        "Fabricated and prepared components for final products.",
      ],
    },
    {
      image: {
        src: "images/RGI.svg",
        width: 200,
      },
      company: "Reproductive Gynecology & Infertility",
      location: "Akron, OH",
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
      skills: [
        "Deconstructed medical charts in preparation for digital scanning.",
        "Uploaded digitally scanned records to centralized web-based platform.",
        "Organized, named, and linked records to patient profiles.",
      ],
    },
  ],
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
      awards: [
        "Earned certifications in Java & C++ programming.",
        "Have been recognized on the President's and Dean's lists.",
      ],
    },
  ],
};

const { profile, skills, employments, schools } = data;

(function configureProfile() {
  /**
   * @type {HTMLImageElement | null}
   */
  const image = document.querySelector("#profile-image");
  if (image) {
    image.src = profile.image.src;
    image.alt = profile.image.alt;
  }

  /**
   * @type {HTMLParagraphElement | null}
   */
  const name = document.querySelector("#profile-name");
  if (name) name.textContent = profile.name;

  /**
   * @type {HTMLElement | null}
   */
  const occupation = document.querySelector("#profile-occupation em");
  if (occupation) occupation.textContent = profile.occupation;

  /**
   * @type {HTMLAnchorElement | null}
   */
  const phone = document.querySelector("#profile-phone a");
  if (phone) {
    phone.textContent = profile.phone;
    phone.href = `tel:+1${profile.phone.replace(/[^0-9.]/, "")}`;
  }

  /**
   * @type {HTMLAnchorElement | null}
   */
  const email = document.querySelector("#profile-email a");
  if (email) {
    email.textContent = profile.email;
    email.href = `mailto:${profile.email}`;
  }

  /**
   * @type {HTMLAnchorElement | null}
   */
  const github = document.querySelector("#profile-github a");
  if (github) {
    github.textContent = profile.github;
    github.href = `https://github.com/${profile.github}`;
  }
})();

(function configureSkills() {
  /**
   * @type {HTMLUListElement | null}
   */
  const list = document.querySelector("#skill-list");
  if (list) {
    for (const skill of skills) {
      const listItem = document.createElement("li");
      listItem.textContent = skill;
      list.appendChild(listItem);
    }
  }
})();

(function configureEmploymentHistory() {
  /**
   * @type {HTMLDivElement | null}
   */
  const employmentList = document.querySelector("#employment-list");
  for (const employment of employments) {
    const image = document.createElement("img");
    image.className = "company-image";
    image.src = employment.image.src;
    image.alt = employment.image.alt;
    image.width = employment.image.width;
    employmentList?.appendChild(image);

    const summary = document.createElement("p");
    summary.className = "employment-summary";
    employmentList?.appendChild(summary);

    const summaryCompanyName = document.createElement("strong");
    summaryCompanyName.className = "company-name";
    summaryCompanyName.textContent = employment.company;

    const summaryCompanyLocation = document.createElement("strong");
    summaryCompanyLocation.className = "company-location";
    summaryCompanyLocation.textContent = employment.location;

    const summaryEmploymentPosition = document.createElement("em");
    summaryEmploymentPosition.className = "employment-position";
    summaryEmploymentPosition.textContent = employment.position;

    summary.innerHTML = `${summaryCompanyName.outerHTML} | ${summaryCompanyLocation.outerHTML} | ${summaryEmploymentPosition.outerHTML}`;

    const duration = document.createElement("p");
    duration.className = "employment-duration";
    const { start, end } = employment.duration;
    duration.textContent = `📅 ${start.month} ${start.year} → ${end.month} ${end.year}`;
    employmentList?.appendChild(duration);

    const skillList = document.createElement("ul");
    for (const skill of employment.skills) {
      const listItem = document.createElement("li");
      listItem.textContent = skill;
      skillList.appendChild(listItem);
    }

    employmentList?.appendChild(skillList);
  }
})();

(function configureEducation() {
  /**
   * @type {HTMLDivElement | null}
   */
  const educationList = document.querySelector("#education-list");
  for (const school of schools) {
    const image = document.createElement("img");
    image.className = "school-image";
    image.src = school.image.src;
    image.alt = school.image.alt;
    image.width = school.image.width;
    educationList?.appendChild(image);

    const summary = document.createElement("p");
    summary.className = "school-summary";
    educationList?.appendChild(summary);

    const summarySchoolName = document.createElement("strong");
    summarySchoolName.className = "school-name";
    summarySchoolName.textContent = school.name;

    const summarySchoolLocation = document.createElement("strong");
    summarySchoolLocation.className = "school-location";
    summarySchoolLocation.textContent = school.location;

    const summarySchoolMajor = document.createElement("em");
    summarySchoolMajor.className = "school-major";
    summarySchoolMajor.textContent = school.major;

    summary.innerHTML = `${summarySchoolName.outerHTML} | ${summarySchoolLocation.outerHTML} | ${summarySchoolMajor.outerHTML}`;

    const duration = document.createElement("p");
    duration.className = "school-duration";
    const { start, end } = school.duration;
    duration.textContent = `📅 ${start.month} ${start.year} → ${
      end ? `${end.month} ${end.year}` : "Present"
    }`;
    educationList?.appendChild(duration);

    const awardList = document.createElement("ul");
    for (const award of school.awards) {
      const listItem = document.createElement("li");
      listItem.textContent = award;
      awardList.appendChild(listItem);
    }

    educationList?.appendChild(awardList);
  }
})();
