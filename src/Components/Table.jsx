export default function Table() {
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
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="px-6 py-4">1</td>
          <td className="px-6 py-4">FirstProject</td>
          <td className="px-6 py-4 font-PersianDigit">500.000</td>
          <td className="px-6 py-4 font-PersianDigit">1402/10/02</td>
          <td className="px-6 py-4">
            <span className="primary--badge">بسته</span>
          </td>
          <td className="px-6 py-4">Opration</td>
        </tr>
      </tbody>
    </table>
  );
}
