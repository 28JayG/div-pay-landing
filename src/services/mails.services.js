import { writeBatch, doc } from 'firebase/firestore';
import { nanoid } from 'nanoid';

import { firestore, dateToFirestoreTimestamp } from 'firebase-config/firebase.utils';
import { FirestoreCollectionsPaths } from 'firebase-config/firebase.consts';

export const addMailToFirebase = async (mailDetails) => {
  const batch = writeBatch(firestore);

  const mailId = nanoid();

  const mail = {
    ...mailDetails,
    slug: mailId,
    createdOn: dateToFirestoreTimestamp(Date.now()),
    id: mailId,
  };

  try {
    const mailRef = doc(firestore, FirestoreCollectionsPaths.mail, mail.id);
    batch.set(mailRef, mail);

    await batch.commit();
    return { data: null };
  } catch (error) {
    return { error };
  }
};
