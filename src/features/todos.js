export default function todos() { 
  return [
    {
      id: Math.random().toString(36).substring(2, 12),
      title: 'Клікни на мене, щоб відредагувати',
      task: 'Клікни на мене, щоб відредагувати, розміри цього поля будуть адаптовуватись',
      status: '3',
      creationDate: new Date(2022, 10, 15, 18, 23, 0).toString(),
      updateDate: new Date(2022, 10, 26, 12, 45, 0).toString()
    },
    {
      id: Math.random().toString(36).substring(2, 12),
      title: 'Покормити кота',
      task: 'Не забути покормити кота сусідів. Він їсть тільки відбірну мраморну телятину з Голандії',
      status: '1',
      creationDate: new Date(2022, 10, 12, 13, 23, 0).toString(),
      updateDate: new Date(2022, 10, 25, 13, 23, 0).toString()
    },
    {
      id: Math.random().toString(36).substring(2, 12),
      title: 'Почати ходити в спортзал',
      task: 'З понеділка точно почну',
      status: '2',
      creationDate: new Date(2022, 10, 17, 6, 35, 0).toString(),
      updateDate: new Date(2022, 10, 24, 6, 35, 0).toString()
    },
    {
      id: Math.random().toString(36).substring(2, 12),
      title: 'Зробити домашнє завдання по React',
      task: 'Cподіваюсь, світло не вимкнуть знову',
      status: '3',
      creationDate: new Date(2022, 10, 6, 23, 23, 0).toString(),
      updateDate: new Date(2022, 10, 23, 23, 23, 0).toString()
    }
  ];
}