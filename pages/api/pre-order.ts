import { db } from "@/firebase/clientApp";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const preOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  const result: QueryDocumentSnapshot<DocumentData>[] = [];

  const docs = await getDocs(collection(db, "preorderProds"));

  docs.forEach((doc) => {
    result.push(doc);
  });

  if (!docs.empty) {
    res.status(200).json(
      result.map((d) => ({
        id: d.id,
        data: d.data(),
      }))
    );
  } else {
    console.log("No such document!");
  }
};

export default preOrder;
