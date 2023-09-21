import React, { useState, useEffect } from "react";

export const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const sortedJson = jsonData.sort((a, b) => {
          if (a.label < b.label) return -1;
          if (a.label > b.label) return 1;
          else {
            return 0;
          }
        });
        setData(sortedJson);
      });
  }, []);

  return (
    <ol>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.link} style={{ color: item.color }}>
              {item.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
};

// function Fetch() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the URL and sort it by the "label" property
//     fetch(
//       "https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json"
//     )
//       .then((response) => response.json())
//       .then((jsonData) => {
//         const sortedData = jsonData.sort((a, b) =>
//           a.label.localeCompare(b.label)
//         );
//         console.log(sortedData);
//         setData(sortedData);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <ol>
//       {data.map((item, index) => (
//         <li key={index}>
//           <a href={item.link} style={{ color: item.color }}>
//             {item.label}
//           </a>
//         </li>
//       ))}
//     </ol>
//   );
// }

// export default Fetch;
