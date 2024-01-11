import { db } from "@/app/firebase/firebase"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { getSession } from "next-auth/react"
import { ProductWithQuantity } from "../products/interfaces"

export const addPurchase = async (items: ProductWithQuantity[]) => {
  const user = await getSession()
  const q = query(
    collection(db, "users"),
    where("email", "==", user?.user?.email)
  )
  const querySnapshot = await getDocs(q)
  const userRef = querySnapshot.docs[0].ref

  const purchaseRef = await addDoc(
    collection(db, "users", userRef.id, "purchases"),
    {
      timestamp: Date.now(),
      items,
    }
  )
  return purchaseRef.id
}
