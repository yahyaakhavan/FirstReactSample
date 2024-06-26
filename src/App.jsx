import { Children, useEffect, useMemo, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Table, { CreateTbody } from "./Components/Table";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه پروژه نمونه با React",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 3,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2024-02-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "توسعه یک نوت اپ با استفاده از React",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "CLOSED",
    category: {
      id: 4,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2024-01-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  console.log("first");
  const [allProjects, setAllprojects] = useState([]);
  const [projectsStatus, setProjectsStatus] = useState();
  const [orderBy, setOrderBy] = useState("newest");
  const [isChange, setIsChange] = useState(false);
  const handleSortBy = (value) => {
    setOrderBy(value);
    // let sortedByDate = [...allProjects];
    // if (value == "latest") {
    //   sortedByDate.sort((a, b) => {
    //     return new Date(a.deadline) - new Date(b.deadline);
    //   });
    // } else {
    //   sortedByDate.sort((a, b) => {
    //     return new Date(b.deadline) - new Date(a.deadline);
    //   });
    // }
    // setAllprojects(sortedByDate);
  };
  const handleChangeProjectStatus = (id) => {
    // let nArr = [];
    // nArr = [...allProjects];

    projects.map((item) => {
      if (item._id == id) {
        if (item.status == "OPEN") {
          return (item.status = "CLOSED");
        } else if (item.status == "CLOSED") {
          return (item.status = "OPEN");
        }
      }
    });
    // setAllprojects(nArr);
    // console.log(allProjects);
    setIsChange((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    // console.log("hi");
    // setAllprojects([]);
    let final = [];
    if (orderBy == "newest") {
      projects.sort((a, b) => {
        return new Date(b.deadline) - new Date(a.deadline);
      });
    } else {
      projects.sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline);
      });
    }
    if (projectsStatus == null) {
      return;
    } else if (projectsStatus == 1) {
      projects.map((item) => {
        return final.push(item);
      });
    } else if (projectsStatus == 2) {
      projects.filter((item) => {
        if (item.status == "OPEN") {
          return final.push(item);
        }
      });
    } else if (projectsStatus == 3) {
      projects.filter((item) => {
        if (item.status == "CLOSED") {
          return final.push(item);
        }
      });
    }
    setAllprojects(final);
  }, [projectsStatus, orderBy, isChange]);

  return (
    <div>
      <NavBar
        projectsStatus={projectsStatus}
        SetprojectsStatus={setProjectsStatus}
        onSortBy={handleSortBy}
      />
      <div className="font-body mt-3">
        <Table>
          <CreateTbody
            allProjects={allProjects}
            onChangeProjectStatus={handleChangeProjectStatus}
          />
        </Table>
      </div>
    </div>
  );
}

export default App;
