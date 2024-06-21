import { useState } from "react";

export default function NavBar({
  projectsStatus,
  SetprojectsStatus,
  onSortBy,
}) {
  console.log("first");

  return (
    <nav className="font-body flex justify-between items-center">
      <h2>لیست پروژها</h2>
      <div className="flex items-center justify-center gap-4 font-medium">
        <span>وضعیت</span>
        <div className="bg-white rounded-md flex gap-4 px-3 py-2">
          <button
            className={projectsStatus == 1 ? "secondary--badge" : ""}
            id="1"
            onClick={(e) => {
              SetprojectsStatus(e.target.id);
            }}
          >
            همه
          </button>
          <button
            className={projectsStatus == 2 ? "secondary--badge" : ""}
            id="2"
            onClick={(e) => {
              SetprojectsStatus(e.target.id);
            }}
          >
            باز
          </button>
          <button
            className={projectsStatus == 3 ? "secondary--badge" : ""}
            id="3"
            onClick={(e) => {
              SetprojectsStatus(e.target.id);
            }}
          >
            بسته
          </button>
        </div>
        <select
          className="dropdown mx-3"
          name=""
          id=""
          onChange={(e) => {
            onSortBy(e.target.value);
          }}
        >
          <option value="newest">مرتب سازی(جدیدترین)</option>
          <option value="latest">مرتب سازی(قدیمی ترین)</option>
        </select>
        <select className="dropdown" name="" id="">
          <option value="all">دسته بندی(همه)</option>
          <option value="open">دسته بندی(باز)</option>
          <option value="closed">دسته بندی(بسته)</option>
        </select>
      </div>
    </nav>
  );
}
