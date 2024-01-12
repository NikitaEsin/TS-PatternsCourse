/* {
   "sum": 10000,
   "from": 2,
   "to": 4
}
Возможные ответы:
{
   "status": "success",
   "data": {
      "databaseId": 567,
      "sum": 10000,
      "from": 2,
      "to": 4
   }
},
{
   "status": "failed",
   "data": {
      "errorMessage": "Недостаточно средств",
      "errorCode": 4
   }
} */

interface Request {
  sum: number;
  from: number;
  to: number;
}

enum AnswerStatus {
  Success = 'success',
  Failed = 'failed',
}

interface SuccessfullAnswer {
  databaseId: number;
  sum: number;
  from: number;
  to: number;
}

interface FailedAnswer {
  errorMessage: string;
  errorCode: number;
}

interface Answer {
  status: AnswerStatus;
  data: SuccessfullAnswer | FailedAnswer;
}