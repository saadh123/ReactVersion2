import React, { useState, useEffect } from "react";

export const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        const sortedJson = jsonData.sort((a, b) => {
          if (a.label < b.label) return -1;
          if (a.label > b.label) return 1;
          else {
            return 0;
          }
          // return a.label < b.label;
        });
        setData(sortedJson);
        console.log(sortedJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://gist.githubusercontent.com/huy-nguyen/c3c1f798f710aa3b67815b154691dc5c/raw/95589b9ca87f76423f446835ff3fdc5ec3addb6a/simpson-characters.json"
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const jsonData = await response.json();

  //       const sortedJson = jsonData.sort((a, b) => {
  //         return a.label < b.label ? -1 : 1;
  //       });

  //       setData(sortedJson);
  //       console.log(sortedJson);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <ol>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.link} style={{ color: item.color }}>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
};
