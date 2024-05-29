let assignmentsArray = [
    {
      title: "Weather App",
      code: "https://github.com/TayyabKhan1221/Weather-app",
      link: "https://tayyabkhan1221.github.io/Weather-app/",
      date: "14-May-2024",
      description: "In This Website Will Show You Weather Update",
    },
    {
      title: "Analog-Clock",
      code: "https://github.com/TayyabKhan1221/Analog-Clock",
      link: "https://tayyabkhan1221.github.io/Analog-Clock/",
      date: "8-May-2024",
      description:
        "In This Website Will Show You Time",
    },
    {
      title: "Age-Claculator",
      description: "In This Website Will Show Your Age ",
      code: "https://github.com/TayyabKhan1221/Age-Claculator",
      link: "https://tayyabkhan1221.github.io/Age-Claculator/",
      date: "28-Apr-2024",
    },
    {
      title: "Digital-Clock",
      code: "https://github.com/TayyabKhan1221/Digital-Clock",
      link: "https://github.com/TayyabKhan1221/Digital-Clock",
      date: "26-Apr-2024",
      description: "In This Website Will Show You Digital Time",
    },
   
    {
      title: "Paryer-Time",
      description: "In This Website Well Show You Paryer Time",
      code: "https://github.com/TayyabKhan1221/prayer-Timeing",
      link: "https://tayyabkhan1221.github.io/prayer-Timeing/",
      date: "22-Apr-2024",
    },
  ];
  
  let assignList = document.getElementById("all-assignments");
  
  for (let i = 0; i < assignmentsArray.length; i++) {
    let div = ` <div class="p-4 md:w-1/3">
    <div
      class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    >
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
         ${assignmentsArray[i].title} 
        </h1>
        <p class="leading-relaxed mb-3">${assignmentsArray[i].description}</p>
        <div class="flex items-center flex-wrap">
          <a
            href="${assignmentsArray[i].link}"
            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >See Preview
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <a
              href="${assignmentsArray[i].code}"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                ></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>
            1.2K
          </span>
        </div>
      </div>
    </div>
  </div>`;
  
    assignList.innerHTML += div;
  }
  console.log(projectInfo.title);
  console.log(assignmentsArray[0].title);