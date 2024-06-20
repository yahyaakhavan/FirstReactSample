export default function NavBar() {
  return (
    <nav className="font-body flex justify-between items-center">
      <h2>لیست پروژها</h2>
      <div className="flex items-center justify-center gap-4 font-medium">
        <span>وضعیت</span>
        <div className="bg-white rounded-md flex gap-4 px-3 py-2">
          <button>همه</button>
          <button className="secondary--badge">باز</button>
          <button>بسته</button>
        </div>
        <select className="dropdown mx-3" name="" id="">
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
