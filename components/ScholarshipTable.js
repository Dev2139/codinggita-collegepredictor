import React from "react";

const TableHeader = ({ headers }) => (
  <thead>
    <tr className="bg-[#9333ea] font-bold text-center text-xs sm:text-sm md:text-base text-white">
      {headers.map((header, index) => (
        <th
          key={index}
          className="p-2 border-r border-[#facc15] last:border-r-0"
        >
          {header}
        </th>
      ))}
      <th className="p-2 text-white">Actions</th>
    </tr>
  </thead>
);

const TableCell = ({ children, className = "" }) => (
  <td className={`p-2 border-r border-[#9333ea] last:border-r-0 ${className}`}>
    {children}
  </td>
);

const ExpandedRow = ({ item, expandedFields }) => (
  <tr>
    <td colSpan="5" className="p-4 border border-[#9333ea]">
      <div className="text-left text-sm sm:text-base">
        {expandedFields.map((field, index) => (
          <div key={index} className="mb-2">
            <b className="text-[#9333ea]">{field.label}:</b>{" "} {/* Purple bold labels */}
            {["Doc Required", "Benefits"].includes(field.key) ? (
              <ul className="list-disc list-inside ml-4 text-[#9333ea]"> {/* Purple list items */}
                {item[field.key]?.split("\n").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : (
              <span className="text-[#9333ea]">{item[field.key]}</span> {/* Purple text */}
            )}
          </div>
        ))}
      </div>
    </td>
  </tr>
);

const ScholarshipTable = ({
  filteredData,
  toggleRowExpansion,
  expandedRows,
}) => {
  const headers = ["Scholarship Name", "Status", "Application Link"];
  const mainFields = ["Scholarship Name", "Status"];
  const expandedFields = [
    { key: "Eligibility", label: "Eligibility" },
    { key: "Benefits", label: "Benefits" },
    { key: "Doc Required", label: "Documents Required" },
    { key: "Scholarship Amount", label: "Scholarship Amount" },
    { key: "Last Date", label: "Last Date" },
    { key: "Special Criteria", label: "Special Criteria" },
  ];

  return (
    <div className="w-full mx-auto overflow-x-auto">
      <table className="w-full mx-auto border-collapse text-sm sm:text-base border border-[#9333ea]">
        <TableHeader headers={headers} />
        <tbody>
          {filteredData?.length === 0 && (
            <tr>
              <td colSpan="5" className="p-4 text-center text-[#9333ea]">
                No scholarships found. Please try again with different filters.
              </td>
            </tr>
          )}
          {filteredData?.map((item, index) => (
            <React.Fragment key={index}>
              <tr className={`${index % 2 === 0 ? "bg-[#facc15]" : "bg-white"}`}> {/* Alternating yellow/white */}
                {mainFields.map((field, fieldIndex) => (
                  <TableCell key={fieldIndex}>{item[field]}</TableCell>
                ))}
                <TableCell>
                  <a
                    href={item["Pre-filled Form Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9333ea] hover:text-[#facc15]" /* Purple link, yellow hover */
                  >
                    Apply
                  </a>
                </TableCell>
                <TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <button
                        className="px-4 py-2 rounded bg-[#9333ea] text-white hover:bg-[#facc15] hover:text-[#9333ea] ml-8"
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {expandedRows[index] ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </TableCell>
                </TableCell>
              </tr>
              {expandedRows[index] && (
                <ExpandedRow item={item} expandedFields={expandedFields} />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScholarshipTable;