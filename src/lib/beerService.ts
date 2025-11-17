import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sampleBeers } from "@/lib/sampleBeers";
import type { Beer, UserBeer } from "@/types/beer";

const beersCollection = collection(db, "beers");
const userBeersCollection = collection(db, "userBeers");

export async function fetchBeers(): Promise<Beer[]> {
  try {
    const snap = await getDocs(beersCollection);
    if (snap.empty) return sampleBeers;
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Beer, "id">) }));
  } catch (error) {
    console.error("Failed to load beers, falling back to sample data", error);
    return sampleBeers;
  }
}

export async function fetchBeerById(id: string): Promise<Beer | undefined> {
  try {
    const docRef = doc(db, "beers", id);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...(snap.data() as Omit<Beer, "id">) };
    }
  } catch (error) {
    console.error("Failed to fetch beer", error);
  }
  return sampleBeers.find((beer) => beer.id === id);
}

export async function fetchUserBeerStats(userId: string): Promise<UserBeer[]> {
  if (!userId) return [];
  try {
    const q = query(userBeersCollection, where("userId", "==", userId), orderBy("lastDrunkAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<UserBeer, "id">) }));
  } catch (error) {
    console.error("Failed to fetch user beers", error);
    return [];
  }
}

export async function fetchUserBeer(userId: string, beerId: string): Promise<UserBeer | null> {
  if (!userId) return null;
  try {
    const q = query(
      userBeersCollection,
      where("userId", "==", userId),
      where("beerId", "==", beerId)
    );
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const docSnap = snap.docs[0];
    return { id: docSnap.id, ...(docSnap.data() as Omit<UserBeer, "id">) };
  } catch (error) {
    console.error("Failed to fetch user beer", error);
    return null;
  }
}

export async function incrementUserBeer(userId: string, beerId: string) {
  if (!userId) throw new Error("Missing userId");
  const existing = await fetchUserBeer(userId, beerId);
  const now = serverTimestamp();

  if (existing) {
    const docRef = doc(db, "userBeers", existing.id);
    await updateDoc(docRef, { count: increment(1), lastDrunkAt: now });
    return { ...existing, count: existing.count + 1, lastDrunkAt: Timestamp.now() } as UserBeer;
  }

  const created = await addDoc(userBeersCollection, {
    userId,
    beerId,
    count: 1,
    firstDrunkAt: now,
    lastDrunkAt: now,
  });

  return {
    id: created.id,
    userId,
    beerId,
    count: 1,
    firstDrunkAt: Timestamp.now(),
    lastDrunkAt: Timestamp.now(),
  } satisfies UserBeer;
}

export async function decrementUserBeer(userBeer: UserBeer) {
  if (userBeer.count <= 1) {
    await deleteDoc(doc(db, "userBeers", userBeer.id));
    return null;
  }
  await updateDoc(doc(db, "userBeers", userBeer.id), {
    count: increment(-1),
    lastDrunkAt: serverTimestamp(),
  });
  return { ...userBeer, count: userBeer.count - 1, lastDrunkAt: Timestamp.now() };
}
