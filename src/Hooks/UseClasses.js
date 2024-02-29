import { useState, useEffect } from "react";
import { getAllClasses, getAllSubclasses } from "../Data/api";
function useClasses() {
  const [classes, setClasses] = useState([]);
  const [subclasses, setSubclasses] = useState([]);
  useEffect(() => {
    const savedClasses = localStorage.getItem("classes");
    if (savedClasses) setClasses(JSON.parse(savedClasses));
    getAllClasses().then((classes) => {
      setClasses(classes);
      localStorage.setItem("classes", JSON.stringify(classes));
    });
    const savedSubclasses = localStorage.getItem("subclasses");
    if (savedSubclasses) setClasses(JSON.parse(savedSubclasses));
    getAllSubclasses().then((subclasses) => {
      setSubclasses(subclasses);
      localStorage.setItem("subclasses", JSON.stringify(subclasses));
    });
  }, []);
  return {classes, subclasses};
}
export default useClasses;

// useEffect(() => {
//   const savedSpells = localStorage.getItem("spells");
//   if (savedSpells) setSpellList(JSON.parse(savedSpells));
//   getAllSpells().then((spells) => {
//     setSpellList(spells);
//     localStorage.setItem("spells", JSON.stringify(spells));
//   });

//   const savedClasses = localStorage.getItem("classes");
//   if (savedClasses) setSpellList(JSON.parse(savedClasses));
//   getAllClasses().then((classes) => {
//     setSpellList(classes);
//     localStorage.setItem("classes", JSON.stringify(classes));
//   });

//   const savedSubclasses = localStorage.getItem("subclasses");
//   if (savedSubclasses) setSpellList(JSON.parse(savedSubclasses));
//   getAllSubclasses().then((subclasses) => {
//     setSpellList(subclasses);
//     localStorage.setItem("subclasses", JSON.stringify(subclasses));
//   });
// }, []);