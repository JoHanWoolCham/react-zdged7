const baseData = [
  {
    TaskID: 12,
    OwnerID: 2,
    Title: '대여 : 홍길동(XX회원)',
    RoomID: 1,
    Description: '',
    StartTimezone: null,
    Start: '2013-06-24T08:20:00.000Z',
    End: '2013-06-24T10:00:00.000Z',
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 13,
    OwnerID: 3,
    Title: '대여 : 김수진(일반회원)',
    RoomID: 1,
    Description: '',
    StartTimezone: null,
    Start: '2013-06-24T08:30:00.000Z',
    End: '2013-06-24T11:00:00.000Z',
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 14,
    OwnerID: 3,
    Title: '대여 : 직원1(XX회원)',
    RoomID: 1,
    Description: '',
    StartTimezone: null,
    Start: '2013-06-24T11:30:00.000Z',
    End: '2013-06-24T15:00:00.000Z',
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 15,
    OwnerID: 3,
    Title: '대여 : 김선호(일반회원)',
    RoomID: 1,
    Description: '',
    StartTimezone: null,
    Start: '2013-06-24T11:30:00.000Z',
    End: '2013-06-24T15:00:00.000Z',
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
  {
    TaskID: 16,
    OwnerID: 3,
    Title: '대여 : 김해진(일반회원)',
    RoomID: 1,
    Description: '',
    StartTimezone: null,
    Start: '2013-06-24T11:30:00.000Z',
    End: '2013-06-24T15:00:00.000Z',
    EndTimezone: null,
    RecurrenceRule: null,
    RecurrenceID: null,
    RecurrenceException: null,
    isAllDay: false,
  },
];
export const customModelFields = {
  id: 'TaskID',
  title: 'Title',
  description: 'Description',
  start: 'Start',
  end: 'End',
  recurrenceRule: 'RecurrenceRule',
  recurrenceId: 'RecurrenceID',
  recurrenceExceptions: 'RecurrenceException',
};
const currentYear = new Date().getFullYear();

const parseAdjust = (eventDate) => {
  const date = new Date(eventDate);
  date.setFullYear(currentYear);
  return date;
};

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const displayDate = new Date(Date.UTC(currentYear, 5, 24));
export const sampleData = baseData.map((dataItem) => ({
  id: dataItem.TaskID,
  start: parseAdjust(dataItem.Start),
  startTimezone: dataItem.startTimezone,
  end: parseAdjust(dataItem.End),
  endTimezone: dataItem.endTimezone,
  isAllDay: dataItem.isAllDay,
  title: dataItem.Title,
  description: dataItem.Description,
  recurrenceRule: dataItem.RecurrenceRule,
  recurrenceId: dataItem.RecurrenceID,
  recurrenceExceptions: dataItem.RecurrenceException,
  roomId: dataItem.RoomID,
  ownerID: dataItem.OwnerID,
  personId: dataItem.OwnerID,
}));
export const sampleDataWithResources = baseData.map((dataItem) => ({
  id: dataItem.TaskID,
  start: parseAdjust(dataItem.Start),
  startTimezone: dataItem.startTimezone,
  end: parseAdjust(dataItem.End),
  endTimezone: dataItem.endTimezone,
  isAllDay: dataItem.isAllDay,
  title: dataItem.Title,
  description: dataItem.Description,
  recurrenceRule: dataItem.RecurrenceRule,
  recurrenceId: dataItem.RecurrenceID,
  recurrenceExceptions: dataItem.RecurrenceException,
  roomId: randomInt(1, 2),
  personId: dataItem.PersonIDs,
}));
export const sampleDataWithCustomSchema = baseData.map((dataItem) => ({
  ...dataItem,
  Start: parseAdjust(dataItem.Start),
  End: parseAdjust(dataItem.End),
  PersonIDs: randomInt(1, 2),
  RoomID: randomInt(1, 2),
}));
