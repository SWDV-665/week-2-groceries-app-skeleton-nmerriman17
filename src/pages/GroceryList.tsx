import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from '@ionic/react';

const GroceryList: React.FC = () => {
  const groceries = [
    'Avocados',
    'Bananas',
    'Bread',
    'Cucumber',
    'Cheese',
    'Deli Meat',
    'Eggs',
    'Grapes',
    'Milk',
    'Rice',
    'Strawberries',
    'Watermelon',
  ];

  const handleDelete = (item: string) => {
    // Handle delete logic here
    console.log(`Deleting ${item}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grocery List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          {groceries.map((item, index) => (
            <IonItemSliding key={index}>
              <IonItem>
                <IonLabel>{item}</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => handleDelete(item)}>
                  Delete
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default GroceryList;
