import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

if (
  !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
  !process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
  !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
  !process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
  !process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
  !process.env.NEXT_PUBLIC_FIREBASE_APP_ID
) {
  throw new Error('Firebase relative environment variables not found');
}

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

const app = initializeApp({
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
});

const db = getFirestore(app);
const storage = getStorage(app);

type Story = {
  username: string;
  type: string;
  rating: string;
  phone: string;
  nickname: string;
  isForbidden: boolean;
  image: string;
  email: string;
  district: string;
  createdAt: Timestamp;
  content: string;
  agree: boolean;
};

export type StoryDoc = {
  id: string;
} & Story;

type StoryEditData = Omit<Story, 'image' | 'createdAt' | 'isForbidden'>;

export const getStories = async () => {
  const storys: StoryDoc[] = [];
  const q = query(collection(db, 'storys'), where('isForbidden', '==', false), orderBy('createdAt', 'desc'));
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    const story = doc.data() as Story;
    storys.push({ id: doc.id, ...story });
  });
  return storys;
};

export const addStory = async (image: Blob, data: StoryEditData) => {
  const storyRef = doc(collection(db, 'storys'));
  const storyId = storyRef.id;
  const imagesRef = ref(storage, `storys/${storyId}.jpeg`);
  const snapshot = await uploadBytes(imagesRef, image, {
    cacheControl: 'public, max-age=604800'
  });
  const url = await getDownloadURL(snapshot.ref);
  await setDoc(doc(db, 'storys', storyId), {
    image: url,
    ...data,
    createdAt: serverTimestamp(),
    isForbidden: false
  });
};
