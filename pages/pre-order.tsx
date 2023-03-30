import React, { useEffect, useState } from "react";
import { db } from "@/firebase/clientApp";
import {
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

const preOrder = () => {
  const [data, setData] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

  const getPo = async () => {
    const result: QueryDocumentSnapshot<DocumentData>[] = [];

    const querySnapshot = await getDocs(collection(db, "preorderProds"));

    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });

    setData(result);
  };

  useEffect(() => {
    getPo();
  }, []);

  console.log(data.map((d) => d.data()));

  return (
    <div>
      {data.map((d) => (
        <p key={d.id}>{d.data().desc}</p>
      ))}
    </div>
  );
};

export default preOrder;
