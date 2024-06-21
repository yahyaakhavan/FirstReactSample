export default function Table({ children }) {
  console.log("first");
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            عنوان پروژه
          </th>
          <th scope="col" className="px-6 py-3">
            بودجه
          </th>
          <th scope="col" className="px-6 py-3">
            ددلاین
          </th>
          <th scope="col" className="px-6 py-3">
            وضعیت
          </th>
          <th scope="col" className="px-6 py-3">
            عملیات
          </th>
        </tr>
      </thead>
      {children}
    </table>
  );
}
export function CreateTbody({ allProjects }) {
  if (allProjects.length == 0) {
    return (
      <tbody>
        <tr>
          <td className="font-extrabold">لطفا نوع پروژه را انتحاب نمایید</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {allProjects.map((item, index) => {
        return (
          <tr
            key={item._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="px-6 py-4 font-PersianDigit">{index + 1}</td>
            <td className="px-6 py-4">{item.title}</td>
            <td className="px-6 py-4 font-PersianDigit">{item.budget}</td>
            <td className="px-6 py-4 font-PersianDigit">
              {new Date(item.deadline).toLocaleDateString("fa-IR")}
            </td>
            <td>
              <span
                className={
                  item.status == "CLOSED" ? "red--badge" : "green--badge"
                }
              >
                {item.status}
              </span>
            </td>
            <td className="px-6 py-4">Opration</td>
          </tr>
        );
      })}
    </tbody>
  );
}
